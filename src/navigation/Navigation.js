import { 
       createStackNavigator, 
       createAppContainer } from "react-navigation";
import Login from '../screens/Login' 
import Signup  from '../screens/Signup' 
// import Drawer from '../../src/navigation/Drawer'

// import { Avatar } from 'react-native-elements';

const StackNavigator = createStackNavigator({
    
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        }
},
    {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   })

const Navigator = createAppContainer(StackNavigator)

export default Navigator
