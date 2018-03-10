const { handler } = require('./handler');
jest.mock('all-the-clouds-aws-serverless-js',
() => ({
  generate: jest.fn().mockImplementation(() => 'mocked-name'),
}));
describe('handler', () => {
  test('the handler function should work', () => {
    handler({}, {}, (err, response) => {
      expect(err).toBeNull();
      expect(response).toBeDefined();
    });
  });
test('the response should be successful', () => {
    handler({}, {}, (err, response) => {
      expect(response.statusCode).toEqual(200);
    });
  });
test('the response should contain a `name` key', () => {       
    handler({}, {}, (err, response) => {
      expect(response).toMatchSnapshot();
    });
  });
});