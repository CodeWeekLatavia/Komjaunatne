import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";
import {withRouter} from "next/router";
import Router from "next";
import { AppProps } from "next/dist/next-server/lib/router/router";

function HomeNavigation() {
  let navYouthButtonClasses =
    "rounded  py-2 px-4 border m-1 fw-normal h5 mx-3 text-decoration-none white-button";
  let navCompanyButtonClasses =
    "rounded py-2 px-4 border m-1 fw-normal h5 mx-3 text-decoration-none dark-button";

  return (
    <div className="d-none d-md-block">
      <Link href="/youth">
        <a className={navYouthButtonClasses + " " + styles.link}>For Youth</a>
      </Link>
      <Link href="/company">
        <a className={navCompanyButtonClasses + " " + styles.link}>
          For Companies
        </a>
      </Link>
    </div>
  );
}

function OtherNavigation(){
  let signInButtonClasses = 
    "rounded py-2 px-4 border m-1 fw-normal h5 mx-3 text-decoration-none dark-button";
    return (
      <div className="d-none d-md-block">
        <Link href="#">
          <a className={signInButtonClasses + " " + styles.link}>
            Sign In
          </a>
        </Link>
      </div>
    );
}

function Navigation(props: AppProps) {
  let rightSide;
  console.log(props.router.pathname);
  if(!props.router.pathname.includes("youth")&&!props.router.pathname.includes("company")){
    rightSide = <HomeNavigation/>;
  }else{
    rightSide = <OtherNavigation/>;
  }
  return (
    <>
      <nav className="container d-flex align-items-center flex-column flex-md-row justify-content-between py-2">
        <Link href="/">
          <a>
            <Image
              src="/logo.svg"
              alt="Picture of the author"
              width={230}
              height={45}
            />
          </a>
        </Link>
        {rightSide}
      </nav>
    </>
  );
}

export default withRouter(Navigation);