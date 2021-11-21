import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { ListItem, Avatar } from 'react-native-elements'
import { Rating, AirbnbRating } from 'react-native-ratings';

interface OrderProps {

  navigation: any;
}

export default ({ navigation } : OrderProps) => {
    const list = [
        {
          name: 'Don\'s Japanese',
          total_Price: '$56',
          avatar_url: 'https://pbs.twimg.com/profile_images/880230764457193473/G0NpHblC_400x400.jpg',
          time_of_order:'21/11/2021 8:26 A.M',
          rating: <Rating
            showRating fractions={1} startingValue={0} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10,  }}/>,
            button: <Button buttonStyle={{backgroundColor:'#f7b307' }} title="Review the food!" onPress={() => navigation.navigate("ReviewFood")}></Button>
            
        },
        {
          name: 'KFC',
          total_Price: '$32',
          avatar_url: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1488265976/k2htrr9z4vsxkjbthskk.png',
          time_of_order:'13/11/2021 7:53 P.M',
          rating: <Rating
             showRating fractions={1} startingValue={3.5} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10 }}
            />,
            button: <Button buttonStyle={{backgroundColor:'#f7b307' }} title="Review the food!" onPress={() => navigation.navigate("ReviewFood")}></Button>
        },
        {
            name: 'McDonald\'s',
            total_Price: '$15',
            avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
            time_of_order:'10/11/2021 1:21 P.M',
            rating: <Rating
               showRating fractions={1} startingValue={3.7} ratingCount={5} imageSize = {20} style={{ paddingVertical: 10 }}
              />,
              button:  <Button buttonStyle={{backgroundColor:'#f7b307' }} title="Review the food!" onPress={() => navigation.navigate("ReviewFood")}></Button>

          },
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
                <ListItem.Subtitle>{l.total_Price}</ListItem.Subtitle>
                <ListItem.Subtitle>{l.time_of_order}</ListItem.Subtitle>
                <ListItem.Subtitle>{l.rating}</ListItem.Subtitle>
                </ListItem.Content>
                {l.button}
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
      paddingTop: 5,
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