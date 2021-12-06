import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Navbar} from '../Navbar';
import VideoPlayer from 'react-native-video-controls';
const vSource = require('../assets/video/sample-mp4-file.mp4')
const GlobalStyles = require("../globalStyles/GlobalStyles")

export default function Home({navigation}) {
    return (
        <>
            <Navbar navigation={navigation}/>
            <View style={GlobalStyles.container}>
                <Text style={GlobalStyles.title}>How it Works</Text>
                <Text style={GlobalStyles.marginBottom}>A lot of good text content here telling the
                    consumers what the point is</Text>

                <VideoPlayer
                    source={vSource}
                    resizeMode={"contain"}
                    controls={true}
                    fullscreen={true}
                    style={styles.backgroundVideo} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position:'relative',
        width:'100%',
        height:200
    },
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});

