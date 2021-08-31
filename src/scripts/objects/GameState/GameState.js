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
     * 
     * @returns {undefined}
     */
    const isRunning = () => {
        return running;
    }

    /**
     * Sets `running` to `true`.
     * 
     * @memberof module:GameState
     * 
     * @returns {undefined}
     */
    const start = () => {
        running = true;
    }

    /**
     * Sets `running` to `false`.
     */
    const reset = () => {
        running = false;
    }

    return { 
        isRunning,
        start,
        reset,   
    }
})();


export { GameState }