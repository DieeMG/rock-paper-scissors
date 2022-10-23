import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const Board = () => {

    const [result, setResult] = useState('Haz click para jugar');
    const [contadorUser, setContadorUser] = useState(0);
    const [contadorMachine, setContadorMachine] = useState(0);
    const [contadorTie, setContadorTie] = useState(0);
    const [contadorGames, setContadorGames] = useState(0);

    const [resultUser, setResultUser] = useState(' - ');
    const [resultMachine, setResultMachine] = useState(' - ');

    const options = ["piedra", "papel", "tijera"];

    const random = () => {
      return Math.floor(Math.random() * 3);
    };

    
    const play = (userSelection) => { 

        const iaSelection = options[random()];

        if( userSelection === 'piedra' ) {
            
            setResultUser('✊')

            switch (iaSelection) {
                case 'piedra':
                    setResultMachine('✊')
                    setResult('Empate');
                    setContadorTie(contadorTie + 1);
                    break;
                case 'papel':              
                    setResultMachine('✋')
                    setResult('Perdiste');
                    setContadorMachine(contadorMachine + 1);
                    break;
                case 'tijera':
                    setResultMachine('✌️')
                    setResult('Ganaste');
                    setContadorUser(contadorUser + 1);
                    break;
                default:
                    break;
            }           

        } else if( userSelection === 'papel' ) {
            
            setResultUser('✋')

            switch (iaSelection) {
                case 'piedra':
                    setResultMachine('✊')
                    setResult('Ganaste');
                    setContadorUser(contadorUser + 1);
                    break;
                case 'papel':
                    setResultMachine('✋')
                    setResult('Empate');
                    setContadorTie(contadorTie + 1);
                    break;
                case 'tijera':
                    setResultMachine('✌️')
                    setResult('Perdiste');
                    setContadorMachine(contadorMachine + 1);
                    break;
                default:
                    break;
            }           

        } else if( userSelection === 'tijera' ) {
            
            setResultUser('✌️')

            switch (iaSelection) {
                case 'piedra':
                    setResultMachine('✊')
                    setResult('Perdiste');
                    setContadorMachine(contadorMachine + 1);
                    break;
                case 'papel':
                    setResultMachine('✋')
                    setResult('Ganaste');
                    setContadorUser(contadorUser + 1);
                    break;
                case 'tijera':
                    setResultMachine('✌️')
                    setResult('Empate');
                    setContadorTie(contadorTie + 1);
                    break;
                default:
                    break;
            }

        }
    };

    useEffect(() => {
        setContadorGames( contadorUser + contadorTie + contadorMachine );
    }, [play]);

    const cleanBoard = () => {
        setResult('Haz click para jugar');
        setResultUser(' - ');
        setResultMachine(' - ');
    };

    const finishGame = () => {
        setContadorUser(0);
        setContadorMachine(0);
        setContadorTie(0);
        setContadorGames(0);
        cleanBoard();
    };

    return(
        <main className="layout">
        <section className="bg-main">
            <h1>Piedra, papel o tijera</h1>

            <span className="spacer-1"></span>

            <div className="scoreboard">
                <span className="scoreboard__title">Puntuación:</span>
                <span className="scoreboard__text">Usuario: <span className="scoreboard__text-fwRegular">{contadorUser}</span></span>
                <span className="scoreboard__text">Maquina: <span className="scoreboard__text-fwRegular">{contadorMachine}</span></span>
                <span className="scoreboard__text">Empates: <span className="scoreboard__text-fwRegular">{contadorTie}</span></span>
                <span className="scoreboard__text scoreboard__text-total">Partidas: <span className="scoreboard__text-fwRegular">{contadorGames}</span></span>
            </div>

            <h3>Tablero</h3>
        
            <div className="board">
                <div>
                    <span className="board__title" >Maquina </span> 
                    <span className="board__chose" >{resultMachine}</span>
                </div>
                <span className="board__title" >vs</span>
                <div>
                    <span className="board__title" >Usuario </span> 
                    <span className="board__chose" >{resultUser}</span>
                </div>
            </div>
            
            <span className="spacer-1"></span>

            <span>Resultado: <span className={result}>{result}</span></span>

            <span className="spacer-1"></span>

            <div className="btn-game-layout">
                <button onClick={() => {play('piedra')}} className="btn-game" title="Piedra"> ✊ </button>
                <button onClick={() => {play('papel')}} className="btn-game" title="Papel"> ✋ </button>
                <button onClick={() => {play('tijera')}} className="btn-game" title="Tijera"> ✌️ </button>
            </div>
            
            <span className="spacer-3"></span>

            <div className="btn-layout">
                <button className="btn" onClick={cleanBoard}>Limpiar Tablero</button>
                <button className="btn" onClick={finishGame}>Reiniciar Juego</button>
            </div>
            <span className="spacer-2"></span>

        </section>
        </main>

    )

};

export default Board;