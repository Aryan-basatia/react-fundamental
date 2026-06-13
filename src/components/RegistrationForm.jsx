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

    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (form.name.trim() === "") {
      newErrors.name = "Name is Required";
    }
    if (form.email.trim() === "") {
      newErrors.email = "email is Required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "@ is Required";
    }
    if (form.password.trim() === "") {
      newErrors.password = "password is Required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password should greater then 6 character";
    }
    if (form.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "confirmPassword is Required";
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Password is not equal to confirmPassword";
    }

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");

    if (hasErrors) setError(newErrors);
    if (!hasErrors) {
      setSuccess(true);
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
      setError({});
    }
  }

  return (
    <>
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
        {success && <p style={{ color: "green" }}>Registration successful!</p>}
      </form>
    </>
  );
}
