import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
  },
});

export default Home;
