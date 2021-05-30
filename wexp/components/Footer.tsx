import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  let navLinkClasses = "fw-normal h5 mx-2 flex-wrap";
  return (
    <footer className="p-3">
      <div className="container-md d-flex flex-row flex-md-row justify-content-around align-items-center flex-wrap">
        <div></div>
        <Link href="#">
          <a className={navLinkClasses}>Privacy</a>
        </Link>
        <Link href="#">
          <a className={navLinkClasses}>Features</a>
        </Link>
        <Link href="#">
          <a className={navLinkClasses}>Contact us</a>
        </Link>
        
        <div className="d-md-block d-none">
        <Image
              src="/logo.svg"
              alt="Picture of the author"
              width={150}
              height={24}
            />
        </div>
        <Link href="#">
          <a className={navLinkClasses}>About</a>
        </Link>
        <Link href="#">
          <a className={navLinkClasses}>Youth</a>
        </Link>
        <Link href="#">
          <a className={navLinkClasses}>Companies</a>
        </Link>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="container d-flex justify-content-around">©2021 WEXP</div>
    </footer>
  );
}
