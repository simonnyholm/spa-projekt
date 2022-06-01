import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ContactForm = () => {
  const styles = {
    form: css`
      
      max-width: 500px;
      margin: 0 auto;
      text-align: center;

      & label {
        text-align: left;
        display: block;
      }

      & input {
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 1px solid #ddd;
        box-sizing: border-box;
        display: block;
      }

      & textarea {
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 1px solid #ddd;
        box-sizing: border-box;
        display: block;
      }

      & select {
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 1px solid #ddd;
        box-sizing: border-box;
        display: block;
      }

      & button{
        margin: 20px 0 20px 0;
      padding: 0 30px 0 30px;
      width: 500px;
      height: 170px;
      font-size: 20px;
      font-weight: 500;
      border: none;
      background-color: #7592d5;
      color: #020611;
      cursor: pointer;

      :hover {
        background-color: #586c9c;
      }
    }
    `
    }
  

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [pronoun, setPronoun] = useState("den");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form css={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>
            Dit fulde navn:
            <input
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Din e-mail-adresse:
            <input
              type="email"
              name=""
              id=""
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Pronomen:
            <select
              required
              value={pronoun}
              onChange={(event) => setPronoun(event.target.value)}
            >
              <option value="han">han</option>
              <option value="hun">hun</option>
              <option value="hen">hen</option>
              <option value="den">den</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Organisation:
            <input
              type="text"
              required
              value={org}
              onChange={(event) => setOrg(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Din besked til kontaktadministrationen:
            <textarea
              placeholder="Skriv din besked her..."
              name=""
              id=""
              cols="50"
              rows="10"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </label>
        </div>
        <div>
          <button type="submit">
            Send kontaktanmodning til kontaktadministrationen
          </button>
        </div>
      </form>
      <p>{message}</p>
    </>
  );
};

export default ContactForm;
