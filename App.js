import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation/Navigation';
import Login from './src/screens/Login'
import Home from './src/screens/Home'

export default class App extends React.Component {
  Login=()=>{
    console.log(this.props)
    this.props.navigation.navigate("Home")
  }
  componentDidMount(){
    // this.props.navigation.navigate("Login")
  }
  render() {
    return (
      <View style={styles.container}>
          {/* <Login/> */}
          <Navigator/>
          {/* <Text onPress={this.Login}>Login....</Text> */}
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
