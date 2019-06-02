import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Signup extends React.Component {


  navigation=()=>{
    this.props.navigation.navigate("Login")
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.MainView}>
        
          <View  style={styles.usernamepassword}>
            <Text style={styles.Text}>User Name</Text>
            <TextInput 
              style={styles.InputFields}
              placeholder={'Enter User Name'}
            />
          </View>
          <View  style={styles.usernamepassword}>
            <Text style={styles.Text}>Email</Text>
            <TextInput 
              style={styles.InputFields}
              placeholder={'Enter User Name'}
            />
          </View>

          <View style={styles.usernamepassword}>
            <Text style={styles.Text}>PassWord</Text>
            <TextInput 
              style={styles.InputFields}
              placeholder={'Enter PassWord'}
              secureTextEntry={true}
            />
          </View>


          <View style={styles.usernamepassword}>
            <Button 
            onPress={this.navigation}
            title="Signup"
            />
          </View>
       </View>
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
  MainView: {
    backgroundColor: '#3BADC7',
    borderRadius: 10,
    width:'100%',
    borderColor:'black',
    height:'50%',
    marginTop:10,
    marginLeft:5,
    marginRight:5,
    justifyContent: 'center',
  },
  usernamepassword: {
    width:'80%',
    marginLeft:50,
    fontSize: 15,
  },
  Text: {
    borderColor:'black',
    borderRadius: 10,
    justifyContent: 'center',
    minHeight: 50,
    maxHeight: 100,
    height:'20%',
    fontSize: 15,
  },
  InputFields: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor:'black',
    justifyContent: 'center',
    minHeight: 50,
    maxHeight: 100,
    height:'20%',
    fontSize: 15,
  },
});

