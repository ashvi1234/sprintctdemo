import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddEmployee = ({ navigation, route }) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [addressLine, setAddressLine] = useState('');
    const [city, setCity] = useState('');

    const AddBtn = () => {
        if (name != '' && age != '' && addressLine != '' && city != '') {
            navigation.navigate({
                name: 'Home',
                params: {
                    name: name,
                    age: age,
                    addressLine: addressLine,
                    city: city
                },
                merge: true,
            });
        } else {
            Alert.alert("Please enter details")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Name'
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Age'
                value={age}
                onChangeText={setAge}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Address Line'
                value={addressLine}
                onChangeText={setAddressLine}
            />
            <TextInput
                style={styles.textInput}
                placeholder='City'
                value={city}
                onChangeText={setCity}
            />
            <TouchableOpacity
                onPress={() => AddBtn()}
                style={styles.buttonStyle}>
                <Text
                    style={styles.buttonText}>
                    Add
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

export default AddEmployee;