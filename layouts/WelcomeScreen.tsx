import React from "react";
import { View, Image } from "react-native";
const SplashImage = require("../assets/splashImage.png");

const WelcomeScreen = () => {
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
