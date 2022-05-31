import { useEffect, useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Quote = () => {
  const styles = {
    author: css`
      font-size: 15px;
      font-weight: 600;
    `,
    quoteText: css`
      font-size: 21px;
      font-weight: 500;
    `,
  };

  const [randomQuote, setRandomQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("", {})
      .then((response) => {
        if (!response.ok) {
          throw Error("Nogle gange er der bare ingen data");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setRandomQuote(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  });

  console.log(randomQuote);

  return (
    <div>
      {isLoading && <p css={styles.quoteText}>Vi tænker...</p>}
      {randomQuote && <p css={styles.quoteText}>{randomQuote}</p>}

      {error && <p css={styles.quoteText}>{error}</p>}
    </div>
  );
};

export default Quote;
