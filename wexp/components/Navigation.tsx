import Link from "next/link";
import { withRouter, NextRouter } from "next/router";
import NavContainer from "./NavContainer";
import NavLogo from './NavLogo';

function Navigation(props: {router: NextRouter}) {
  let isYouthSection = (props: {router: NextRouter}) => props.router.pathname.includes("youth");
  let isCompanySection = (props: {router: NextRouter}) => props.router.pathname.includes("company");

  return (
    <NavContainer>
      <NavLogo />
      <div className="d-flex flex-wrap justify-content-center py-3 py-md-3">
        {!isYouthSection(props) ? <YouthBtn /> : null}
        {!isCompanySection(props) ? <CompanyBtn /> : null}
        {isYouthSection(props) || isCompanySection(props) ? <HomeBtn /> : null}
      </div>
    </NavContainer>
  );
}

const navButtonClasses = "rounded p-1 px-4 border m-1 fw-normal h5 mx-3 text-decoration-none";
let YouthBtn = () => (<Link href="/youth"><a className={`${navButtonClasses} light-button`}>For Youth</a></Link>);
let CompanyBtn = () => (<Link href="/company"><a className={`${navButtonClasses} dark-button`}>For Companies</a></Link>);
let HomeBtn = () => (<Link href="/"><a className={`${navButtonClasses} purple-button`}>Return</a></Link>);

export default withRouter(Navigation);