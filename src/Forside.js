/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


import Sycrofancy from "./components/Sycrofancy";
import WelcomeArticle from "./components/WelcomeArticle";
import WelcomeImg from "./components/WelcomeImg";

const Forside = () => {
  const styles = {
    welcomeSection: css`
      display: flex;
      justify-content: space-between;

      &article {
        padding-right: 40px;
      }
    `,
  };

  return (
    <>
      <section css={styles.welcomeSection} className="welcome">
        <WelcomeArticle
          heading="Velkommen til applikationen"
          author="Chef Chefsen, CEO"
          body="En browsers opgave er simpelthen at præsentere en masse koder for brugeren - eller rettere: at vise det, som koderne præsenterer, på en brugervenlig måde. En programmør skriver sin kode i nogle filer, som lægges ud på en server koblet til internettet, og når en bruger forsøger at åbne disse filer, kommer visning 100% an på, hvilken browser, filerne åbnes i.n/ Programmørens vigtigste opgave er derfor at skrive noget kode, som kan vises korrekt i browseren. Den store udfordring for enhver internetprogrammør i dag er derfor, at der eksisterer utallige browsere, som alle læser og oversætter koden på hver sin måde. En besøger af fx en hjemmeside kan bruge en hvilken som helst browser. Det har programmøren ingen kontrol over. Derfor kan programmøren ikke blot udvikle hjemmesiden, så den passer til en enkelt, fx den mest populære, browser. Han risikerer nemlig, at der er problemer med, hvordan hjemmesiden ser ud, i andre browsere - problemer som fx, at bokse står oveni hinanden, eller at en knap ikke fungerer overhovedet."
        />
        <WelcomeImg
          altText="Chef Chefsen er CEO"
          imgText={
            "Chef Chefsen er CEO. \n Dit ansigt består af 50 forskellige muskler, men i modsætning til resten af kroppen, så bliver flere af disse muskler sjældent brugt."
          }
        />
      </section>
      <Sycrofancy
        heading="Vær gode venner med din mellemleder"
        body="Navnet sykofant stammer fra græsk sukophantes og læses som en sammentrækning af sukon (figen) og phainein (at fremvise). Det knyttes til et forbud mod at eksportere figner fra Athen. De, der afslørede overtrædelser af forbuddet, kaldtes sykofanter figenafslørere. Gradvis blev ordet på græsk en nedsættende betegnelse på den, der involverer sig i retsprocesser udover det, der anses nødvendigt for en rimelig varetagelse af egne interesser."
        message="Vær en god medarbejder!"
        buttonText="Bond med bossen!"
      />
    </>
  );
};

export default Forside;
