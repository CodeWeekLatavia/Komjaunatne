import Image from "next/image";
import Link from "next/link";
import { withRouter, NextRouter } from "next/router";

interface WithRouterProps {
  router: NextRouter
}

function Navigation(props: WithRouterProps) {
  let isYouthSection = (props: WithRouterProps)=>props.router.pathname.includes("youth");
  let isCompanySection = (props: WithRouterProps)=>props.router.pathname.includes("company");

  return (
    <div className="mt-5 pt-2">
      <nav style={{ position: "fixed", zIndex: 3, top: 0 }} className="w-100 bg-white">
        <div className="container d-flex align-items-center flex-column flex-md-row justify-content-between">
          <Link href="/">
            <a>
              <div style={{ padding: "2px" }}>
                <Image
                  src="/logo.svg"
                  alt="Company Logo"
                  width={230}
                  height={40}
                />
              </div>
            </a>
          </Link>
          <div className="py-3 py-md-3">
            {!isYouthSection(props) ? <YouthBtn/>:null}
            {!isCompanySection(props) ? <CompanyBtn/>:null}
            {isYouthSection(props)||isCompanySection(props) ? <HomeBtn/>:null}
          </div>
        </div>
        <hr style={{ margin: "0 30px" }} />
      </nav>
    </div>
  );
}

const navButtonClasses = "rounded p-1 px-4 border m-1 fw-normal h5 mx-3 text-decoration-none";
let YouthBtn = () => (<Link href="/youth"><a className={`${navButtonClasses} light-button`}>For Youth</a></Link>);
let CompanyBtn = () => (<Link href="/company"><a className={`${navButtonClasses} dark-button`}>For Companies</a></Link>);
let HomeBtn = () => (<Link href="/"><a className={`${navButtonClasses} purple-button`}>Return</a></Link>);

export default withRouter(Navigation);