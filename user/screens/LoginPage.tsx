import * as React from 'react';
import { StyleSheet, Image, TextInput } from 'react-native';
import SBar  from '../components/SearchBar';
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

export default function LoginPage({ navigation }: RootTabScreenProps<'LoginPage'>) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  const auth = getAuth()

  auth.onAuthStateChanged((user) => {
    if (user?.uid != null) {
      console.log('Successful log in')
      navigation.navigate('VerifyPage')
    }
  })

  const onError = () => {
    setIsError(true);
    setTimeout(() => {setIsError(false), 2000});
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
        // ...
        navigation.navigate('BrowseFood')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("failed to log in through email + password, errorcode: ", errorCode, " errormsg: ", errorMessage)
        // ..
        onError()
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
        // ..
        onError()
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
        // ..
        onError()
      }
    )
  }

  const createAccount = () => {
    console.log("createAccount fn")
    console.log('email, password: ', email, password)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("success, user", user)
        console.log(userCredential)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("fail, errorcode ", errorCode, " errormsg ", errorMessage)
        // ..
        onError()
    });
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
        <View style={styles.smallblock}>
          <Button style={styles.button} title="Log In" onPress={logIn}></Button>
        </View>
        <Text style={styles.subtitle}>Forgot Password?</Text>
        <View style={styles.block}>
          <Text>Don't have account?</Text>
          <Text style={styles.subtitle}>Sign up here</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text>------- Or Login With -------</Text>
        <View style={styles.horizontalContainer}>
          <Button onPress={logInWithFacebook}><Icon raised reverse color={'blue'} name="facebook"></Icon></Button>
          <Button onPress={logInWithGoogle}><Icon raised reverse name="google"></Icon></Button>
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
