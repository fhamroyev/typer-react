import react, { useEffect, useState } from 'react'
import Footer from './Footer'

export default function Section({ word, setWord, words }) {
    const [value, setValue] = useState()
    const [configDis, setConfigDis] = useState(false)
    return (
        <div>
            <input type="text" onInput={(e) => setValue(e.target.value)} value={value} disabled={configDis} placeholder="type word"/>
            <Footer value={value} setValue={setValue} word={word} setWord={setWord} words={words} setConfigDis={setConfigDis}/>
        </div>
    )
}