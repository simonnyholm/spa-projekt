const SycrofancyArticle = ({heading, body, message}) => {
  return (
    <article>
      <h2>{heading}</h2>
      <p>{body}</p>
      <p>{message}</p>
    </article>
  );
};

export default SycrofancyArticle;
