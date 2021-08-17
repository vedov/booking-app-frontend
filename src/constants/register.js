const UserRegisterForm = {
  title: "Register",
  subtitle: "Explore the world or show the world.",
  buttonContent: "Register",
  content: ["Already Have an Account?", "Log In", "/login"],
  inputFields: [
    {
      label: "First Name",
      type: "text",
      name: "first_name",
      placeholder: "Enter your First Name",
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "last_name",
      placeholder: "Enter your Last Name",
      required: true,
    },
    {
      label: "E-Mail",
      type: "email",
      name: "email",
      placeholder: "Enter your E-Mail",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "",
      required: true,
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "password2",
      placeholder: "",
      required: true,
    },
  ],
};
export default UserRegisterForm;
