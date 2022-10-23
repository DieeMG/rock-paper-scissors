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
        <section className="bg-main">
            <h1>Piedra, papel o tijera</h1>

            <span className="spacer-1"></span>

            <div className="puntuacion">
                <span className="puntuacion__titulo">Puntuación:</span>
                <span className="puntuacion__texto">Usuario: <span className="puntuacion__texto-fwRegular">{contadorUser}</span></span>
                <span className="puntuacion__texto">Maquina: <span className="puntuacion__texto-fwRegular">{contadorMachine}</span></span>
                <span className="puntuacion__texto">Empates: <span className="puntuacion__texto-fwRegular">{contadorTie}</span></span>
                <span className="puntuacion__texto puntuacion__texto-total">Partidas: <span className="puntuacion__texto-fwRegular">{contadorGames}</span></span>
                
            </div>

            <h3>Tablero</h3>
        
            <div className="tablero">
                <div>
                    <span className="tablero__titulo" >Maquina </span> 
                    <span className="tablero__eleccion" >{resultMachine}</span>
                </div>
                <span className="tablero__titulo" >vs</span>
                <div>
                    <span className="tablero__titulo" >Usuario </span> 
                    <span className="tablero__eleccion" >{resultUser}</span>
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
            <span className="spacer-1"></span>

        </section>
    )

};

export default Board;