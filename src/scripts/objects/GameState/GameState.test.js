import { GameState } from './Gamestate';

  
afterAll(() => {
    return GameState.stop();
});

test('Default return value of GameState.isRunning()', () => {
    expect(GameState.isRunning()).toBe(false);
});

test(`GameState.start() affects return of GameState.isRunning()`, () => {
    GameState.start();
    expect(GameState.isRunning()).toBe(true);
});

test('GameState.stop() brings module back to default values', () => {
    GameState.start();
    GameState.stop();
    expect(GameState.isRunning()).toBe(false);
});