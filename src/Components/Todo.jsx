import React, { useState } from 'react'

function Todo() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleEvent(event) {
        setNewTask(event.target.value)
    }

    function addTasks() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((t, i) => i !== index)
        setTasks(updatedTasks)
    }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-8">ToDoList</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Task halum"
                        value={newTask}
                        onChange={handleEvent}
                        className="text-xl p-2 border-2 border-gray-300 rounded text-gray-700"
                    />
                    <button
                        onClick={addTasks}
                        className="ml-2 text-xl font-bold p-2 text-white bg-green-600 rounded hover:bg-green-500 transition-colors"
                    >
                        Add
                    </button>
                </div>
                <ol className="p-0">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className="text-2xl font-bold p-4 bg-gray-100 mb-2 border-3 border-gray-400 rounded flex items-center"
                        >
                            <span className="flex-1">{task}</span>
                            <button
                                onClick={() => deleteTask(index)}
                                className="ml-2 p-2 text-lg bg-red-600 rounded hover:bg-red-500 transition-colors"
                            >
                                🗑️
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Todo
