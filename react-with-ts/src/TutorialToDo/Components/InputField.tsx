import { Form } from 'react-router-dom'
import '../Styles.SCSS/InputField.scss'

export default function InputField(){
   

    return(
        <div className='wrapperInput'>
        <form className='formField'>
            <input className='inputField' type='input' placeholder='Type in a task'></input>
            <button className='submitButton'>Set</button>
        </form>
        </div>
    )
}