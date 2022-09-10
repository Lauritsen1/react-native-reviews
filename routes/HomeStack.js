import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#f4511e' },

            }} >
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => {
                    return {
                        header: () => <Header navigation={navigation} title='GameZone' />,
                    }
                }} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
    )
}
