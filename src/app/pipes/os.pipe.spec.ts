import { OsPipe } from './os.pipe';

describe('OsPipe', () => {
  it('create an instance', () => {
    const pipe = new OsPipe();
    expect(pipe).toBeTruthy();
  });
});
