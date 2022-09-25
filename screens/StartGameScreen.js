import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../constants/colors";

export default function StartGameScreen(props) {
    const [data, setData] = useState({
        inputNumber: '',
    });

    function textHandler(txt) {
        setData(prev => {
            return {...prev, inputNumber: txt}
        });
    }

    function confirmInput() {
        console.log(data.inputNumber)
        let chosenNumber = parseInt(data.inputNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 
            'Number has to be a number between 0-99',
            [{ text: 'Okay', style: 'destructive', onPress: reset }]);
            return;
        } else {
            console.log(chosenNumber)
            props.onPickNumber(chosenNumber);
        }
    }

    function reset() {
        setData(prev => {
            return {
                ...prev,
                inputNumber: ''
            }
        })
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput value={data.inputNumber} onChange={textHandler} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} maxLength={2} style={styles.numberInput}></TextInput>
            <View style={styles.buttonHolder}>
                <View style={{ flex: 1 }}>
                    <PrimaryButton onPress={reset}>Reset</PrimaryButton>
                </View>
                <View style={{ flex: 1 }}>
                    <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4, // Android specific for box shadow
        shadowColor: 'black', // IOS
        shadowOffset: { width: 0, height: 2 }, // IOS
        shadowRadius: 6, // IOS
        shadowOpacity: 0.25, // IOS
    },
    numberInput: {
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: colors.accent500,
        color: colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonHolder: {
        flexDirection: 'row'
    }
});