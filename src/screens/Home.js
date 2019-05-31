import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home....</Text>
        <Text>Home....</Text>
        <Text>Home....</Text>
        <Text>Home....</Text>
        <Text>Home....</Text>
        <Text>Home....</Text>\
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#194D33',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
