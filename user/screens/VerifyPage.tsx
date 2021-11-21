import * as React from 'react';
import { StyleSheet, Image, TextInput } from 'react-native';
import SBar  from '../components/SearchBar';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RestoPanelInfo from '../components/RestoPanelInfo';
import { Button, SearchBar, Icon } from 'react-native-elements';
import PhoneInput from "react-native-phone-number-input";
import axios from 'axios';
import * as fs from 'fs';

export default function VerifyPage({ navigation }: RootTabScreenProps<'VerifyPage'>) {
  const [value, setValue] = React.useState("");
  const [formattedValue, setFormattedValue] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const phoneInput = React.useRef<PhoneInput>(null);

  const [error, setError] = React.useState(false);

  const [isPhoneEntered, setIsPhoneEntered] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState('');

  const twilioURI = "https://verify.twilio.com/v2/Services/"

  const sendCode = () => {
    if (!valid) {
      setError(true);
      setIsPhoneEntered(false);
      return;
    }

    const phoneNumber = formattedValue;
    // send http req to twilio
    setIsPhoneEntered(true);
  }

  const changePhoneNumber = () => {
    setIsPhoneEntered(false);
  }

  const verifyCode = () => {
    // send http req to twilio
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png',
          }}>
        </Image>
        <Text style={styles.title}>Verify Phone Number</Text>

        {!isPhoneEntered &&
        <View>
          <Text>Please enter your phone number</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="ID"
            layout="first"
            onChangeText={(text) => {
              setError(false);
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
          <Button style={styles.button} raised title="Verify" onPress={sendCode}></Button>
        </View>
        }

        {isPhoneEntered &&
        <View>
          <Text>Please enter the verification code we sent to {formattedValue}</Text>
          <TextInput keyboardType="numeric" value={verificationCode}></TextInput>
          <Button style={styles.button} raised title="Submit" onPress={verifyCode}></Button>
          <Text>Didn't receive a code?</Text>
          <Text style={styles.subtitle} onPress={sendCode}>Resend code</Text>
          <Text style={styles.subtitle} onPress={changePhoneNumber}>Change phone number</Text>
        </View>
        }
          
      </View>
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
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  smallblock: {
    padding: 10,
    alignItems: 'center',
  },
  block: {
    padding: 30,
    alignItems: 'center',
  },
  button: {
    padding: 30,
  },
  logo: {
    width: 66,
    height: 58,
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
});
