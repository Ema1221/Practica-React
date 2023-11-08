import { useState } from "react";
import Tarea from "./tareas";

import "./tareaApp.css";

export default function TareasApp(){
    const [title,setTitle]= useState("hola");
    const [tareas,setTareas]= useState([]);


    function handleChange(event){
       const value= event.target.value;

       setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTarea = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
        };
        const temp = [...tareas];
        temp.unshift(newTarea);
        setTareas(temp);

        setTitle("");


    }

    function handleUpdate(id, value){
        const temp = [... tareas];
        const item = temp.find ((item) => item.id === id);
        item.title = value;
        setTareas(temp);
    }

    function handleDelete(id){
        const temp = tareas.filter((item) => item.id != id);
        setTareas(temp);
    }

    return <div className="tareaContainer">
        <form className="tareaCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="tareaInput" value={title}/>
            <input 
            onClick={handleSubmit}
             type="submit"
             value="Create tarea"
             className="buttonCreate"/>

        </form>

        <div className="tareasContainer">
            {tareas.map((item) => (
                <Tarea key={item.id} item ={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))}
                
        </div>
    </div>;
}
