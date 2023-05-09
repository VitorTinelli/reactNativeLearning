import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import Login from './Componentes';
import Hooks from './Hooks';
import Menu from './menu';
// <Entypo name="login" size={24} color="black" />
// <Entypo name="home" size={30} color="black" />
// <Entypo name="calculator" size={24} color="black" />

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarActiveTintColor: '#1F7A8C', tabBarInactiveBackgroundColor: '#E8E8E8', tabBarActiveBackgroundColor: '#E0E0E0', headerShown: false}} >
          <Tab.Screen name="Menu" component={Menu} options={{ tabBarLabel: 'Home', tabBarIcon: ({color, size}) => (<Entypo name="home" size={size} color={color} />), }}/>
          <Tab.Screen name="Login" component={Login} options={{ tabBarLabel: 'Login', tabBarIcon: ({color, size}) => (<Entypo name="login" size={size} color={color} />), }}/>
          <Tab.Screen name="Hooks" component={Hooks} options={{ tabBarLabel: 'Calculadora', tabBarIcon: ({color, size}) => (<Entypo name="calculator" size={size} color={color} />),}}/>
      </Tab.Navigator>
     </NavigationContainer>
  );
}