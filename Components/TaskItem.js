import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskItem(props) {
  return (
    <View style={styles.taskItemContainer}>
        <View style={styles.leftItem}>
            <View style={styles.square}></View>
            <Text style={styles.taskContent}>{props.text}</Text>
        </View>
        <View style={styles.rightItem}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    taskItemContainer: {
        padding: 20,
        backgroundColor: '#FFF',
        marginBottom: 20,
        borderRadius:5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    taskContent: {
        fontSize: 14,
        maxWidth: '80%',
    },
    square: {
        height: 24,
        width: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 14,
    },
    leftItem: {
        flexDirection: 'row',
        alignItems: 'center',   
        flexWrap: 'wrap'
    },
    rightItem: {
        height: 12,
        width: 12,
        borderRadius: 5,
        borderColor: '#55BCF6',
        borderWidth: 2,
    }
});