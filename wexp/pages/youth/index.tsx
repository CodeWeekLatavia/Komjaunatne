import { GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";
import AuthHero from "../../components/AuthHero";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import LoadingScreen from "../../components/LoadingScreen";

interface Employer {
  name: string;
  description: string;
}

function Youth(props: any) {
  // FIX THE KEY
  let employerCardsHTML = props.data.map(
    (employer: Employer, index: number) => (
      <div className="col-4 p-3" key={employer.name + " " + index}>
        <div className="card py-5 shadow-sm give-me-food-pls">
          <div className="card-body">
            <h5 className="card-title">{employer.name}</h5>
            <p className="card-text">
              With supporting text below as a natural leand-in to additional
              content.
            </p>
            <div className="mt-5">
              <Link href="#about-us">
                <a className="rounded py-1 px-4 border fw-normal my-2 text-decoration-none light-button">
                  Open profile
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );

  const [filterSettingsOpen, setFilterSettingsOpen] = useState(false);
  let filterSettingsHTML;
  if (filterSettingsOpen) {
    filterSettingsHTML = (
      <div id="filterSettings" className="bg-dark w-100 py-5 text-white">
        <div className="w-75 m-auto">
          <label htmlFor="customRange1" className="form-label">
            Example range
          </label>
          <input type="range" className="form-range" id="customRange1" />
          <label htmlFor="customRange1" className="form-label">
            Example range
          </label>
          <input type="range" className="form-range" id="customRange1" />
        </div>

      </div>
    );
  } else {
    filterSettingsHTML = (
      <div id="filterSettings" className="bg-dark w-100 py-1 text-white">
      </div>
    );
  }

  return (
    <div>
      <div className="container ">
        <div className="mb-5">
          <h2 className="text-center py-4">For Youth - Start Your Journey Here</h2>
          <AuthHero context="youth"/>
        </div>
        <div className="text-center mt-5 pt-5">
          <h3>Available Employers</h3>
          <p>Here is the list of our registered employers</p>
          <div className="bg-dark w-100 py-1 text-white">
            <a
              onClick={() => {
                setFilterSettingsOpen(!filterSettingsOpen);
              }}
            >
              Filter Settings &#x2193;
            </a>
          </div>
          {filterSettingsHTML}

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
    },
  ];
  return { props: { data } };
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  appPageURL: '/dashboard',
  LoaderComponent: LoadingScreen
})(Youth);