import { useState } from "react";
export default 

function Tarea({ item, onUpdate,  onDelete}) {
    const [isEdit,setIsEdit] = useState(false);

    function FormEdit(){

        const[newValue, setNewValue] = useState(item.title);
        function handleSubmit(e){
            e.preventDefault();
        }
        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }
        function handleClickUpdateTarea(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }
        
        return ( 
        <form className="tareaUpdateForm"  onSubmit={handleSubmit}>
            <input type="text" className="tareaInput" onChange={handleChange} value={newValue}/>
            <button className="button" onClick={handleClickUpdateTarea}>
             Update
            </button>
        </form>
        );
    }

    function TareaElement(){
        return( 
        <div className="tareaInfo">
            <span className="tareaTitle">{item.title}</span>
            <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
           <button  className="buttonDelete" onClick={(e) => onDelete (item.id)}>Delete</button>
        </div>
        );
    }
   return <div className="tarea">{isEdit ? <FormEdit /> : <TareaElement/>}</div>;
}