import ContactForm from "./ContactForm";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Contact = () => {
  const styles = {
    formDiv: css`
      margin: 30px 0 30px;
      padding: 20px;
      background-color: rgba(59, 49, 14, 0.337);
      max-width: 550px;
    `,
  };
  return (
    <section>
      <h1>Kontakt</h1>
      <p>
        Kontakt er vigtig. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptatem, perspiciatis dolor laborum sed fugiat exercitationem
        illo magnam iusto distinctio, et itaque repudiandae minima numquam
        aliquid repellat pariatur harum? Non, pariatur!
      </p>
      <div css={styles.formDiv} className="formdiv">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
