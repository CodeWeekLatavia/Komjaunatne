import Link from "next/link";
import { withRouter, NextRouter } from "next/router";

import NavContainer from "./NavContainer";
import NavLogo from './NavLogo';


const youthSectionPath = '/youth';
const companySectionPath = '/company';
const loginSectionPath = '/login';
const pricingSectionPath = '/pricing-features';

function Navigation(props: {router: NextRouter}) {
  let isYouthSection = (props: {router: NextRouter}) => props.router.pathname.includes(youthSectionPath);
  let isCompanySection = (props: {router: NextRouter}) => props.router.pathname.includes(companySectionPath);
  let isLoginSection = (props: {router: NextRouter}) => props.router.pathname.includes(loginSectionPath);
  return (
    <NavContainer>
      <NavLogo />
      <div className="d-flex flex-wrap justify-content-center py-2 py-md-2 align-items-center">
        <PricingBtn/>
        {isYouthSection(props) || isCompanySection(props) ? <HomeBtn /> : null}
        {!isYouthSection(props) ? <YouthBtn /> : null}
        {!isCompanySection(props) ? <CompanyBtn /> : null}
        {!isLoginSection(props) ? <LoginBtn/> : null}
      </div>
    </NavContainer>
  );
}

const navButtonClasses = "rounded p-1 px-4 border m-1 fw-normal h5 mx-3 text-decoration-none";
let YouthBtn = () => (<Link href={youthSectionPath}><a className={`${navButtonClasses} light-button`}>For Youth</a></Link>);
let CompanyBtn = () => (<Link href={companySectionPath}><a className={`${navButtonClasses} dark-button`}>For Companies</a></Link>);
let PricingBtn = () => (<Link href={pricingSectionPath}><a className={`${navButtonClasses} white-button`}>Pricing & Features</a></Link>);
let HomeBtn = () => (<Link href="/"><a className={`${navButtonClasses} purple-button`}>Home</a></Link>);
let LoginBtn = () => (<Link href={loginSectionPath}><a className={`${navButtonClasses} green-button`}>Log In</a></Link>);

export default withRouter(Navigation);