import { useState } from 'react'
import './StylesSCSS/Main.scss'
import words from './Data/ListOfWords.json'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'



export default function Main(){

    const [wordToGuess, setWordToGuess] = useState(
        ()=>{
            return(
                words[Math.floor(Math.random() * words.length)]
            )
        }
    ) 
    
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    console.log(wordToGuess);

    return(
        <div className="mainWrapper">
            <div>Lose Win</div>
            <HangmanDrawing />
            <div>Grafic</div>
            <HangmanWord />
            <div>word</div>
            <Keyboard />
            <div>keyboard</div>
        </div>
    )
}