import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import IndexHero from "../components/IndexHero";
import Container from "../components/Container";
import IndexValues from "../components/IndexValues";

export default function Home() {
  return (
    <>
      <Container>
        <IndexHero />
      </Container>

      <div className={"bg-dark w-100 mt-5 pb-5 " + styles.invertedRadius}>
        <Container>
          <IndexValues />
        </Container>
      </div>

      <div className={"bg-body w-100 " + styles.invertedRadiusWhite}>
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <h1 id="about-us">About Us</h1>
            <div className="d-flex justify-content-around align-items-center">
              <p className="col-10 col-md-5 text-center text-md-start">
                We are a group of high schoolers with one thing in mind - making getting jobs easier for our generation and the ones after us.
                <br /><br />
                As teens, we have very limited options on how to get a job - we either work alongside a family member or we have to search for it in a convoluted government site. Our project ensures a great experience both for the employer and employee.
                <br /><br />
                WExp stands for Work Experience: what we, as teens, gain from our jobs to use later in life. Without it, we spend our summers wasting our time which could be spent on improving our work ethic and getting paid for it.
                <br /><br />
                We hope your experience is excellent and influential in your future career or business’ growth.
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
