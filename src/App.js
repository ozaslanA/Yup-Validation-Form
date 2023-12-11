import "./App.css";
import { userSchema } from "./validations/UserValidation";
import { useState } from "react";

function App() {
  const [formErrors, setFormErrors] = useState({});
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    try {
      await userSchema.validate(formData, { abortEarly: false });
      // Hata yoksa buraya gelir
      console.log("Form doğrulandı. İşlemlere devam edebilirsiniz.");
      setFormErrors({});
    } catch (errors) {
      // Hatalar varsa buraya gelir
      console.error(errors.errors);
      const formattedErrors = {};

      errors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });

      setFormErrors(formattedErrors);
    }
  };
  return (
    <div className="App">
      <div className="header">
        <form className="form-container" onSubmit={createUser}>
          <input type="text" placeholder="Name..." />
          <p>{formErrors.name && <p className="error">{formErrors.name}</p>}</p>

          <input type="text" placeholder="email@email.com" />
          <p>
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </p>
          <input type="text" placeholder="password123" />
          <p>
            {" "}
            {formErrors.password && (
              <p className="error">{formErrors.password}</p>
            )}
          </p>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
