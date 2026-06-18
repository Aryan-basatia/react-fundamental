import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newError = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    if (form.name.trim() === "") {
      newError.name = "Name is Required";
    }
    if (form.email.trim() === "") {
      newError.email = "Email is Required";
    } else if (!form.email.includes("@")) {
      newError.email = "@ is required";
    }
    if (form.password.trim() === "") {
      newError.password = "password is required";
    } else if (form.password.length < 6) {
      newError.password = "minimum length should be 6";
    }
    if (form.confirmPassword.trim() === "") {
      newError.confirmPassword = "confirmPassword is required";
    } else if (form.confirmPassword !== form.password) {
      newError.confirmPassword = "password doesnot match";
    }
    const hasError = Object.values(newError).some((msg) => msg !== "");

    if (hasError) setError(newError);
    if (!hasError) {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setError({});
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      <input name="email" value={form.email} onChange={handleChange} />
      {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      <input name="password" value={form.password} onChange={handleChange} />
      {error.password && <p style={{ color: "red" }}>{error.password}</p>}
      <input
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      {error.confirmPassword && (
        <p style={{ color: "red" }}>{error.confirmPassword}</p>
      )}
      <button type="submit">Submit</button>
      {success && <p style={{color: "green"}}>Registration Successfull</p>}
    </form>
  );
}
