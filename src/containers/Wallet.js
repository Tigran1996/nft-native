import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Navbar} from '../Navbar';


export default function Wallet({navigation}) {
    return (
        <>
            <Navbar navigation={navigation}/>

            <Text>Wallet</Text>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});

