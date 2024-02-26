import React, { useState, useRef, useEffect } from "react";

//create your first component
const ToDo = () => {

    const [task, setTask] = useState('');
    const [taskArray, setTaskArray] = useState([]);
    const [status, setStatus] = useState("No tasks, add a task");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [taskArray]);

    const handleSubmit = () => {
        if (task === '') {
            alert("Please enter a task")
        }
        else {
            setTaskArray(prevTaskArray => [...prevTaskArray, task]);
            setTask('');
            statusUpdate();
        }

        console.log("status updated");
    }

    const deleteTask = (index) => {
        const newTaskArray = taskArray.filter((_, currentIndex) => index !== currentIndex);
        setTaskArray(newTaskArray);
        statusUpdate(newTaskArray.length);
        console.log("status updated");
    }

    const statusUpdate = (arrayLength) => {
        if (arrayLength === 0) {
            setStatus("No tasks, add a task");
        } else {
            setStatus("");
        }
    }

    return (
        <div className="toDo">
            <input type="text" value={task} onKeyDown={(e) => { if (e.key === "Enter") { handleSubmit(); } }} onChange={(e) => setTask(e.target.value)} ref={inputRef} />
            <button className="btn btn-secondary btn-lg" onClick={handleSubmit}>Add</button>
            <h5> {status}</h5>

            <ul className="taskList">
                {taskArray.map((task, index) => (
                    <li className="taskList2" key={index}>
                        <div className="container">
                            <div className="task row">
                                <div className="col-10"><h2>{task}</h2></div>
                                <span className="col-2" id="x" onClick={() => deleteTask(index)}>x</span>
                            </div>
                        </div>


                    </li>
                ))}
            </ul>
            <div>{taskArray.length} item(s) left</div>
        </div>

    );
};

export default ToDo;
