import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Task from './Task'
import { taskContext } from '../context/TaskContext';

export default function ListTask() {
    const { taskItems } = useContext(taskContext)
    return (
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Today's task</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.items}>
                    {taskItems.map((item, index) => {
                        return <Task item={item} key={index} index={index} />
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    tasksWrapper: {
        flex: 6,
        paddingTop: 40,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    },
    items: {
        marginTop: 20
    },
})  