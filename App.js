import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import TaskItem from './Components/TaskItem';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleSubmit = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let tasksCopy = [...taskItems];
    tasksCopy.splice(index, 1);
    setTaskItems(tasksCopy);
  }

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <Text style={styles.title} >Today's tasks</Text>
        <View style={styles.taskContainer}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={index => completeTask(index)}>
                  <TaskItem text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height "}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} onChangeText={text => setTask(text)} value={task}/>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.addWrapper}>
            <Text style={styles.addIcon}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  title: {
    paddingTop: 80,
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: '700',
  },
  taskContainer: {
    marginTop: 20,
    padding: 20
  },
  writeTaskWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 60,
    width: '100%'
  }
  ,input: {
    backgroundColor: '#FFF',
    padding: 15,
    width: 250,
    borderRadius: 60,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
  }
  ,addWrapper: {
    backgroundColor: '#FFF',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  }
  ,addIcon: {
    fontSize: 24,
    color: '#C0C0C0',
  }
});
