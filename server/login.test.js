const {
  login,
  ForgetPassword,
  verifyOTP
} = require('./controllers/login');

test('send email and password to be verified', () => {
    expect(login(
      {
        email: "izaansohail1999@gmail.com",
        password: "password"
      }
      )).toBe(3);
  });