import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View , TextInput, Keyboard} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  // handles add task

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (!task) {
      console.log('ayyy theres no pizza here')
    } else {
      setTasks([...tasks, task]);
      setTask(null)
    }
  }

  // handles delete task

  const handleDeleteTask = (index) => {
    let itemsCopy = [...tasks];
    itemsCopy.splice(index, 1);
    setTasks(itemsCopy);
  }

  return (
    <View style={styles.container}>
        {/* heading */}
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Tasks</Text>
          <View style={styles.items}>
            {
              tasks.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => handleDeleteTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
            {/* tasks */}
          </View>
        </View>
        {/* write task feature */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}>
            <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed'

  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {

    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {

  },
});
