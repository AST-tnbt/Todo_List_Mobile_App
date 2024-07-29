import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

export default function AddTaskBox({setVisible}) {
  return (
    <View style={styles.addTaskContainer}>
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height "}>
            <TextInput placeHolder="Enter your task" style={styles.textInput}/>
        </KeyboardAvoidingView>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.addBtn}>
                <Text>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelBtn} onPress={() => setVisible(false)}>
                <Text>Cancel</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    addTaskContainer : {
        padding: 20,
        margin: "auto",
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },  
    btnContainer : {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    },
    addBtn : {
        paddingVertical: 16,
        paddingHorizontal: 26,
        borderRadius: 10,
        backgroundColor: "#55BCF6"
    },
    cancelBtn: {
        paddingVertical: 16,
        paddingHorizontal: 26,
        borderRadius: 10,
        marginLeft: 20,
        backgroundColor: "#eac42e"
    },
    textInput : {
        padding: 12,
        fontSize: 20,
        color: "#333",
        borderWidth: 2,
        borderColor: "#f0f0f0",
        borderRadius: 5,
    }
});
