import { GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";
import AuthHero from "../../components/AuthHero";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import LoadingScreen from "../../components/LoadingScreen";
import Image from 'next/image';
import JobList from "../../components/JobList";
import {JobDetails} from '../../models/job-list';

function Youth(props: any) {
  const [filterSettingsOpen, setFilterSettingsOpen] = useState(false);

  return (
    <div className="container ">
      <div className="mb-5">
        <h2 className="text-center py-4">For Youth - Start Your Journey Here</h2>
        <AuthHero context="youth" />
      </div>
      <div className="text-center mt-5 pt-5">
        <h3>Available Employers</h3>
        <p>Here is the list of our registered employers</p>
        <div className="bg-dark w-100 py-1 px-5 text-end text-white rounded-3">
          <a>Open Filter Settings &#x2193;</a>
        </div>
        <div className="d-flex flex-wrap">
        <JobList jobs={props.data}/>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data: JobDetails[] = [
    {
      jobTitle: "Accenture",
      imageURL: "/company-logos/accenture.png",
      shortDescription: "Looking for a front-end developer",
    },
    {
      jobTitle: "Bite",
      imageURL: "/company-logos/bite.png",
      shortDescription: "Looking for an IT consultant for the elderly.",
    },
    {
      jobTitle: "DHL",
      imageURL: "/company-logos/dhl.png",
      shortDescription: "Bicycle delivery gig available.",
    },
    {
      jobTitle: "Gan Bei",
      imageURL: "/company-logos/ganbei.png",
      shortDescription: "Well-paid cook position available.",
    },
    {
      jobTitle: "HelloIT",
      imageURL: "/company-logos/HelloIT.png",
      shortDescription: "Looking for a Scratch teacher",
    },
    {
      jobTitle: "Rimi",
      imageURL: "/company-logos/rimi.png",
      shortDescription: "Shelving job available.",
    },
  ];
  return { props: { data } };
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  appPageURL: '/redirect',
  LoaderComponent: LoadingScreen
})(Youth);