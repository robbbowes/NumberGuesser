import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game Is Over!</Text>
            <Text>Number of rounds: {props.rounds}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="RESTART" onPress={props.onRestartGame} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen;