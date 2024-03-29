import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        let email = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
        if (userName === 'eve.holt@reqres.in' && password === 'Ashwini10' && email.test(userName)) {
            navigation.navigate('Home')
            postLoginAPI()
        } else {
            Alert.alert("Invalid username or password")
        }
        // navigation.navigate('Home')
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: userName,
            password: password,
        })
    };

    const postLoginAPI = async () => {
        try {
            await fetch(
                'https://reqres.in/api/login', requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            console.log('login data---', data)
                            Alert.alert("Login Successfully. Token : ", data.token)
                        });
                })
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Username'
                value={userName}
                onChangeText={(accessData) => setUserName(accessData)}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Password'
                value={password}
                onChangeText={(accessData) => setPassword(accessData)}
            />
            <TouchableOpacity
                onPress={() => login()}
                style={styles.buttonStyle}>
                <Text
                    style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    textInput: {
        width: 300,
        height: 45,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'green',
        marginTop: 30,
        padding: 16
    },
    buttonStyle: {
        width: 300,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'green',
        marginTop: 50,
        padding: 16,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    }
})

export default Login;