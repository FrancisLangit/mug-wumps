import { GameState } from './Gamestate';

  
afterAll(() => {
    return GameState.reset();
});

test('Default return value of GameState.isRunning()', () => {
    expect(GameState.isRunning()).toBe(false);
});

test(`GameState.start() affects return of GameState.isRunning()`, () => {
    GameState.start();
    expect(GameState.isRunning()).toBe(true);
});

test('GameState.reset() brings module back to default values', () => {
    GameState.start();
    GameState.reset();
    expect(GameState.isRunning()).toBe(false);
});