import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const taskContext = React.createContext()

const TaskProvider = ({ children }) => {
    const [taskItems, setTaskItems] = useState([])
    
    useEffect(()=>{
        (async function(){
            try{
                const savedTasks = await AsyncStorage.getItem('tasks')
                if(savedTasks){
                    const currentTasks = JSON.parse(savedTasks)
                    setTaskItems(currentTasks)
                }
            }catch(err){
                console.log(err)
            }
        })()
    }, [])

    const saveTasks = async (listTask) => {
        try{
            await AsyncStorage.setItem('tasks', JSON.stringify(listTask))
        }catch(err){
            console.log(err)
        }
    }

    const handleAddTask = (text) => {
        const taskItemsAddCopy = [...taskItems, { text, completed: false }]
        setTaskItems(taskItemsAddCopy)
        saveTasks(taskItemsAddCopy)
    }

    const completedTask = (index) => {
        const taskItemsCopy = [...taskItems]
        taskItemsCopy[index].completed = !taskItems[index].completed
        setTaskItems(taskItemsCopy)
        saveTasks(taskItemsCopy)
    }

    const handleDeleteTask = (index) => {
        const taskItemsCopy = [...taskItems]
        taskItemsCopy.splice(index, 1)
        setTaskItems(taskItemsCopy)
        saveTasks(taskItemsCopy)
    }

    const data = {
        taskItems, handleAddTask, completedTask, handleDeleteTask
    }
    return <taskContext.Provider value={data}>
        {children}
    </taskContext.Provider>
}

export default TaskProvider