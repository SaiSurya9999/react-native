import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/Goalinput';
import GoalItem from './components/Goalitem';

export default function App() {
  const [data, setData] = useState({
    goalText: '',
    allGoals: [],
    isShowModal: false
  });
  function addGoalHandler() {
    setData(prevState => {
      return {
        ...prevState,
        goalText: '',
        allGoals: [...prevState.allGoals, {
          id: Math.floor(100000 + Math.random() * 900000),
          text: prevState.goalText
        }],
        isShowModal: false
      }
    });
  }
  function textHandler(txt) {
    setData(prevState => {
      return {
        ...prevState,
        goalText: txt
      }
    });
  }
  function deleteHandler(id) {
    setData(prevState => {
      return {
        ...prevState,
        allGoals: prevState.allGoals.filter(a => a.id !== id)
      }
    });
  }
  function modalHandler(action) {
    setData(prevState => {
      return {
        ...prevState,
        isShowModal: action
      }
    })
  }
  return (
    <>
    <StatusBar style='light'></StatusBar>
    <View style={styles.container}>
      <Button title='Add New Goal' color='#5e0acc' onPress={modalHandler.bind(this, true)} />
      <GoalInput modalHandler={modalHandler} isShowModal={data.isShowModal} value={data.goalText} addGoalHandler={addGoalHandler} textHandler={textHandler}></GoalInput>
      <View style={styles.listingContainer}>
        <FlatList data={data.allGoals} renderItem={ele => (
          <GoalItem onDelete={deleteHandler} ele={ele}></GoalItem>
        )} keyExtractor={(item) => item.id} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1e0858'
  },
  listingContainer: {
    flex: 5,
    paddingTop: 10
  }
});
