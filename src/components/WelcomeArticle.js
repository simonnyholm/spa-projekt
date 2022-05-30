const WelcomeArticle = (props) => {
  return (
    <article>
      <h2>{props.heading}</h2>
      <p>Af {props.author}</p>
      <p>{props.body}</p>
    </article>
  );
};

export default WelcomeArticle;
