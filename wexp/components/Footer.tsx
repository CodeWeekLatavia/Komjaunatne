import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  let navLinkClasses = "fw-normal h5 mx-2 flex-wrap";
  return (
    <footer className="p-3 py-5">
      <div className="container-md d-flex flex-row flex-md-row justify-content-around align-items-center flex-wrap">
        
        <div className="d-md-block d-none">
        <Image
              src="/logo.svg"
              alt="Picture of the author"
              width={150}
              height={30}
            />
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="container d-flex justify-content-around">©2021 WEXP</div>
    </footer>
  );
}
