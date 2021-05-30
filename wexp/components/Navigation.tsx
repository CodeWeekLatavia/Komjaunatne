import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  let navYouthButtonClasses =
    "rounded border-dark  py-2 px-4  border m-1 fw-normal h5 mx-3 text-body text-decoration-none";
  let navCompanyButtonClasses =
    "rounded border-dark py-2 px-4  border m-1 fw-normal h5 mx-3 text-white text-decoration-none bg-dark";
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
        <div className="d-none d-md-block">
          <Link href="/youth">
            <a className={navYouthButtonClasses + " " + styles.link}>
              For Youth
            </a>
          </Link>
          <Link href="/company">
            <a className={navCompanyButtonClasses + " " + styles.link}>
              For Companies
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
}
