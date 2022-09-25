import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

let min = 1;
let max = 100;

export default function GameScreen(props) {
    const [data, setData] = useState({
        guessedNumber: guess(1, 100, parseInt(props.chosen))
    });

    function guess(min, max, exclude) {
        const output = Math.floor(Math.random() * (max - min)) + min;
        if (output === exclude) {
            guess(min, max, exclude);
        } else {
            return output;
        }
    }

    function guessNext(direction) {
        console.log(parseInt(props.chosen))
        if (
            (direction === 'lower' && data.guessedNumber < parseInt(props.chosen)) ||
            (direction === 'higher' && data.guessedNumber > parseInt(props.chosen))
        ) {
            Alert.alert('Dont lie :)', 'You know that this is wrong!', 
            [{ text: 'Sorry :)', style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            max = data.guessedNumber;
        } else {
            min = data.guessedNumber + 1;
        }
        setData(prev => {
            return {
                ...prev,
                guessedNumber: guess(min, max, data.guessedNumber)
            }
        });

    }

    return (
        <View style={styles.container}>
            <Title>Opponent's guess: {data.guessedNumber} || {props.chosen}</Title>
            <Text>Higher or Lower ?</Text>
            <View style={styles.buttonHolder}>
                <PrimaryButton onPress={guessNext.bind(this, 'higher')}>+</PrimaryButton>
                <PrimaryButton onPress={guessNext.bind(this, 'lower')}>-</PrimaryButton>
            </View>
            <Text>Logs:</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 50
    },
    buttonHolder: {
        flexDirection: 'row'
    }
});