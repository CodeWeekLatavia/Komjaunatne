import { GetServerSideProps } from "next";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Link from "next/link";

interface Employer {
  name: string;
  description: string;
}

export default function Youth(props: AppProps) {
  // FIX THE KEY
  let employerCardsHTML = props.data.map((employer: Employer, index:number) => (
    <div className="col-4 p-3" key={employer.name+" "+index}>
    <div className="card py-5 shadow-sm give-me-food-pls" >
      <div className="card-body">
        <h5 className="card-title">{employer.name}</h5>
        <p className="card-text">
          With supporting text below as a natural leand-in to additional
          content.
        </p>
        <div className="mt-5">
        <Link href="#about-us">
          <a className="rounded py-1 px-4 border fw-normal my-2 text-decoration-none white-button">
            Open profile
          </a>
        </Link>
        </div>
      </div>
    </div>
    </div>
  ));
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        minWidth: "100vw",
        minHeight: "80vh",
      }}
    >
      <div className="container ">
        <div className="mb-5">
          <h1 className="text-center pt-4">For Youth</h1>
          <h3 className="text-center py-3">Start Your Journey Here</h3>
          <form action="" className="w-50 m-auto">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
              <div id="emailHelp" className="form-text">
                We will share your email across the globe.
              </div>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck"
              />
              <label htmlFor="exampleCheck1" className="form-check-label">
                I agree to the{" "}
                <i>
                  <a>terms and conditions</a>
                </i>
              </label>
            </div>
            <button
              type="submit"
              className="rounded py-2 px-4  border fw-normal h5 text-decoration-none w-100 dark-button"
            >
              <a>Sign Up</a>
            </button>
          </form>
        </div>
        <div className="text-center mt-5 pt-5">
          <h3>Available Employers</h3>
          <p>Here is the list of our registered employers</p>
          <div className="bg-dark w-100 py-1 text-white">
            <a>Filter &#x2193;</a>
          </div>
          <div className="d-flex flex-wrap">{employerCardsHTML}</div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data: Employer[] = [
    {
      name: "Accenture",
      description: "Looking for a front-end developer",
    },
    {
      name: "TELE2",
      description: "Looking for a back-end developer",
    },
    {
      name: "TELE2",
      description: "Looking for a back-end developer",
    },
    {
      name: "TELE2",
      description: "Looking for a back-end developer",
    },
    {
      name: "TELE2",
      description: "Looking for a back-end developer",
    },
    {
      name: "TELE2",
      description: "Looking for a back-end developer",
    }
  ];
  return { props: { data } };
};
