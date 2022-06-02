import ContactForm from "./ContactForm";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Sycrofancy from "./Sycrofancy";
import { useState } from "react";


const Contact = () => {

  const [bonding, setBonding] = useState(false);
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
      <Sycrofancy
        heading="Vær gode venner med din chef"
        body="Navnet sykofant stammer fra græsk sukophantes og læses som en sammentrækning af sukon (figen) og phainein (at fremvise). Det knyttes til et forbud mod at eksportere figner fra Athen. De, der afslørede overtrædelser af forbuddet, kaldtes sykofanter figenafslørere. Gradvis blev ordet på græsk en nedsættende betegnelse på den, der involverer sig i retsprocesser udover det, der anses nødvendigt for en rimelig varetagelse af egne interesser."
        message="Vær en god til samarbejde!"
        buttonText="Bond med din boss!"
        bonding={bonding}
        setBonding={setBonding}
      />
      <div css={styles.formDiv} className="formdiv">
        <ContactForm bonding={bonding} />
      </div>
    </section>
  );
};

export default Contact;
