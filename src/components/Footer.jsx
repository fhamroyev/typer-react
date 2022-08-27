import react, { useEffect, useState } from 'react'
import Modal from './Modal'

export default function Footer({ value, setValue, word, setWord, words, setConfigDis }) {
    const [score, setScore] = useState(0)
    let [time, setTime] = useState(30)
    useEffect(() => {
        if (word === value) {
            setWord(words[Math.floor(Math.random() * words.length)])
            setValue('')
            setScore(score + 1)
        }
    }, [value])


    useEffect(() => {
        const state = setInterval(() => {
            inTime()
        }, 1000)

        function inTime() {
            setTime(--time)
            if (time === 0) {
                clearInterval(state)
                setConfigDis(true)
            }
        }
    }, [])

    return (
        <div>
            {
                time === 0 ? (<Modal score={score} />) : null
            }
            <h1>Time: {time}</h1>
            <button onClick={() => window.location.reload()}>Restart</button>
        </div>
    )
}