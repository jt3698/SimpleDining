import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements/dist/icons/Icon';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { ListItem, Avatar } from 'react-native-elements'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Divider } from 'react-native-elements';


export default function FoodPanelInfo({ restoName }: { restoName: string }) {
    const list = [
        {
          name: 'Big Mac',
        //   icons: Icon<
          price: "$10",
          avatar_url: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg',
          description: 'Two 100% beef patties, a slice of cheese, lettuce, onion and pickles. And the sauce. That unbeatable, tasty Big Mac® sauce. You know you want to.      ',
          rating: <Rating
            showRating fractions={1} readonly={true} startingValue={4.2} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10 }}/>,
            button: <Button title="Add to Cart" style={{paddingVertical: 10}}/>
            
        },
        {
          name: 'Fillet-O-Fish',
          price: "$8",
          avatar_url: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Filet-O-Fish.png',
          description: 'Delicious white Hoki or Pollock fish in crispy breadcrumbs, with cheese and tartare sauce, in a steamed bun.',
          rating: <Rating
             showRating fractions={1} readonly={true} startingValue={4.1} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10 }}
            />,
            button: <Button title="Solid button" buttonStyle={{backgroundColor: 'red'}}/>
        },
        {
            name: '6 piece McNuggets',
            price: "$4",
            avatar_url: 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Chicken-McNuggets-6-pieces.jpg',
            description: 'McDonald’s 6 piece Chicken McNuggets® are made with 100% chicken breast meat in a deliciously crispy coating, just waiting to be dipped. A firm favourite with everyone.',
            rating: <Rating
               showRating fractions={1} readonly={true} startingValue={4.5} ratingCount={5} imageSize = {20} style={{ paddingVertical: 10 }}
              />,
              button: <Button title="Outline button" style={{paddingVertical: 10}}/>
          },
          {
              name: 'Coke',
              price: "$2",
              avatar_url: 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Coca-Cola-Small.jpg?$Product_Desktop$',
              description: 'A classic, since 1886. Enjoy it with a meal or on its own as a refreshing drink.',
              rating: <Rating
                 showRating fractions={1} readonly={true} startingValue={4.3} ratingCount={5} imageSize = {20} style={{ paddingVertical: 10 }}
                />,
                button: <Button title="Outline button" style={{paddingVertical: 10}}/>
            }
      ]
    return (
        <ScrollView>
        <View>
        {
            list.map((l, i) => (
            <ListItem key={i} bottomDivider>
                <Avatar source={{uri: l.avatar_url}} />
                <ListItem.Content>
                <View style={styles.subtitleView}>
                    <ListItem.Title>{l.name}</ListItem.Title>
                </View>
                <ListItem.Subtitle>{l.price}</ListItem.Subtitle>
                <ListItem.Subtitle>{l.rating}</ListItem.Subtitle>
                <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
                <ListItem.ButtonGroup>{l.button}</ListItem.ButtonGroup>
                </ListItem.Content>
            </ListItem>
            ))
            }
            
        </View>
        </ScrollView>
    
    );
}

const styles = StyleSheet.create({
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    ratingImage: {
      height: 19.21,
      width: 100
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    }
  })