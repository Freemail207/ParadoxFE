import * as React from "react";
import { useStyles } from './Game.styles';

const Game = () => {
    const classes = useStyles();
    return (
        <div className={classes.gameRoot}>
            <canvas id={'game'}/>
        </div>
    );
}
export default Game;
