import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

export default function GoalInput(props) {
    return (
        <Modal visible={props.isShowModal} animationType='slide'>
            <View style={styles.modal}>
                <Image style={styles.image} source={require('../assets/goal.png')}></Image>
                <View style={styles.inputField}>
                    <TextInput onChangeText={props.textHandler} value={props.value} style={styles.textInput} placeholder='Your goals'></TextInput>
                </View>
                <View style={styles.buttonContainer}>
                    <Button color='#5e0acc' onPress={props.addGoalHandler} title='Add Goal' />
                    <View style={{ marginLeft: 10 }}>
                        <Button color='#f31282' onPress={props.modalHandler.bind(this, false)} title='Cancel' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    inputField: {
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '80%',
        // borderBottomWidth: 1,
        // borderBottomColor: '#cccccc',
        padding: 20
    },
    textInput: {
        width: '100%',
        marginRight: 5,
        borderWidth: 2,
        borderColor: '#cccccc',
        padding: 16,
        borderRadius: 6,
        backgroundColor: '#fff'
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});