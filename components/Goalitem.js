import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
    return (
        <View style={styles.goalHolder}>
            <Pressable android_ripple={{ color: '#210644' }} onPress={props.onDelete.bind(this, props.ele.item.id)}
            style={({pressed}) => pressed && styles.iosPressedItem }>
                <Text style={styles.goalItem} >{props.ele.index + 1}. {props.ele.item.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalHolder: {
        margin: 8,
        borderRadius: 6,
        color: '#fff',
        backgroundColor: '#5e0acc'
    },
    goalItem: {
        padding: 8,
        color: '#fff'
    },
    iosPressedItem: {
        opacity: 0.5
    }
});