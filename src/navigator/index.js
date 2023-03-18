import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardScreen, LoginScreen, CartScreen } from 'screens';
import { LOGIN, DASHBOARD, CART } from 'constants/routes';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

function RootNavigator() {
    const { isAuth } = useSelector((state) => state.auth);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isAuth ? DASHBOARD : LOGIN}>
                <Stack.Screen
                    name={LOGIN}
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={DASHBOARD}
                    component={DashboardScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name={CART} component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
