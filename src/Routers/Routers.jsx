import{createNativeStackNavigator} from '@react-navigation/native-stack'


import Initial from '../pages/InitialScreen/InitialScreen.jsx'
import ForgotPasswordScreen from '../pages/ForgotPasswordScreen/ForgotPasswordScreen.jsx';
import Login from '../pages/LoginScreen/LoginScreen.jsx'
import Signup from '../pages/SignupScreen/SignupScreen.jsx'



const Stack = createNativeStackNavigator();


export default function Routers(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='Initial'
            component={Initial}
            options={{headerShown: false}}
            />


            <Stack.Screen 
            name='Login'
            component={Login}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name='Signup'
            component={Signup}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}