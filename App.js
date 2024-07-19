import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import TaskItem from './Components/TaskItem';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [activeBtn, setActiveBtn] = useState("Pending");

  const listBtn = ["Pending", "Completed", "Overdue"];

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
        <Text style={styles.title} >Your task list</Text>
        <View style={styles.filterBtnContainer}>
          {
            listBtn.map((btn, index) => {
              return (
                <View style={activeBtn == btn ? styles.activeBtn : styles.filterBtn} key={index}>
                  <TouchableOpacity onPress={() => setActiveBtn(btn)}>
                    <Text>{btn}</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          }
        </View>
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
    backgroundColor: "#E8EAED",
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
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    width: "100%"
  }
  ,input: {
    backgroundColor: "#FFF",
    padding: 15,
    width: 250,
    borderRadius: 60,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  }
  ,addWrapper: {
    backgroundColor: "#0099DD",
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
  }
  ,addIcon: {
    fontSize: 36,
    color: "#FFF",
  },
  filterBtnContainer: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  filterBtn: {
    padding: 6,
    backgroundColor: "#FFF",
    marginRight: 16,
    borderRadius: 10,
  },
  activeBtn: {
    padding: 6,
    backgroundColor: "#FFF",
    marginRight: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0099DD",
  }
});
