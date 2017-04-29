import { PowerOfPipe } from './power-of.pipe';

describe('PowerOfPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerOfPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return 16 for 2 power 4', () => {
    const pipe = new PowerOfPipe();
    expect(pipe.transform(2,4)).toBe(16);
  });
});
