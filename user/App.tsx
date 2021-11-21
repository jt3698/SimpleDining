import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { initializeApp } from "firebase/app";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const firebaseConfig = {
    apiKey: "AIzaSyBwJt7SNnVC7W13lp5VaRWTBRREQYkD_is",
    authDomain: "simpledining-272bf.firebaseapp.com",
    projectId: "simpledining-272bf",
    storageBucket: "simpledining-272bf.appspot.com",
    messagingSenderId: "1069417239859",
    appId: "1:1069417239859:web:66d28f786168e08d21da46",
    measurementId: "G-RH45N1KS2D"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log('app initialized')

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
