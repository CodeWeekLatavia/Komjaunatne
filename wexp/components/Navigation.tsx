import { useState } from 'react'
import Link from "next/link";
import { withRouter, NextRouter } from "next/router";

import { withAuthUser, useAuthUser } from "next-firebase-auth";

import NavContainer from "./nav/NavContainer";
import NavLogo from './nav/NavLogo';

import firebase from "firebase";
import NavMenuIcon from "./nav/NavMenuIcon";

const youthSectionPath = '/youth';
const companySectionPath = '/company';
const loginSectionPath = '/login';
const dashboardSectionPath = '/redirect'

let isYouthSection = (props: { router: NextRouter }) => props.router.pathname.includes(youthSectionPath);
let isCompanySection = (props: { router: NextRouter }) => props.router.pathname.includes(companySectionPath);
let isLoginSection = (props: { router: NextRouter }) => props.router.pathname.includes(loginSectionPath);
let isDashboardSection = (props: { router: NextRouter }) => props.router.pathname.includes('/dashboard');


function Navigation(props: { router: NextRouter }) {
  let [mobileMenuState, setMobileMenuState] = useState(false);
  let authUser = useAuthUser();
  return (
    <>
      <NavContainer>
        <NavLogo />
        <div className="d-none d-lg-block">
          <NavMenuList authUser={authUser} router={props.router} />
        </div>
        <div className="d-block d-lg-none p-2" onClick={() => setMobileMenuState(!mobileMenuState)}>
          <NavMenuIcon />
        </div>
      </NavContainer>
      {mobileMenuState ?
        <NavMenuPopup authUser={authUser} router={props.router} setMobileMenuState={setMobileMenuState}/> : null}
    </>
  );
}

const NavMenuList = (props: { authUser, router: NextRouter }) => {
  let authUser = props.authUser;
  let auth = authUser.id !== null;
  return (
    <div className="d-flex flex-wrap justify-content-center py-2 py-md-2 align-items-center">
      {!auth && !isLoginSection(props) ? <LoginBtn /> : !auth ? <HomeBtn /> : null}
      {!auth && !isYouthSection(props) ? <YouthBtn /> : !auth ? <HomeBtn /> : null}
      {!auth && !isCompanySection(props) ? <CompanyBtn /> : !auth ? <HomeBtn /> : null}
      {auth && !isDashboardSection(props) ? <DashboardBtn /> : null}
      {authUser.email ? <><DebugInfo text={authUser.email} /> <LogoutBtn /></> : null}
    </div>
  );
}

const NavMenuPopup = (props: { authUser, router: NextRouter, setMobileMenuState }) => {
  let authUser = props.authUser;
  let auth = authUser.id !== null;
  let btnAdditionalClasses = "w-100 text-center"
  let closeMenu = function (e) {
    if (e.target !== e.currentTarget)
    return;
    props.setMobileMenuState(false);
  }
  return (
    <div className={"position-fixed vh-100 vw-100 d-lg-none"} onClick={closeMenu} style={{ zIndex: 4, backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="container d-flex h-50 my-5">
        <div className="card w-100">
          <div className="card-body">
          <div className="card-title">
            <h1>Navigation Menu</h1>
          </div>
            <div className="d-flex flex-column justify-content-center py-2 py-md-2 align-items-center
                            justify-content-evenly h-100">
              {!auth && !isLoginSection(props) ? <LoginBtn addClassName={btnAdditionalClasses} callback={()=>props.setMobileMenuState(false)} /> : !auth ? <HomeBtn addClassName={btnAdditionalClasses} callback={()=>props.setMobileMenuState(false)} /> : null}
              {!auth && !isYouthSection(props) ? <YouthBtn addClassName={btnAdditionalClasses} callback={()=>props.setMobileMenuState(false)} /> : !auth ? <HomeBtn addClassName={btnAdditionalClasses} callback={()=>props.setMobileMenuState(false)} /> : null}
              {!auth && !isCompanySection(props) ? <CompanyBtn addClassName={btnAdditionalClasses} callback={()=>props.setMobileMenuState(false)} /> : !auth ? <HomeBtn addClassName={btnAdditionalClasses} callback={()=>props.setMobileMenuState(false)} /> : null}
              {auth && !isDashboardSection(props) ? <DashboardBtn addClassName={btnAdditionalClasses} callback={()=>props.setMobileMenuState(false)} /> : null}
              {authUser.email ? <><DebugInfo text={authUser.email} /> <LogoutBtn /></> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const navButtonClasses = "rounded p-1 px-3 border m-1 fw-normal h5 mx-2 text-decoration-none";
let YouthBtn = (props) => (<Link href={youthSectionPath}><a className={`${navButtonClasses} light-button ${props.addClassName}`} onClick={props.callback}>For Youth</a></Link>);
let CompanyBtn = (props) => (<Link href={companySectionPath}><a className={`${navButtonClasses} dark-button ${props.addClassName}`} onClick={props.callback}>For Companies</a></Link>);
let HomeBtn = (props) => (<Link href="/"><a className={`${navButtonClasses} purple-button ${props.addClassName}`} onClick={props.callback}>Home</a></Link>);
let LoginBtn = (props) => (<Link href={loginSectionPath}><a className={`${navButtonClasses} white-button ${props.addClassName}`} onClick={props.callback}>Log In</a></Link>);
let LogoutBtn = (props) => (<a className={`${navButtonClasses} red-button  ${props.addClassName}`} onClick={()=>{if(props.callback) props.callback();logOut()}}>Log Out</a>);
let DashboardBtn = (props) => (<Link href={dashboardSectionPath}><a className={`${navButtonClasses} green-button ${props.addClassName}`} onClick={props.callback}>Open Dashboard</a></Link>);
let DebugInfo = (props: { text: string }) => (<div className={`${navButtonClasses}`}>{props.text}</div>);

function logOut() {
  console.log('logging user out');
  firebase.auth().signOut();
}

export default withAuthUser()(withRouter(Navigation));