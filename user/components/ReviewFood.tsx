import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
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
          name: 'Gyudon',
        //   icons: Icon<
          price: "$16",
          avatar_url: 'https://image.shutterstock.com/image-photo/gyudon-japanese-food-beef-bowl-260nw-1087462463.jpg',
          rating: <Rating
            showRating fractions={1}  startingValue={2.5} ratingCount={5} imageSize = {20}  style={{width: 150, paddingBottom: 5 }}/>,
            
        },
        {
          name: 'Salmon Sushi',
          price: "$21",
          avatar_url: 'https://tatyanaseverydayfood.com/wp-content/uploads/2014/04/Spicy-Salmon-Sushi-Roll.jpg',
          rating: <Rating
             showRating fractions={1} startingValue={2.5} ratingCount={5} imageSize = {20}  style={{width: 150, paddingBottom: 5 }}
            />,
        }
      ]
    return (
        <ScrollView>
        <View>
        {
            list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <ImageBackground source={{uri:l.avatar_url}} style={styles.image}>
                <ListItem.Content style={styles.blurBg}>
                <View style={styles.subtitleView}>
                    <ListItem.Title>{l.name}</ListItem.Title>
                </View>
                <ListItem.Subtitle>{l.price}</ListItem.Subtitle>
                <View style={styles.blurBg}>{l.rating}</View>
                <TextInput style={styles.smallInput} placeholder="What do you think about the food?"/>

                </ListItem.Content>
              </ImageBackground>

            </ListItem>
            
            ))
            
            }            
            <Text style={{textAlign:"center", paddingTop:10, fontSize:16}}> Rate the Service!</Text>
            <Rating showRating fractions={1} startingValue={2.5} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10 }}/>
            <TextInput style={styles.input} placeholder="What do you think about the Service?"/>
            
            <Text style={{textAlign:"center", paddingTop:10, fontSize:16}}> Rate the Ambience!</Text>
            <Rating showRating fractions={1} startingValue={2.5} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10 }}/>
            <TextInput style={styles.input} placeholder="What do you think about the ambience?"/>

       <Button buttonStyle={{marginBottom:30 ,backgroundColor:'#f7b307', marginTop:20, marginLeft:10, marginRight:10 }} title="Submit Review!" onPress={() => navigation.navigate("Root")}></Button>

        </View>
        </ScrollView>
    
    );
}

const styles = StyleSheet.create({
    subtitleView: {
      flexDirection: 'row',
      paddingTop: 5
    },
    image: {
      width: '100%',
      height: '100%',
      position: 'relative',
      zIndex: -1,
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
      flexDirection: 'row',
    },
    blurBg: {
      backgroundColor: 'rgba(255,255,255,0.69)',
    },
    smallInput: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlignVertical: "top",
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