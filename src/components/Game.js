import React, {useState} from 'react'
import Box from './Box'
import '../styles/listBox.css'

const Game = () => {
    const emptyTable = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    const [table, setTable] = useState(emptyTable);
    const [currMove, setcurrMove] = useState(0);
    const players = {
        first: "X",
        second: "O"
    };
    const [winner, setWinner] = useState('pending');

    const checkWinner = () => {
        for (let i = 0; i < table.length; i++) {
            const row = table[i];
            if (row.every((cell) => cell === players.first)) {
                setWinner(players.first);
                return true;
            } else if (row.every((cell) => cell === players.second)) {
                setWinner(players.second);
                return true;
            }
        }

        for (let i = 0; i < 3; i++) {
            const column = table.map((row) => row[i]);
            if (column.every((cell) => cell === players.first)) {
                setWinner(players.first);
                return true;
            } else if (column.every((cell) => cell === players.second)) {
                setWinner(players.second);
                return true;
            }
          }
        

        const diagonal1 = [table[0][0], table[1][1], table[2][2]];
        const diagonal2 = [table[0][2], table[1][1], table[2][0]];
        if (diagonal1.every((cell) => cell === players.first)) {
            setWinner(players.first);
            return true;
        } else if (diagonal1.every((cell) => cell === players.second)) {
            setWinner(players.second);
            return true;
        } else if (diagonal2.every((cell) => cell === players.first)) {
            setWinner(players.first);
            return true;
        } else if (diagonal2.every((cell) => cell === players.second)) {
            setWinner(players.second);
            return true;
        } else if (table.flat().every((cell) => cell !== "")) {
            setWinner('draw');
            return true;
        } else {
            return false;
        }
    }

    let boxes = [];
    let key = 0;

    if (winner !== 'pending') {
        winner === 'draw' ? alert('Friendship won!') : alert(`Winner is ${winner} ! \nCongrats!!`);
        setWinner('pending');
        setTable(emptyTable);
        
    }

    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[0].length; j++) {
            boxes.push(<Box key={key} cell={[i, j]} table={table} editTable={setTable} currMove={currMove} changeMove={setcurrMove} players={players} checkWinner={checkWinner} currWinner={winner}/>);
            key++;
        }
    }

    return (
    <div className='listBox'>
        <div className='winner'><span className='bold'>Winner:</span> {winner}</div>
        <div className='listWrapper'>
            {boxes}
        </div>
    </div>
  )
}

export default Game