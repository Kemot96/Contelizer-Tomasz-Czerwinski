import { validatePesel } from '../utils/pesel';
import { expect, test } from 'vitest';
import { VALID_PESELS, INVALID_PESELS } from './pesel.test-data';

test('correct PESEL numbers should be valid', () => {
  VALID_PESELS.forEach((pesel) => {
    expect(validatePesel(pesel)).toBe(true);
  });
});

test('incorrect PESEL numbers should be not valid', () => {
  INVALID_PESELS.forEach((pesel) => {
    expect(validatePesel(pesel)).toBe(false);
  });
});
