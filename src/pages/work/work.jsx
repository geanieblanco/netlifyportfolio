import { Outlet, Link } from "react-router-dom";
import { getWork } from "../../data";

export default function Work() {
  let companies = getWork();

  return (
    <main className="work">
      <nav className="projects__nav js-project-nav">
        {companies.map((company, i) => (
          <Link
            to={`/work/${company.slug}`}
            key={i}
          >
            {company.companyName}
          </Link>
        ))}
      </nav>
      <Outlet/>
    </main>
  );
}