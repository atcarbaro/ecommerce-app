import { View, Image, Button, TouchableOpacity, Text, StyleSheet } from "react-native";

const SplashImage = require("../assets/splashImage.png");

const InitialScreen = () => {
    return (
        <View
            style={styles.container}
        >
            <Image style={styles.image} source={SplashImage} />
            <View style={styles.containerButton} >
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <View style={{ height: 20 }} />
                <TouchableOpacity style={styles.signUpButton}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View >
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    image: { flex: 1, width: "100%" },
    containerButton: {
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        bottom: 0,
        alignContent: "center",
        paddingBottom: 40,
        paddingHorizontal: 18,
    },
    loginButton: {
        backgroundColor: '#FFFFFF', padding: 10, borderRadius: 50,
    },
    loginText: {
        color: '#000000', textAlign: "center", fontSize: 20, fontWeight: "bold", paddingVertical: 8
    },
    signUpButton: {
        padding: 10, borderRadius: 50, borderColor: '#FFFFFF', borderWidth: 4,
    },
    signUpText: {
        color: '#FFFFFF', textAlign: "center", fontSize: 20, fontWeight: "bold", paddingVertical: 8
    }
});



export default InitialScreen;