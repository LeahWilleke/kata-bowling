import { score } from '../src/main';

describe('bowling', () => {
  test('A gutter game should score 0.', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
  });
  test('This should score 5.', () => {
    expect(score([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0])).toBe(5);
  });
});

