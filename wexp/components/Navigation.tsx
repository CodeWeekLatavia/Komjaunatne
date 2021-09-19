import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";
import { withRouter } from "next/router";
import Router from "next";
import { AppProps } from "next/dist/next-server/lib/router/router";

const navButtonClasses = "rounded p-1 px-4 border m-1 fw-normal h5 mx-3 text-decoration-none";

function HomeNavigation() {
  return (
    <>
      <Link href="/youth">
        <a className={`${navButtonClasses} white-button`}>For Youth</a>
      </Link>
      <Link href="/company">
        <a className={`${navButtonClasses} dark-button`}>
          For Companies
        </a>
      </Link>
    </>
  );
}

function OtherNavigation() {
  return (
    <Link href="#">
      <a className={`${navButtonClasses} dark-button`}>
        Sign In
      </a>
    </Link>
  );
}

function Navigation(props: AppProps) {
  let rightSide;
  console.log(props.router.pathname);
  if (!props.router.pathname.includes("youth") && !props.router.pathname.includes("company")) {
    rightSide = <HomeNavigation />;
  } else {
    rightSide = <OtherNavigation />;
  }
  return (
    <div className="mt-5">
      <nav style={{ position: "fixed", zIndex: 3, top: 0 }} className="w-100 bg-white">
        <div className="container d-flex align-items-center flex-column flex-md-row justify-content-between">
          <Link href="/">
            <a>
              <div style={{ padding: "2px" }}>
                <Image
                  src="/logo.svg"
                  alt="Picture of the author"
                  width={230}
                  height={40}
                />
              </div>
            </a>
          </Link>
          <div>
            {rightSide}
          </div>
        </div>
        <hr style={{ margin: "0" }} />
      </nav>
    </div>
  );
}

export default withRouter(Navigation);