
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useForm } from "react-hook-form";

const ContactForm = (props) => {
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
        border: 3px solid #ddd;
        box-sizing: border-box;
        display: block;
      }

      & textarea {
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 3px solid #ddd;
        box-sizing: border-box;
        display: block;
      }

      & select {
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 3px solid #ddd;
        box-sizing: border-box;
        display: block;
      }

      & button {
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
    `,
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log("formchecj", data);


  return (
    <>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Dit fulde navn:
            {errors.fullName?.type === "required" &&
              "Du skal udfylde dit fulde navn!"}
            {errors.fullName?.type === "maxLength" &&
              "Dit navn må ikke fylde mere end 30 tegn!"}
            <input
              required

              {...register("fullName", { required: true, maxLength: 30 })}
            />
          </label>
        </div>
        <div>
          <label>
            Din e-mail-adresse:
            {errors.email?.type === "required" &&
              "Du skal udfylde dit fulde mail!"}
            {errors.email?.type === "maxLength" &&
              "Din email-adresse må ikke fylde mere end 30 tegn!"}
            {errors.email?.type === "pattern" && "Email skal indeholde '@'!"}
            <input
              type="email"
              name=""
              id=""
              required
          
              
              {...register("email", {
                required: true,
                maxLength: 30,
                pattern: /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/,
              })}
            />
          </label>
        </div>
        <div>
          <label>
            Pronomen:
            {errors.pronoun?.type === "required" && "Du skal vælge pronomen"}
            <select
              required

             
              {...register("pronoun", { required: true })}
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
            {errors.org?.type === "required" &&
              "Du skal udfylde dit fulde org!"}
            {errors.org?.type === "maxLength" &&
              "Dit org må ikke fylde mere end 30 tegn!"}
            <input
              type="text"
              required

              
              {...register("org", { required: true, maxLength: 30 })}
            />
          </label>
        </div>
        <div>
          <label>
            Din besked til kontaktadministrationen:
            {errors.message?.type === "required" && "Du skal skrive en besked!"}
            {errors.message?.type === "maxLength" &&
              "Din besked må ikke fylde mere end 30000 tegn!"}
            {errors.message?.type === "minLength" &&
              "Din besked skal min være 15 tegn!"}
            <textarea
              placeholder="Skriv din besked her..."
              name=""
              id=""
              cols="50"
              rows="10"
              required

             
              {...register("message", {
                required: true,
                minLength: 15,
                maxLength: 30000,
              })}
            ></textarea>
          </label>
        </div>
        <input
          type="hidden"
          name=""
          id="bonding"
          value={props.bonding}
          {...register("bonding", { required: true })}
        />
        <div>
          <button type="submit">
            Send kontaktanmodning til kontaktadministrationen
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
