import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
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
                <a className="rounded py-2 px-5 border fw-normal h5 my-2 text-decoration-none dark-button">
                  About Us
                </a>
              </Link>
            </div>
          </div>
          <div className="w-75 m-auto">
            <Image src="/handshake.svg" width="512px" height="512px"></Image>
          </div>
        </div>
      </div>

      <div
        className={
          "bg-dark w-100 mt-5 pb-5 d-md-block d-none " + styles.invertedRadius
        }
      >
        <div className="container d-flex justify-content-center align-items-center flex-column py-4">
          <h1 className="text-white mt-4">Our features</h1>
          <div className="row w-100 my-4">
            <div className="col text-white text-center">
              <Image src="/guarantee.svg" width="149px" height="152px"></Image>
            </div>
            <div className="col text-white text-center">
              <Image src="/speed.svg" width="238px" height="152px"></Image>
            </div>
            <div className="col text-white text-center">
              <Image src="/simple.svg" width="218px" height="171px"></Image>
            </div>
          </div>
          <div className="row w-100 my-4">
            <div className="col text-white text-center">
              <h4>Guarantee</h4>
              <p>
                We provide guarantee both to the employee and the employer of
                matching interests.
              </p>
            </div>
            <div className="col text-white text-center">
              <h4>Speed</h4>
              <p>
                We provide you with both “best” and “all” oppurtunities at the
                click of a button.
              </p>
            </div>
            <div className="col text-white text-center">
              <h4>Simple</h4>
              <p>
                We provide that even the elderly could navigate our services
                with ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          "bg-dark w-100 mt-5 d-md-none d-block " + styles.invertedRadius
        }
      >
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <h1 className="text-white mt-4">Our features</h1>
          <div className="row w-100 my-4">
            <div className="col-100 p-4 text-white text-center">
              <Image src="/guarantee.svg" width="149px" height="152px"></Image>
              <h4>Guarantee</h4>
              <p>
                We provide guarantee both to the employee and the employer of
                matching interests.
              </p>
            </div>
            <div className="col-100 p-4 text-white text-center">
              <Image src="/speed.svg" width="238px" height="152px"></Image>
              <h4>Speed</h4>
              <p>
                We provide you with both “best” and “all” oppurtunities at the
                click of a button.
              </p>
            </div>
            <div className="col-100 p-4 text-white text-center">
              <Image src="/simple.svg" width="218px" height="171px"></Image>
              <h4>Simple</h4>
              <p>
                We provide that even the elderly could navigate our services
                with ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={"bg-body w-100 " + styles.invertedRadiusWhite}>
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <h1 id="about-us">About Us</h1>
            <div className="d-flex justify-content-around align-items-center">
              <p className="col-10 col-md-5 text-center text-md-start">
                We are a group of high schoolers with one thing in mind - making
                getting jobs easier for our generation and the ones after us.
                <br />
                <br />
                As teens, we have very limited options on how to get a job - we
                either work alongside a family member or we have to search for
                it in a convoluted government site. Our project ensures a great
                experience both for the employer and employee.
                <br />
                <br />
                WExp stands for Work Experience: what we, as teens, gain from
                our jobs to use later in life. Without it, we spend our summers
                wasting our time which could be spent on improving our work
                ethic and getting paid for it.
                <br />
                <br />
                We hope your experience is excellent and influential in your
                future career or business’ growth.
              </p>
              <div className="d-none d-md-block">
                <Image src="/about-us.svg" width="532px" height="508px"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
