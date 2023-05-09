import Login from './Componentes';
import Hooks from './Hooks';
import Menu from './menu';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Stacknav() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Hooks" component={Hooks}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}