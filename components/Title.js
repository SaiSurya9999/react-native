import { StyleSheet, Text } from "react-native";

export default function Title(props) {
    return (
        <Text style={styles.title}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        padding: 12,
        borderWidth: 2,
        borderColor: '#ddb52f'
    }
});