import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/slice/AuthSlice';
import { AppTextInput, Layout, AppButton } from 'components';
import { DASHBOARD } from 'constants/routes';

const USERNAME = 'test';
const PASSWORD = '123';

export default function Login({ navigation }) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        setErrorMessage('');
        if (!username && !password) {
            setErrorMessage('Username and Password is required!!');
            return;
        }
        if (username === USERNAME && password === PASSWORD) {
            dispatch(signIn());
            navigation.navigate(DASHBOARD);
        }
    };

    return (
        <Layout>
            <View style={styles.container}>
                <View style={styles.loginTextWrapper}>
                    <Text style={styles.loginText}>Login</Text>
                </View>
                <AppTextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    containerStyle={styles.inputStyle}
                />
                <AppTextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    containerStyle={styles.inputStyle}
                />

                {errorMessage && (
                    <View>
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    </View>
                )}
                <AppButton label="Login" style={styles.loginBtn} onPress={handleLogin} />
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginTextWrapper: {
        marginBottom: 50
    },
    loginText: {
        fontSize: 25
    },
    inputStyle: {
        marginVertical: 10
    },
    loginBtn: {
        marginTop: 30
    },
    errorMessage: {
        color: 'red'
    }
});
