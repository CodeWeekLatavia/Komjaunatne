import Link from "next/link";
import { withRouter, NextRouter } from "next/router";

import { withAuthUser, useAuthUser} from "next-firebase-auth";

import NavContainer from "./NavContainer";
import NavLogo from './NavLogo';

import firebase from "firebase";

const youthSectionPath = '/youth';
const companySectionPath = '/company';
const loginSectionPath = '/login';
const dashboardSectionPath = '/dashboard'

function Navigation(props: {router: NextRouter}) {

  let isYouthSection = (props: {router: NextRouter}) => props.router.pathname.includes(youthSectionPath);
  let isCompanySection = (props: {router: NextRouter}) => props.router.pathname.includes(companySectionPath);
  let isLoginSection = (props: {router: NextRouter}) => props.router.pathname.includes(loginSectionPath);
  let isDashboardSection = (props: {router: NextRouter}) => props.router.pathname.includes(dashboardSectionPath);
  
  let AuthUser = useAuthUser();
  let auth = AuthUser.id !== null;

  return (
    <NavContainer>
      <NavLogo />
      <div className="d-flex flex-wrap justify-content-center py-2 py-md-2 align-items-center">
        {!auth && !isLoginSection(props) ? <LoginBtn/> : !auth?<HomeBtn/>:null}
        {!auth && !isYouthSection(props) ? <YouthBtn /> : !auth?<HomeBtn/>:null}
        {!auth && !isCompanySection(props) ? <CompanyBtn /> : !auth?<HomeBtn/>:null}
        { auth && !isDashboardSection(props) ? <DashboardBtn/>: null}
        {AuthUser.email ? <><DebugInfo text={AuthUser.email}/> <LogoutBtn/></> : null}
      </div>
    </NavContainer>
  );
}

const navButtonClasses = "rounded p-1 px-3 border m-1 fw-normal h5 mx-2 text-decoration-none";

let YouthBtn = () => (<Link href={youthSectionPath}><a className={`${navButtonClasses} light-button`}>For Youth</a></Link>);
let CompanyBtn = () => (<Link href={companySectionPath}><a className={`${navButtonClasses} dark-button`}>For Companies</a></Link>);
let HomeBtn = () => (<Link href="/"><a className={`${navButtonClasses} purple-button`}>Home</a></Link>);
let LoginBtn = () => (<Link href={loginSectionPath}><a className={`${navButtonClasses} white-button`}>Log In</a></Link>);
let LogoutBtn = () => (<a className={`${navButtonClasses} red-button`} onClick={logOut}>Log Out</a>);
let DashboardBtn = () => (<Link href={dashboardSectionPath}><a className={`${navButtonClasses} green-button`}>Open Dashboard</a></Link>);
let DebugInfo = (props: {text: string}) => (<div className={`${navButtonClasses}`}>{props.text}</div>);

function logOut(){
  console.log('logging user out');
  firebase.auth().signOut();
}

export default withAuthUser()(withRouter(Navigation));