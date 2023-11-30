import './StylesSCSS/HangmanDrawing.scss'

const head = 
<div className='head'></div>
const upperBody = 
<div className='upperBody'></div>
const rightArm = 
<div className='rightArm'></div>

export default function HangmanDrawing(){
    return(
        <div className='wrapper'>
            {head}
            {upperBody}
            <div className='dropDown'/>
            <div className='top'/>
            <div className='middle'/>
            <div className='bottom'/>
        </div>
    )
}