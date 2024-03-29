import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({ navigation, route }) => {

    const [isflag, isSetFlag] = useState(false);

    const addEmployeeBtn = () => {
        navigation.navigate('AddEmployee')
    }

    useEffect(() => {
        if (route.params?.name) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.name]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => addEmployeeBtn()}
                style={styles.buttonStyle}>
                <Text
                    style={styles.buttonText}>
                    Add Employee
                </Text>
                <View style={styles.textInput}>
                    <Text style={{ fontSize: 18, fontWeight: '500', padding: 2 }}>Name: {route.params?.name}</Text>
                    <View style={styles.container2}>
                        <Text style={{ fontSize: 14, fontWeight: '500', padding: 2 }}>Age: {route.params?.age}</Text>
                        <Text style={{ fontSize: 14, fontWeight: '500', padding: 2 }}>AddressLine: {route.params?.addressLine}, City: {route.params?.city}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    container2: {
        flexDirection: 'row',
        alignContent: 'space-between',
        marginTop: 10
    },
    textInput: {
        width: 300,
        height: 120,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 50,
        padding: 12,
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

export default Home;