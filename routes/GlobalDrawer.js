import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

export default function GlobalDrawer() {
    return (
        <Drawer.Navigator
            useLegacyImplementation={true}
            screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                name="HomeStack"
                component={HomeStack}
                options={{ title: 'Home' }}
            />
            <Drawer.Screen
                name="AboutStack"
                component={AboutStack}
                options={{ title: 'About' }}
            />
        </Drawer.Navigator>
    )
}
