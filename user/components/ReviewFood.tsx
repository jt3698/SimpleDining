import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { ListItem, Avatar } from 'react-native-elements'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Divider } from 'react-native-elements';

interface ReviewProps {

  navigation: any;
}

export default ({ navigation }: ReviewProps) => {
    const list = [
        {
          name: 'Big Mac',
        //   icons: Icon<
          price: "$10",
          avatar_url: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg',
          description: 'Two 100% beef patties, a slice of cheese, lettuce, onion and pickles. And the sauce. That unbeatable, tasty Big Mac® sauce. You know you want to.      ',
          rating: <Rating
            showRating fractions={1}  startingValue={2.5} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10 }}/>,
            
        },
        {
          name: 'Fillet-O-Fish',
          price: "$8",
          avatar_url: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Filet-O-Fish.png',
          description: 'Delicious white Hoki or Pollock fish in crispy breadcrumbs, with cheese and tartare sauce, in a steamed bun.',
          rating: <Rating
             showRating fractions={1} startingValue={2.5} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10 }}
            />,
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
                </ListItem.Content>
            </ListItem>
            ))
            
            }
            <TextInput
        style={styles.input}
        placeholder="Type what you think about the restaurant here!"
      />
       <Button buttonStyle={{backgroundColor:'#f7b307', marginTop:20, marginLeft:10, marginRight:10 }} title="Submit Review!" onPress={() => navigation.navigate("Root")}></Button>

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
    input: {
      height: 80,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlignVertical: "top",
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