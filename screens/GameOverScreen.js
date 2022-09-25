import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

export default function GameOverScreen({ gameStatus }) {
    return (
        <View style={styles.container}>
            <Title>Game Over</Title>
            <PrimaryButton onPress={gameStatus.bind(this, false)}>Play again</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    }
});