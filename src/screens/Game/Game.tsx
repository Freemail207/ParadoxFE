import * as React from "react";
import { useStyles } from './Game.styles';
import '@game/World/Meadow/Meadow';

const Game = () => {
    const classes = useStyles();
    return (
            <canvas id={'game'}/>
    );
}
export default Game;
