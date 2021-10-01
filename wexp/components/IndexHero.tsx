import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function IndexHero() {
  return (

    <div className="d-flex flex-column flex-md-row flex-column-reverse">

      <div className="m-lg-5 p-lg-5 m-4 p-4">
        <div className="text-center text-md-start">
          <h1>A carreer matchmaker that thrives on <u>simplicity</u>.</h1>
          <p className="mx-3 my-5 fs-5">
            A tool that brings together inspired <u>young</u> <small>(aged 14 - 23)</small> people and companies, that are looking for new bright minds.
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <div className="d-flex justify-content-center flex-column col-10">
            <div className="strikethrough fs-5"><b>Find</b></div>
            <YouthBtn />
            <div className="strikethrough fs-6">OR</div>
            <CompanyBtn />
          </div>
        </div>
      </div>
      <div className="w-50 d-none d-lg-block m-auto animate__animated animate__bounceIn">
        <Image src="/handshake.svg" width="512px" height="512px"></Image>
      </div>
    </div>
  );
}


const youthSectionPath = '/youth';
const companySectionPath = '/company';

const navButtonClasses = "rounded p-1 px-3 border m-1 fw-normal h5 mx-2 text-decoration-none text-center";
let YouthBtn = (props) => (<Link href={youthSectionPath}><a className={`${navButtonClasses} light-button ${props.addClassName}`} onClick={props.callback}>A Job</a></Link>);
let CompanyBtn = (props) => (<Link href={companySectionPath}><a className={`${navButtonClasses} dark-button ${props.addClassName}`} onClick={props.callback}>An Employee</a></Link>);