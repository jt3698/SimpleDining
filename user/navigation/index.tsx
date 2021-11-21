/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import BrowseRestosPage from '../screens/BrowseRestosPage';
import BrowseFoodsPage from '../screens/BrowseFoodsPage';
import LoginPage from '../screens/LoginPage';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import OrderHistoryPage from '../screens/OrderHistoryPage';
import SignUpPage from '../screens/SignUpPage';
import VerifyPage from '../screens/VerifyPage';
import ViewCartPage from '../screens/ViewCartPage'

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ReviewFoodPage from '../screens/ReviewFoodPage';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpPage} options={{ headerShown: false }} />
      <Stack.Screen name="Verify" component={VerifyPage} options={{ headerShown: false }} />
      <Stack.Screen name="BrowseFood" component={BrowseFoodsPage} options={{ headerShown: false }} />
      <Stack.Screen name="ReviewFood" component={ReviewFoodPage} options={{ headerShown: false }} />
      <Stack.Screen name="BrowseRestos" component={BrowseRestosPage} options={{ headerShown: false }} />
      <Stack.Screen name="ViewCart" component={ViewCartPage} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="BrowseRestos"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint, 
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="BrowseRestos"
        component={BrowseRestosPage}
        options={({ navigation }: RootTabScreenProps<'BrowseRestos'>) => ({
          title: 'Browse Restaurants',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="OrderHistory"
        component={OrderHistoryPage}
        options={{
          title: 'Order History',
          tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="AccountIcon"
        component={OrderHistoryPage}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
