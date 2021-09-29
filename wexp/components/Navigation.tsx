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
      <div className="d-flex flex-wrap justify-content-center py-2 py-md-2 align-items-center">
        <PricingBtn/>
        {isYouthSection(props) || isCompanySection(props) ? <HomeBtn /> : null}
        {!isYouthSection(props) ? <YouthBtn /> : null}
        {!isCompanySection(props) ? <CompanyBtn /> : null}
        <LoginBtn/>
      </div>
    </NavContainer>
  );
}

const navButtonClasses = "rounded p-1 px-4 border m-1 fw-normal h5 mx-3 text-decoration-none";
let YouthBtn = () => (<Link href="/youth"><a className={`${navButtonClasses} light-button`}>For Youth</a></Link>);
let CompanyBtn = () => (<Link href="/company"><a className={`${navButtonClasses} dark-button`}>For Companies</a></Link>);
let PricingBtn = () => (<Link href="/pricing"><a className={`${navButtonClasses} white-button`}>Pricing</a></Link>);
let HomeBtn = () => (<Link href="/"><a className={`${navButtonClasses} purple-button`}>Home</a></Link>);
let LoginBtn = () => (<Link href="/"><a className={`${navButtonClasses} green-button`}>Log In</a></Link>);

export default withRouter(Navigation);