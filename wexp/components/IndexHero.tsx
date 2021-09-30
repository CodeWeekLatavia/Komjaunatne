import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function IndexHero(){
    return (

        <div className="d-flex flex-column flex-md-row flex-column-reverse">

          <div className="m-md-5 p-md-5">
            <div className="text-center text-md-start">
              <h1>Do You Want To Find A Job or An Employee?</h1>
              <p className="mx-3 my-5">
                WExp is here to help the inspired <b>youth</b> start working at
                jobs where they <b>blossom.</b>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Link href="#about-us">
                <a className="rounded py-2 px-5 border fw-normal h5 my-2 text-decoration-none purple-button">
                  About Us
                </a>
              </Link>
            </div>
          </div>
          <div className="w-75 m-auto animate__animated animate__bounceIn">
            <Image src="/handshake.svg" width="512px" height="512px"></Image>
          </div>
        </div>
    );
}