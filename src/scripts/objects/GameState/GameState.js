/**
 * Module holding modules that control the running state of the game.
 * 
 * @module GameState
 */
const GameState = (() => {
    let running = false;

    /**
     * Returns the value of GameState's `running` variable.
     * 
     * @memberof module:GameState
     */
    const isRunning = () => {
        return running;
    }

    /**
     * Sets `running` to `true`.
     * 
     * @memberof module:GameState
     */
    const start = () => {
        running = true;
    }

    /**
     * Sets `running` to `false`.
     * 
     * @memberof module:GameState
     */
    const stop = () => {
        running = false;
    }

    return { 
        isRunning,
        start,
        stop,   
    }
})();


export { GameState }