import Validator from '../index';

describe('Validator should return: ', () => {
  test('correctly validated username', () => {
    expect(Validator.validateUsername('nero_99rus')).toEqual({ success: true });
    expect(Validator.validateUsername('dante999-999jj')).toEqual({ success: true });
    expect(Validator.validateUsername('n9n9_9n')).toEqual({ success: true });
  });

  test('correctly validated mobile number', () => {
    expect(Validator.validateMobile('8 (927) 000-00-00')).toEqual('+79270000000');
    expect(Validator.validateMobile('+7 960 000 00 00')).toEqual('+79600000000');
    expect(Validator.validateMobile('86 000 000 0000')).toEqual('+860000000000');
    expect(Validator.validateMobile('+86 000 000 0000')).toEqual('+860000000000');
  });
});

describe('Validator should throw error: ', () => {
  test('if an invalid username was entered', () => {
    expect(() => Validator.validateUsername('nero1111nero')).toThrow(Error);
    expect(() => Validator.validateUsername('_-nero999')).toThrow(Error);
    expect(() => Validator.validateUsername('nero99 nero')).toThrow(Error);
  });

  test('if an invalid number was entered', () => {
    expect(() => Validator.validateMobile('88 999 999 999 999 88')).toThrow(Error);
  });
});
