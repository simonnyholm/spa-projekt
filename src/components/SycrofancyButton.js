
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SycrofancyButton = ({bonding, setBonding}) => {
  //const [bonding, setBonding] = useState(false);
  const styles = {
    buttonFalse: css`
      margin: 100px 0 0 30px;
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
    `,
    buttonTrue: css`
      margin: 100px 0 0 30px;
      padding: 0 30px 0 30px;
      width: 500px;
      height: 170px;
      font-size: 20px;
      font-weight: 500;
      border: none;
      background-color: #7492d5;
      color: #020611;
      cursor: pointer;

      :hover {
        background-color: #536c9c;
      }
    `,
  };

  return (
    <>
      {!bonding && (
        <button css={styles.buttonFalse} onClick={(event) => setBonding(true)}>
          Knyt bånd med din nærmeste leder i din respektive afdeling
        </button>
      )}
      {bonding && (
        <button css={styles.buttonTrue} onClick={(event) => setBonding(false)}>
          Du kan altid afbryde din forbindelse hér, og miste alt
        </button>
      )}
    </>
  );
};

export default SycrofancyButton;
