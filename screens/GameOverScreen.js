import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'
import Colours from '../constants/colours'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game Is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    source={require('../assets/success.png')}
                    // source={{uri: 'https://www.amonteam.com/uploads/agent-1/summit_county_hiking_season.jpg'}}
                    style={styles.image}
                    resizeMode="cover"

                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            </View>
            <MainButton onPress={props.onRestartGame}>NEW GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colours.primary,
        fontFamily: 'open-sans-bold'
    }
})

export default GameOverScreen;