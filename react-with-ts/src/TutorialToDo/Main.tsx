import './Styles.SCSS/Main.scss'
import InputField from './Components/InputField'
import { useState } from 'react'

export default function ToDoApp(){
   
    const [todo, setTodo] = useState<string>();




    return(
        <div className='wrapper'>
            <span className='header'>ToDo List</span>
            <InputField />
            <InputField />
        </div>
    )
}