import SycrofancyArticle from "./SycrofancyArticle";
import SycrofancyButton from "./SycrofancyButton";

const Sycrofancy = ({heading, body, message, buttonText}) => {
    return ( <section>

        <SycrofancyArticle heading={heading} body={body} message={message}/>
        <SycrofancyButton buttonText={buttonText}/>
    </section> );
}
 
export default Sycrofancy;