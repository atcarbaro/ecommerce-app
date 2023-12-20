import React from "react";
import { View, Image, Button, TouchableOpacity, Text, StyleSheet, TextInput} from "react-native";

const SplashImage2 = require("../assets/splashImage2.png");

const FirstScreen = () => {
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={SplashImage2} />
            <View style={styles.containerOnlyButtons}> 
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={{ height: 10 }} />
                <TouchableOpacity style={styles.signUpButton}>
                    <Text style={styles.signUpText}>
                        Sing Up
                    </Text>
                </TouchableOpacity>
            </View>   
        </View>
      );
    }
    
    const styles= StyleSheet.create({
        image: {
            flex: 1, 
            width: "100%"
        },

        container: {
            flex: 1,
            paddingTop:25,
            paddingBottom: 0,
            paddingHorizontal: 0

        },

        containerOnlyButtons:{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            alignContent: "center",
            paddingBottom: 35,
            paddingHorizontal: 50
        },
        
        loginButton: {
            backgroundColor: '#FFFFFF', 
            padding: 10, 
            borderRadius: 40
        },

        signUpButton: {
            padding: 10, 
            borderRadius: 40, 
            borderColor: '#FFFFFF', 
            borderWidth: 5
        },

        loginText: {
            color: '#000000', 
            textAlign: "center", 
            paddingVertical: 10,
            fontSize: 15, 
            fontWeight: "bold", 
        },

        signUpText: {
            color: '#FFFFFF', 
            textAlign: "center", 
            paddingVertical: 10,
            fontSize: 15, 
            fontWeight: "bold"
        }
        
    });

export default FirstScreen;