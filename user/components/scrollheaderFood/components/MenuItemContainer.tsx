import * as React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Animated from "react-native-reanimated";
import { Album, MenuItem } from "./Model";
import Content from "./Content";
import { Text } from '../../Themed';
import { RootTabScreenProps } from '../../../types';
import Cover from "./Cover";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-elements";

interface MenuItemProps {
  navigation: any;
  menuItem: MenuItem;
  fixedQty?: number;
}

export default ({ navigation, menuItem, fixedQty }: MenuItemProps) => {
  const [qty, setQty] = React.useState(0)

  const decrementQty = () => {
    if (qty == 0) {
      return
    }
    setQty(qty-1)
  }
  const incrementQty = () => {
    setQty(qty+1);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri:menuItem.picturePath}} style={styles.image}>
        <View style={styles.horizontalContainerOuter}>
          <View style={styles.horizontalContainer}>
            <Text style={styles.padrightpluswrapper}>{menuItem.name}</Text>
            {menuItem.isThumbsUp && <Icon size={20} style={styles.margdown} name="thumbs-up"></Icon>}
            {menuItem.isChefRecommended && <MaterialIcon size={20} style={styles.margdown} name="chef-hat"></MaterialIcon>}
          </View>
          {!fixedQty &&
          <View style={styles.horizontalContainerNoFlex}>
            <Text style={styles.padrightpluswrapper}>${menuItem.price}</Text>
            <Text style={styles.button} onPress={decrementQty}>-</Text>
            <View style={styles.qtyContainer}>
              <Text style={styles.qty}>{qty}</Text>
            </View>
            <Text style={styles.button} onPress={incrementQty}>+</Text>
          </View>
          }
          {fixedQty &&
          <View style={styles.horizontalContainerNoFlex}>
            <Text style={styles.padrightpluswrapper}>${menuItem.price * fixedQty}</Text>
            <View style={styles.qtyContainer}>
              <Text style={styles.qty}>{fixedQty}</Text>
            </View>
          </View>
          }
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: '100%',
    maxHeight: 70,
  },
  margdown: {
    marginTop: 4,
  },
  qtyContainer: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  qty: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  button: {
    width: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    backgroundColor: 'rgb(50,100,255)',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  horizontalContainerOuter: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    textAlign: "center",
    fontSize: 20,
    backgroundColor: 'rgba(255,255,255,0.44)',
    padding: 20,
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    textAlign: "center",
    fontSize: 20,
  },
  horizontalContainerNoFlex: {
    flexDirection: "row",
    alignContent: "center",
    textAlign: "center",

    fontSize: 20,
  },
  padrightpluswrapper: {
    paddingRight: 10,
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: '700',
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
  }
});
