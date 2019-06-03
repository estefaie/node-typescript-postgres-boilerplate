import { sum } from './index';

describe('sum', () => {
  it('should calculate the sum of two numbers correctly', () => {
    expect(sum(5, 6)).toBe(11);
  });
});
