/* global test, expect */
import * as utils from './string_utils';

test('search', () => {
    expect(utils.search('DOGI the Dog coin', 'DOG')).toBe(true);
    expect(utils.search('DOGI the Dog coin', 'xxx')).toBe(false);
});
