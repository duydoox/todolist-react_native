import React from 'react'
import { StyleSheet, View } from 'react-native'
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import TaskProvider from './context/TaskContext';

export default function App() {
    return (
        <TaskProvider>
            <View style={styles.container}>
                <ListTask />
                <AddTask />
            </View>
        </TaskProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED'
    },
    tasksWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    },
    items: {
        marginTop: 30
    },
})  