
import { AuthAction, withAuthUser } from "next-firebase-auth";
import LoadingScreen from "../../components/LoadingScreen";
import JobList from "../../components/JobList";
import { JobDetails } from '../../models/job-list';
import { GetServerSideProps } from "next";
import UserProfile from "../../components/UserProfile";
import { useState } from 'react';

function Dashboard(props: any) {
    let [profilePopUpState, setProfilePopUpState] = useState(false);
    return (
        <div className="container">
            <div className="text-center mt-3">
                <h3>Available Employers</h3>
                <p>Here is the list of our registered employers</p>
                <div className="bg-dark w-100 py-1 px-5 text-end text-white rounded-3">
                    <a>Open Filter Settings &#x2193;</a>
                </div>
                <div className="d-flex flex-wrap">
                    <JobList jobs={props.data} callback={()=>{setProfilePopUpState(true);}}/>
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
    whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
    authPageURL: '/login',
    LoaderComponent: LoadingScreen
})(Dashboard);