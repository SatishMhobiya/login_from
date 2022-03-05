import { useState } from "react";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState([]);

  function submit() {
    const validationErrors = [];
    if (!phone || phone.length !== 10) {
      validationErrors.push("Phone Number Invalid");
    }
    if (!password) {
      validationErrors.push("Password Invalid");
    }
    if (!gender) {
      validationErrors.push("Gender invalid");
    }
    setErrors(validationErrors);
  }

  return (
    <>
      <h1>Login Form</h1>
      {errors.length > 0 ? (
        <ul style={{ color: "red" }}>
          {errors.map((error) => {
            return <li>{error}</li>;
          })}
        </ul>
      ) : (
        <></>
      )}
      <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
        <input
          placeholder="Phone Number"
          type="number"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <select
          onChange={(event) => {
            setGender(event.target.value);
          }}
        >
          <option value="">----</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button
          onClick={() => {
            submit();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
