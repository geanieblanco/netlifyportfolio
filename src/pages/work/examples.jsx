import { useParams } from "react-router-dom";
import { getWorkBySlug } from "../../data";

function Examples() {
    let params = useParams();
    let example = getWorkBySlug(params.slug);

    return (
        <section className="example">
            <a href="/examples">Back</a>
            <article className="example-detail">
                <h2>{example.companyName}</h2>
                <img src={example.image} alt=""/>
                <p><span>Created: </span>{example.date}</p>
                <p>{example.description}</p>
                <div className="example-detail__ctas">
                    <a className="button" href={example.githubLink}>Github</a>
                    <a className="button" href={example.demoLink}>Demo</a>
                </div>
            </article>
        </section>
    );
  }

  export default Examples;