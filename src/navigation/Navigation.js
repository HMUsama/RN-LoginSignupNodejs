import { 
       createStackNavigator, 
       createAppContainer } from "react-navigation";
import Login from '../screens/Login' 
import Home  from '../screens/Home' 
// import Drawer from '../../src/navigation/Drawer'

// import { Avatar } from 'react-native-elements';

const StackNavigator = createStackNavigator({
    
        Login: {
            screen: Login
        },
        Home: {
            screen: Home
        },
        // Drawer:{
        //     screen:Drawer
        // },
},
    {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   })

const Navigator = createAppContainer(StackNavigator)

export default Navigator
