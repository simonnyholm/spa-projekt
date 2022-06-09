/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

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
        background-color: #ffffff;
      }

      & textarea {
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 3px solid #ddd;
        box-sizing: border-box;
        display: block;
        background-color: #ffffff;
      }

      & select {
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 3px solid #ddd;
        box-sizing: border-box;
        display: block;
        background-color: #ffffff;
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
    border: css`
      border: solid 3px red;
    `,
  };

  const schema = yup
    .object({
      fullName: yup
        .string()
        .required("Du bedes anføre dit fulde navn, så vi ved, hvem du er"),
      email: yup.string().email(" Du bedes skrive din e-mail-adresse korrekt"),
      repEmail: yup
        .string()
        .email()
        .oneOf(
          [yup.ref("email"), null],
          " Din e-mail skal være identisk med den, du lige har indtastet"
        )
        .required(" Du bedes gentage din email-adresse"),
      pronoun: yup.string().required("Anfør venligst dit foretrukne pronomen"),
      org: yup
        .string()
        .required(
          " Du bedes anføre din organisation, så vi ved, hvor du kommer fra"
        ),
      message: yup
        .string()
        .min(25, " Din besked skal være mindst 25 tegn langt")
        .max(5000, " Din besked må maksimalt være 500 tegn lang"),
      bonding: yup.string().required(),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => 
  
  console.log("output", data);



  const [messageLength, setMessageLength] = useState("");

  console.log(messageLength);

  return (
    <>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Dit fulde navn:
            {errors.fullName?.message}
            <input
              style={
                errors.fullName?.message !== undefined
                  ? {
                      border: "solid 4px rgb(235, 17, 60)",
                      backgroundColor: "rgb(246, 206, 105)",
                    }
                  : {}
              }
              {...register("fullName")}
            />
          </label>
        </div>
        <div>
          <label>
            Din e-mail-adresse:
            {errors.email?.message}
            <input
              type="email"
              name=""
              id=""
              style={
                errors.email?.message !== undefined
                  ? {
                      border: "solid 4px rgb(235, 17, 60)",
                      backgroundColor: "rgb(246, 206, 105)",
                    }
                  : {}
              }
              {...register("email")}
            />
          </label>
        </div>
        <div>
          <label>
            Gentag din e-mail-adresse:
            {errors.repEmail?.message}
            <input
              type="email"
              name=""
              id=""
              style={
                errors.repEmail?.message !== undefined
                  ? {
                      border: "solid 4px rgb(235, 17, 60)",
                      backgroundColor: "rgb(246, 206, 105)",
                    }
                  : {}
              }
              {...register("repEmail")}
            />
          </label>
        </div>
        <div>
          <label>
            Pronomen:
            {errors.pronoun?.message}
            <select
              defaultValue={""}
              style={
                errors.pronoun?.message !== undefined
                  ? {
                      border: "solid 4px rgb(235, 17, 60)",
                      backgroundColor: "rgb(246, 206, 105)",
                    }
                  : {}
              }
              {...register("pronoun")}
            >
              <option disabled value="">
                Vælg et pronomen...
              </option>
              <option value="han">han</option>
              <option value="hun">hun</option>
              <option value="hen">hen</option>
              <option value="de">de</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Organisation:
            {errors.org?.message}
            <input
              type="text"
              style={
                errors.fullName?.message !== undefined
                  ? {
                      border: "solid 4px rgb(235, 17, 60)",
                      backgroundColor: "rgb(246, 206, 105)",
                    }
                  : {}
              }
              {...register("org")}
            />
          </label>
        </div>
        <div>
          <label>
            Din besked til kontaktadministrationen:
            {errors.message?.message}
            <textarea
              onChange={(event) => {
                setMessageLength(event.target.value.length);
              }}
              placeholder="Skriv din besked her..."
              name=""
              id=""
              cols="50"
              rows="10"
              style={
                errors.message?.message !== undefined
                  ? {
                      border: "solid 4px rgb(235, 17, 60)",
                      backgroundColor: "rgb(246, 206, 105)",
                    }
                  : {}
              }
              {...register("message")}
            ></textarea>
            <p>Antal tegn: {messageLength}</p>
          </label>
        </div>
        <input
          type="hidden"
          name=""
          id="bonding"
          value={props.bonding}
          {...register("bonding")}
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
