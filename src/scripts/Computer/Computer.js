const Computer = (enemyGameboard) => {
    const _isPositionHit = (x, y) => {
        for (const ship of enemyGameboard.ships) {
            for (const pos in ship.getPositions()) {
                if (pos.toString() === [x, y].toString() && ship.hits[i]) {
                    return true;
                }
            }
        }
    }

    const _isPositionMiss = (x, y) => {
        const misses = JSON.stringify(enemyGameboard.misses);
        const position = JSON.stringify([x, y]);
        return misses.indexOf(position) !== -1;
    }

    const _getRandomAttackChoices = () => {
        let randomAttackChoices = [];
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {      
                if (!_isPositionHit(x, y) && !_isPositionMiss(x, y)) {
                    randomAttackChoices.push([x, y]);
                }
            }
        }
        return randomAttackChoices;
    }
    
    const makeRandomAttack = () => {
        const choices = _getRandomAttackChoices();
        const choiceIndex = Math.floor(Math.random() * choices.length);
        const choice = choices[choiceIndex];
        enemyGameboard.receiveAttack(choice[0], choice[1]);
    }

    return { makeRandomAttack }
}


export { Computer }