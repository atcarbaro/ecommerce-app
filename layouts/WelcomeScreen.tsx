import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Image } from "react-native";
const SplashImage = require("../assets/splashImage.png");

interface Props extends NativeStackScreenProps<any, any> { }

const WelcomeScreen = ({ navigation }: Props) => {

  setTimeout(callback, 5000);
  function callback() {
    console.log('DESPUES DE 5 SEGUNDOS')
    navigation.navigate('Initial')
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image style={{ flex: 1, width: "100%" }} source={SplashImage} />
    </View>
  );
};

export default WelcomeScreen;
