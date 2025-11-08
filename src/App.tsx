import { FormEvent, useState } from "react";
import "./App.css";

type Errors = Record<string, string>;

function App() {
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {};
    const form = new FormData(e.currentTarget);
    const lastName = form.get("lastName");
    const firstName = form.get("firstName");
    const position = form.get("position");
    const terms = form.get("terms");
    if (!lastName || lastName.toString().trim() === "") {
      newErrors.lastName = "A mező kitöltése kötelező!";
    }
    if (!firstName || firstName.toString().trim() === "") {
      newErrors.firstName = "A mező kitöltése kötelező!";
    }
    if (!position) {
      newErrors.position = "A mező kitöltése kötelező!";
    }
    if (!terms) {
      newErrors.terms = "A feltételek elfogadása kötelező!";
    }
    setErrors(newErrors);
    console.log(lastName);
    console.log(firstName);
    console.log(position);
    console.log(terms);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Vezetéknév</label>
        <input type="text" name="lastName" />
        <p>{errors.lastName}</p>
        <label>Keresztnév</label>
        <input type="text" name="firstName" />
        <p>{errors.firstName}</p>
        <label>Pozíció</label>
        <select name="position">
          <option value="">Válassz pozíciót</option>
          <option value="dev">Developer</option>
          <option value="des">Designer</option>
          <option value="dog">Kiskutya</option>
        </select>
        <p>{errors.position}</p>
        <label>
          <input type="checkbox" name="terms" />
          Elfogadom a regisztrációs feltételeket.
        </label>
        <p>{errors.terms}</p>
        <button type="submit">Regisztráció</button>
        <button type="button">Vissza</button>
      </form>
    </>
  );
}

export default App;
