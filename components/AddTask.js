import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native'
import React, {useContext, useState} from 'react'
import { taskContext } from '../context/TaskContext'

export default function AddTask() {
    const [task, setTask] = useState()
    const {handleAddTask} = useContext(taskContext)
    const addTask = () => {
        handleAddTask(task)
        setTask(null)
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            style={styles.writeTaskWrapper}
        >
            <TextInput style={styles.input} placeholder='write a task'
                onChangeText={(text) => { setTask(text) }} value={task} />
            <TouchableOpacity onPress={() => addTask()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    writeTaskWrapper: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: 250,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addText: {}
})  