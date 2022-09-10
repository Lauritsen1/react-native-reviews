import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from '../screens/About';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'red'
                },
            }} >
            <Stack.Screen
                name="About"
                component={About}
                options={({ navigation }) => {
                    return {
                        header: () => <Header navigation={navigation} title='About GameZone' />,
                    }
                }} />
        </Stack.Navigator>
    )
}
