import * as React from 'react';
import { StyleSheet, Image, TextInput } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RestoPanelInfo from '../components/RestoPanelInfo';
import { Button, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import FoodPanelInfo from '../components/FoodPanelInfo';
import FoodDetail from '../components/FoodDetail';
import OrderHistory from '../components/OrderHistory';
import ReviewFood from '../components/ReviewFood';
import ViewCart from '../components/ViewCart';
import { 
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

export default function LoginPage({ navigation }: RootTabScreenProps<'LoginPage'>) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState('');

  const auth = getAuth()

  const onError = (message: string) => {
    setErrorMessage(message);
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
        navigation.navigate('Root')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("failed to log in through email + password, errorcode: ", errorCode, " errormsg: ", errorMessage)
        onError('Failed to log in.')
    });
  }

  const logInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    // Start a sign in process for an unauthenticated user.
    provider.addScope('profile');
    provider.addScope('email');
    signInWithPopup(getAuth(), provider).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("failed to log in through facebook, errorcode: ", errorCode, " errormsg: ", errorMessage)
        onError('Failed to log in.')
      }
    )
  }

  const logInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    // Start a sign in process for an unauthenticated user.
    provider.addScope('profile');
    provider.addScope('email');
    signInWithPopup(auth, provider).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("failed to log in through google, errorcode: ", errorCode, " errormsg: ", errorMessage)
        onError('Failed to log in.')
      }
    )
  }

  const navigateToSignUpPage = () => {
    navigation.navigate('SignUp')
  }

  const getErrorMessage = () => {
    return <Text style={styles.error}>
      {errorMessage}
    </Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}>
        </Image>
        <Text style={styles.title}>Log In</Text>
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
        {errorMessage && getErrorMessage()}
        </Text>
        <View style={styles.smallblock}>
          <Button style={styles.button} title="Log In" onPress={logIn}></Button>
        </View>
        <Text style={styles.subtitle}>Forgot Password?</Text>
        <View style={styles.block}>
          <Text>Don't have account?</Text>
          <Text style={styles.subtitle} onPress={navigateToSignUpPage}>Sign up here</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text>------- Or Login With -------</Text>
        <View style={styles.horizontalContainer}>
          <View style={styles.iconContainer}>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={logInWithFacebook}
            >Facebook</Icon.Button>
          </View>
          <View style={styles.iconContainer}>
            <Icon.Button
              name="google"
              onPress={logInWithGoogle}
            >Google</Icon.Button>
          </View>
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
  error: {
    color: 'red',
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
  iconContainer: {
    padding: 15
  }
});
