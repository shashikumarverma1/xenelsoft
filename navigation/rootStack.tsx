import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/homeScreen';
import { JobPost } from '../screen/jobPost';
import { MapScreen } from '../screen/mapScreen';



const Stack = createStackNavigator();
export type RootStackParamList = {
  Home: undefined;

};
export const HomeStack :React.FC<RootStackParamList>=()=>{


  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
    
        <Stack.Screen name="Home" component={Home} /> 
        {/* MapScreen */}
           <Stack.Screen name="JobPost" component={JobPost} /> 
                <Stack.Screen name="MapScreen" component={MapScreen} /> 
    </Stack.Navigator>
  );
}

