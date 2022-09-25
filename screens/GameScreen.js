import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

let min = 1;
let max = 100;

export default function GameScreen(props) {
    const [data, setData] = useState({
        guessedNumber: guess(min, max, props.chosen)
    });

    useEffect(() => {
        if(data.guessedNumber === props.chosen) {
            props.gameStatus(true);
        }
    }, [data]);

    function guess(min, max, exclude) {
        const output = Math.floor(Math.random() * (max - min)) + min;
        if (output === exclude) {
            guess(min, max, exclude);
        } else {
            return output;
        }
    }

    function guessNext(direction) {
        
        if (
            (direction === 'lower' && data.guessedNumber < props.chosen) ||
            (direction === 'higher' && data.guessedNumber > props.chosen)
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
            <Title>Opponent's guess: {data.guessedNumber}</Title>
            <Title>Chosen: {props.chosen}</Title>
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