import loadUser from '../app';

test('Ok', () => {
  const received = loadUser(2);
  const expected = 2;
  expect(received).toEqual(expected);
});
