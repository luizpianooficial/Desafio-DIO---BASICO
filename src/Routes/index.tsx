import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Inicio from '../screens/Inicio'
import Forms from '../screens/Forms'

export default function Routes(){
    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator>

            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Forms"
                component={Forms}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}