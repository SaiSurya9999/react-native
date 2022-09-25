import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState('');
  const [screen, setScreen] = useState(<StartGameScreen onPickNumber={pickedNumberHandler} />);
  

  function pickedNumberHandler(num) {
    console.log(`CHOSEN: ${num}`)
    setScreen(<GameScreen gameStatus={gameOver} chosen={num} />)
  }

  function gameOver(state) {
    console.log(`GAME OVER: ${state}`, state)
    if(state) {
      setScreen(<GameOverScreen gameStatus={gameOver}></GameOverScreen>);
    } else {
      setScreen(<StartGameScreen onPickNumber={pickedNumberHandler} />)
    }
  }


  return (
    <>
      <StatusBar style='light'></StatusBar>
      <LinearGradient colors={[colors.primary700, colors.accent500]} style={styles.rootContainer}>
        <ImageBackground
          style={styles.ImageBackground}
          imageStyle={{ opacity: 0.15 }}
          resizeMode='cover'
          source={require('./assets/background.png')}>
          <SafeAreaView style={styles.rootContainer}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  ImageBackground: {
    flex: 1
  }
});
