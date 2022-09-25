import { StyleSheet, View, Text, Pressable, Platform } from "react-native";
import colors from "../constants/colors";

export default function PrimaryButton(props) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => (pressed && Platform.OS === 'ios') ? [styles.buttonInnerContainer, styles.iospressed] : styles.buttonInnerContainer}
                onPress={props.onPress}
                android_ripple={{ color: colors.primary600 }}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    iospressed: {
        opacity: 0.75
    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
    },
    buttonInnerContainer: {
        backgroundColor: colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        borderRadius: 28,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});