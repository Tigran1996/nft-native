import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Home from './src/containers/Home';
import Tokens from './src/containers/Tokens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContentManager from './src/containers/ContentManager';
import Wallet from './src/containers/Wallet';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name='Home' component={Home}/>
                    <Stack.Screen name='Tokens' component={Tokens}/>
                    <Stack.Screen name='ContentManager' component={ContentManager}/>
                    <Stack.Screen name='Wallet' component={Wallet}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});

