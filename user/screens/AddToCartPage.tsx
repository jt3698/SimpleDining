import * as React from 'react';
import { StyleSheet } from 'react-native';
import SBar  from '../components/SearchBar';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RestoPanelInfo from '../components/RestoPanelInfo';
import { SearchBar } from 'react-native-elements';
import FoodDetail from '../components/FoodDetail';

// maybe pass in json arguement in param here
//example json
// const list = 
//         {
//           name: 'Big Mac',
//         //   icons: Icon< 
//           price: "$10",
//           url: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg',
//           description: 'Two 100% beef patties, a slice of cheese, lettuce, onion and pickles. And the sauce. That unbeatable, tasty Big Mac® sauce. You know you want to.      ',
//           rating: <Rating
//             showRating fractions={1} readonly={true} startingValue={4.2} ratingCount={5} imageSize = {20}  style={{ paddingVertical: 10 }}/>,
//             button: <Button title="Add to Cart" style={{paddingVertical: 10}}/>
            
//         }
export default function AddToCartPage({ navigation }: RootTabScreenProps<'AddToCart'>) {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* INSERT SCROLLBAR HERE LATER */}

      {/* pass in List as argument below later */}
      {/* <FoodDetail list=list/> */}
    </View>
  );    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
