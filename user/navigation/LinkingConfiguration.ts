/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: 'login',
      Root: {
        screens: {
          BrowseRestos: {
            screens: {
              BrowseRestosPage: 'browseRestos',
            },
          },
          OrderHistory: {
            screens: {
              OrderHistoryPage: 'orderHistory',
            },
          },
          browseFood: {
            screens: {
              BrowseFoodsPage: 'browseFood',
            },
          },
          BrowseFoods: {
            screens: {
              BrowseFoodsPage: 'browseFood',
            },
          },
          AddToCart: {
            screens: {
              AddToCartPage: 'AddToCart',
            },
          },
          ReviewFood: {
            screens: {
              AddToCartPage: 'ReviewFood',
            },
          },
          ViewCarts: {
            screens: {
              AddToCartPage: 'ViewCart',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
