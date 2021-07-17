const LoginConstants = {
  title: "Login",
  subtitle: "Welcome Back!",
  buttonContent: "Login",
  content: ["Don't Have an Account?", "Create One", "/register-choice"],

  inputFields: [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter your Email",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter Password",
      required: true,
    },
  ],
};
export default LoginConstants;
