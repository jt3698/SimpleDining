import * as React from 'react';
import { StyleSheet, Image, TextInput } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RestoPanelInfo from '../components/RestoPanelInfo';
import { Button, SearchBar, Icon } from 'react-native-elements';
import FoodPanelInfo from '../components/FoodPanelInfo';
import FoodDetail from '../components/FoodDetail';
import OrderHistory from '../components/OrderHistory';
import ReviewFood from '../components/ReviewFood';
import ViewCart from '../components/ViewCart';
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

export default function SignUpPage({ navigation }: RootTabScreenProps<'SignUpPage'>) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  const auth = getAuth();

  const onError = (message: string) => {
    setSuccessMessage('');
    setErrorMessage(message);
  }

  const onSuccess = (message: string) => {
    setSuccessMessage(message);
  }

  const getSuccessMessage = () => {
    return <Text style={styles.success}>
      {successMessage}
    </Text>
  }

  const getErrorMessage = () => {
    return <Text style={styles.error}>
      {errorMessage}
    </Text>
  }

  const logIn = () => {
    console.log("logging in")
    console.log('email, password: ', email, password)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("success, user", user)
        console.log(userCredential)
        navigation.navigate('Verify')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("failed to log in through email + password, errorcode: ", errorCode, " errormsg: ", errorMessage)
        onError('Failed to log in, please try again.')
    });
  }

  const signUp = () => {
    console.log("createAccount fn")
    console.log('email, password: ', email, password)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("success, user", user)
        console.log(userCredential)
        onSuccess('Successfully created an account. Logging in..')
        logIn()
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("fail, errorcode ", errorCode, " errormsg ", errorMessage)
        onError('Failed to create an account. Please try again.')
    });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: "https://hips.hearstapps.com/toc.h-cdn.co/assets/17/01/1483652513-lebernardin-daniel-krieger.jpg"}}></Image>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}>
        </Image>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder={"Email"}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder={"Password"}
          secureTextEntry={true}
        />
        <Text>
          {successMessage && getSuccessMessage()}
          {!successMessage && errorMessage && getErrorMessage()}
        </Text>
        <View style={styles.smallblock}>
          <Button style={styles.button} title="Sign Up" onPress={signUp}></Button>
        </View>
        <View style={styles.block}>
          <Text>Already have an account?</Text>
          <Text style={styles.subtitle}>Log in here</Text>
        </View>
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
    backgroundColor: 'rgba(0,0,0,0)'
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
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
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  button: {
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  logo: {
    width: 75,
    height: 75,
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
  image: {
    position: 'absolute',
    width: '100%',
    height: '120%',
    opacity: 0.18,
  }
});
