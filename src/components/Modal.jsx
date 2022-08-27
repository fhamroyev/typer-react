import react from 'react'

export default function Modal({ score }) {

    function restart() {
        window.location.reload()
    }
    return (
        <div className='container'>
            <div className='game-over'>
                <button onClick={() => restart()}>Restart</button>
                <h1 className='game-title'>Game over</h1>
                <h1 className='game-title'>You score: {score}</h1>
            </div>
        </div>
    )
}