import React from 'react';
import {View,Text,StyleSheet,Image,Button,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';

const GlobalStyles = require("../src/globalStyles/GlobalStyles")

export const Navbar = ({navigation}) => {
    return(
        <View style={{marginBottom:40}}>
            <View style={[GlobalStyles.container,styles.navbar]}>
                <View>
                    <Text style={{fontSize: 30}}>Niftily</Text>
                    <Text style={styles.text}>NFT Fan Engagement</Text>
                </View>
                <TouchableWithoutFeedback onPress={() =>
                    navigation.navigate('Profile')
                }>
                    <Image style={styles.tinyLogo} source={require("./assets/images/user.png")}/>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.navlinks}>
                <TouchableOpacity
                    style={GlobalStyles.buttonLink}
                    onPress={() =>
                        navigation.navigate('Home')
                    }>
                    <Text style={GlobalStyles.buttonLinkText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={GlobalStyles.buttonLink}
                    onPress={() =>
                        navigation.navigate('Tokens')
                    }>
                    <Text style={GlobalStyles.buttonLinkText}>Tokens</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={GlobalStyles.buttonLink}
                    onPress={() =>
                        navigation.navigate('ContentManager')
                    }>
                    <Text style={GlobalStyles.buttonLinkText}>Content Manager</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={GlobalStyles.buttonLink}
                    onPress={() =>
                        navigation.navigate('Wallet')
                    }>
                    <Text style={GlobalStyles.buttonLinkText}>Wallet</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    navlinks:{
        flexDirection:'row',
        minHeight:40,
        backgroundColor:'#3949ab',
    },
    navbar : {
        flexDirection:'row',
        minHeight:70,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#3949ab',
        paddingBottom:10
    },
    text : {
        color: '#fff',
        fontSize:20
    },
    tinyLogo:{
        width:40,
        height:40
    }
})
