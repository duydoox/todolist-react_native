import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import { taskContext } from '../context/TaskContext'

export default function Task({ item, index }) {
  const { completedTask, handleDeleteTask } = useContext(taskContext)

  const deleteTask = () => {
    Alert.alert(
      'Warning', 'Do you really want to delete it?',
      [
        {
          text: 'Cancel',
          onPress: () => {}
        },
        {
          text: 'OK',
          onPress: () => handleDeleteTask(index)
      }
      ]
    )
  }
  return (
    <TouchableOpacity onPress={() => completedTask(index)}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}>
            <Text>{index + 1}</Text>
          </View>
          <Text style={{
            fontSize: 18,
            fontWeight: "400",
            textDecorationLine: item.completed ? "line-through" : "none"
          }}>{item.text}</Text>
        </View>
        <TouchableOpacity style={styles.circular} onPress={deleteTask}>
          <Text style={styles.deleteText}>-</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    maxWidth: '80%'
  },
  circular: {
    height: 20,
    width: 20,
    borderColor: '#55BCF6',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteText:{
    fontSize: 20,
    position: 'absolute',
    top: '-30%'
  }
})