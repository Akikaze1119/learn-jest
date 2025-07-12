jest.mock('../src/user', () => ({
  getUserName: jest.fn(),
}));

const { getUserName } = require('../src/user');
const { greetUser } = require('../src/mockFunction');

test('greetUser uses mocked getUserName', () => {
  getUserName.mockReturnValue('MockedUser');

  const message = greetUser();

  expect(getUserName).toHaveBeenCalled();
  expect(message).toBe('Hello, MockedUser!');
});
