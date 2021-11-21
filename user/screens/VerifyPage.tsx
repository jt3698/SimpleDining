import * as React from 'react';
import { StyleSheet, Image, TextInput } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RestoPanelInfo from '../components/RestoPanelInfo';
import { Button, SearchBar, Icon } from 'react-native-elements';
import PhoneInput from "react-native-phone-number-input";
import axios from 'axios';
import qs from 'qs';
import base64 from 'react-native-base64';

export default function VerifyPage({ navigation }: RootTabScreenProps<'VerifyPage'>) {
  const [value, setValue] = React.useState("");
  const [formattedValue, setFormattedValue] = React.useState("");
  const phoneInput = React.useRef<PhoneInput>(null);

  const [errorMessage, setErrorMessage] = React.useState('');

  const [isPhoneEntered, setIsPhoneEntered] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState('');

  let phoneNumber: string;

  const data = require('../secrets/twilio.json');// JSON.parse(fs.readFileSync('../secrets/twilio.json') as any)
  const serviceSid = data.serviceSid
  const accountSid = data.accountSid
  const authToken = data.authToken
  const twilioURI = `https://verify.twilio.com/v2/Services/${serviceSid}/`

  const verifyPhoneNumber = () => {
    if (!phoneInput.current?.isValidNumber(value)) {
      setErrorMessage('Invalid Phone Number');
      setIsPhoneEntered(false);
      return;
    }
    phoneNumber = formattedValue

    sendCode()
  }
  const sendCode = async () => {
    console.log('send code')
    const URI = twilioURI+'Verifications'
    console.log('twilio uri', URI)

    const authHeader = 'Basic ' + base64.encode(`${accountSid}:${authToken}`);
    // send http req to twilio
    axios.post(URI, qs.stringify({
      "To": phoneNumber,
      "Channel": "sms",
    }), {
      headers: { 
        'Authorization': authHeader,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((resp) => {
      console.log('good, resp', resp)
      setIsPhoneEntered(true);
    }).catch((err) => {
      console.log('err', err)
    })

  }

  const changePhoneNumber = () => {
    setIsPhoneEntered(false);
  }

  const verifyCode = async () => {
    const phoneNumber = formattedValue;
    // send http req to twilio
    const URI = twilioURI+'VerificationCheck'
    console.log('twilio uri', URI)

    const authHeader = 'Basic ' + base64.encode(`${accountSid}:${authToken}`);
    // send http req to twilio
    axios.post(URI, qs.stringify({
      "To": phoneNumber,
      "Code": verificationCode,
    }), {
      headers: { 
        'Authorization': authHeader,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((resp) => {
      console.log('good, resp', resp)

      if (resp.data.status == "approved") {
        console.log('correct code')
        navigation.navigate('Root')
      } else {
        console.log('wrong code')
        setErrorMessage('Wrong Verification Code')
      }
    }).catch((err) => {
      console.log('err', err)
    })
  }

  const skipVerification = () => {
    navigation.navigate('Root')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: "https://hips.hearstapps.com/toc.h-cdn.co/assets/17/01/1483652513-lebernardin-daniel-krieger.jpg"}}></Image>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}>
        </Image>
        <Text style={styles.title}>Verify Phone Number</Text>

        {!isPhoneEntered &&
        <View style={styles.block}>
          <Text style={styles.regular}>Please enter your phone number</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="ID"
            layout="first"
            onChangeText={(text) => {
              setErrorMessage('');
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
          <Text style={styles.error}>{errorMessage}</Text>
          <View style={styles.regular}>
            <Button style={styles.button} raised title="Verify" onPress={verifyPhoneNumber}></Button>
          </View>
        </View>
        }

        {isPhoneEntered &&
        <View style={styles.block}>
          <Text>Please enter the verification code we sent to {formattedValue}</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={verificationCode} onChangeText={(text) => {
            setErrorMessage('')
            setVerificationCode(text)
          }}></TextInput>
          <Button style={styles.button} raised title="Submit" onPress={verifyCode}></Button>
          <Text style={styles.error}>{errorMessage}</Text>
          <View style={styles.regular}>
            <Text>Didn't receive a code?</Text>
            <Text style={styles.subtitle} onPress={sendCode}>Resend code</Text>
            <Text style={styles.subtitle} onPress={changePhoneNumber}>Change phone number</Text>
          </View>
        </View>
        }
          
      </View>
      {false &&
      <View style={styles.footer}>
        <Text style={styles.subtitle} onPress={skipVerification}>Skip verification...</Text>
      </View>
}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  smallblock: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  block: {
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  button: {
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  error: {
    color: 'red',
  },
  regular: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  logo: {
    width: 75,
    height: 75,
  },
  input: {
    width: 100,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '120%',
    opacity: 0.18,
  }
});
