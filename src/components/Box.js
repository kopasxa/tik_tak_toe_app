import React from "react";
import "../styles/box.css";

const Box = (props) => {
    let newMove = props.currMove;

    const changeState = (e) => {
        if (props.table[props.cell[0]][props.cell[1]] === "") {
            props.changeMove(props.currMove === 0 ? 1 : 0);
            newMove === 0 ? props.table[props.cell[0]][props.cell[1]] = props.players.first : props.table[props.cell[0]][props.cell[1]] = props.players.second;
            props.checkWinner();
        }
    }

    return (
        <div className="box" onClick={props.currWinner === 'pending' ? changeState : undefined}>
            {props.table[props.cell[0]][props.cell[1]]}
        </div>
    );
};

export default Box;
