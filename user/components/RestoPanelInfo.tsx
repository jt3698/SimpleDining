import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements/dist/icons/Icon';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { ListItem, Avatar } from 'react-native-elements'
import { Rating, AirbnbRating } from 'react-native-ratings';



export default function RestoPanelInfo({ restoName }: { restoName: string }) {
    const list = [
        {
          name: 'McDonald\'s',
          avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
          tags: 'Western, Fast Food',
          rating: <Rating
            showRating fractions={1} readonly={true} startingValue={3.9} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10 }}/>,
            button: <Button title="Outline button" style={{paddingVertical: 10}}/>
            
        },
        {
          name: 'KFC',
          avatar_url: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1488265976/k2htrr9z4vsxkjbthskk.png',
          tags: 'Western, Fast Food',
          rating: <Rating
             showRating fractions={1} readonly={true} startingValue={4.1} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10 }}
            />,
            button: <Button title="Solid button" buttonStyle={{backgroundColor: 'red'}}/>
        },
        {
            name: 'Bakmi GM',
            avatar_url: 'https://www.seekpng.com/png/detail/223-2236625_bakmi-gm.png',
            tags: 'Asian',
            rating: <Rating
               showRating fractions={1} readonly={true} startingValue={4.5} ratingCount={5} imageSize = {20} style={{ paddingVertical: 10 }}
              />,
              button: <Button title="Outline button" style={{paddingVertical: 10}}/>
          },
          {
              name: 'HokBen',
              avatar_url: 'https://upload.wikimedia.org/wikipedia/en/0/02/HokBen_Logo.jpg',
              tags: 'Asian',
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
                <ListItem.Subtitle>{l.tags}</ListItem.Subtitle>
                <ListItem.Subtitle>{l.rating}</ListItem.Subtitle>
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