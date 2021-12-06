import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Navbar} from '../Navbar';


export default function ContentManager({navigation}) {
    return (
        <>
            <Navbar navigation={navigation}/>

            <Text>Content Manager</Text>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});

