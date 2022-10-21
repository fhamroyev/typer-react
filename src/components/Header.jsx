import React, { useState } from "react";
import Section from "./Section";

export default function Header() {
    const words = [
        // 'work',
        // 'part',
        // 'late',
        // 'want',
        // 'life',
        // 'here',
        // 'your',
        // 'move',
        // 'feel',
        // 'stand',
        // 'however',
        // 'problem',
        // 'person',
        // 'say',
        // 'without',
        // 'few',
        // 'great',
        // 'before',
        // 'people',
        // 'social',
        // 'network',
        // 'some',
        // 'those',
        // 'make',
        // 'only'
        'Mark',
        'Elon',
        'Stiv',
        "Jek Ma",
        'Bezos',
        'pavel',
        'facebook',
        'google',
        'telegram',
        'tesla',
        'amazon',
        'alibaba',
        'Ronaldo',
        'instagram',
        'messi',
        'rock',
        'tiktok'
    ]

    const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)])
    return (
        <div style={{ "display": 'flex', 'justifyContent': 'center', 'height': '90vh', 'alignItems': 'center' }}>
            <div className="content">
                <h1>{word}</h1>
                <Section word={word} setWord={setWord} words={words} />
            </div>
        </div>
    )
}