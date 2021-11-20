import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { ListItem, Avatar } from 'react-native-elements'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Image } from 'react-native-elements';


// change param below to list
export default function FoodDetail({ restoName }: { restoName: string }) {
    const list = 
        {
          name: 'Big Mac',
        //   icons: Icon< 
          price: "$10",
          url: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg',
          description: 'Two 100% beef patties, a slice of cheese, lettuce, onion and pickles. And the sauce. That unbeatable, tasty Big Mac® sauce. You know you want to.      ',
          rating: <Rating
            showRating fractions={1} readonly={true} startingValue={4.2} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10 }}/>,
            button: <Button buttonStyle={{backgroundColor:'#f7b307' }} title="Add to Cart" ></Button>
            
        }
    
    return (
        <View style = {styles.container}>
            <Text style={{textAlign:"center", fontSize: 32}}> {list.name}</Text>
            <Image
                source={{ uri: list.url }}
                style={{ width: 150, height: 150, marginTop:20, justifyContent:"center", alignItems:"center"}}
            />
            {list.rating}
            <Text style={{textAlign:"center", fontSize: 20, marginTop: 20, marginLeft:10, marginRight:10}}> {list.description}</Text>
            <View style={{marginTop:20}}>
                {list.button}
            </View>
        </View>
    
    );
}

const styles = StyleSheet.create({
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
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