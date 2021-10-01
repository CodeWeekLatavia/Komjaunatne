import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import IndexHero from "../components/IndexHero";
import Container from "../components/Container";
import IndexValues from "../components/IndexValues";
import IndexFeatures from "../components/IndexFeatures";
import IndexWarning from "../components/IndexWarning";

export default function Home() {
  return (
    <>
      <Container>
        <IndexHero />
      </Container>

      <div className={"bg-elephant w-100 mt-5 pb-5 " + styles.invertedRadius}>
        <Container>
          <IndexFeatures/>
        </Container>
      </div>

      <Container>
        <IndexValues />
      </Container>

      <Container>
        <IndexWarning />
      </Container>

      <div className={"bg-body w-100 bg-elephant"}>
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <h1 id="about-us">About Us</h1>
            <div className="d-flex justify-content-around align-items-center">
              <p className="col-10 col-md-5 text-center text-md-start fs-5">
                As teens, we have very limited options on how to get a job - we either work alongside a family member or we have to search for it in a convoluted government site.
                <br /><br />
                Our project ensures a great experience both for the employer and employee.
                <br /><br />
                WExp stands for Work Experience: what we, as teens, gain from our jobs to use later in life. Without it, we spend our summers wasting our time which could be spent on improving our work ethic and getting paid for it.
                <br /><br />
                We hope your experience is excellent and influential in your future career or business’ growth.
              </p>
              <div className="d-none d-md-block">
                <Image src="/image0.jpg" width="400px" height="600px" objectFit={'contain'}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
