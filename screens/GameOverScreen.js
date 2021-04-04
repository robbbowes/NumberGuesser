import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native'

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'
import Colours from '../constants/colours'

const GameOverScreen = props => {
    return (
        <SafeAreaView>
            <ScrollView>
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
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.35,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    highlight: {
        color: Colours.primary,
        fontFamily: 'open-sans-bold'
    }
})

export default GameOverScreen;