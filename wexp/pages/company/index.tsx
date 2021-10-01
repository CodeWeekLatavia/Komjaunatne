import { GetServerSideProps } from "next";
import AuthHero from "../../components/AuthHero";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import LoadingScreen from "../../components/LoadingScreen";
import YouthList from "../../components/YouthList";

import { UserDetails } from '../../models/youth-list';

function Company(props: any) {
  return (
      <div className="container ">
        <div className="mb-5">
          <h2 className="text-center py-4">For Companies - Start Your Journey Here</h2>
          <AuthHero context='company' />
        </div>
        <div className="text-center mt-5 pt-5">
          <h3>Available Employees</h3>
          <p>Here is the preview list of our registered employees</p>
          <div className="bg-dark w-100 py-1 px-5 text-end text-white rounded-3">
            <a>Open Filter Settings &#x2193;</a>
          </div>
          <div className="d-flex flex-wrap">
            <YouthList users={props.data}/>
          </div>
        </div>
      </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data: UserDetails[] = [
    {
      fullName: "Anita Alksne",
      imageURL: "/youth-images/anita.png",
      shortDescription: "I like sports.",
    },
    {
      fullName: "Laura Kastaņa",
      imageURL: "/youth-images/Laura.png",
      shortDescription: "I am good at cooking.",
    },
    {
      fullName: "Levijs Vītols",
      imageURL: "/youth-images/Lewis.png",
      shortDescription: "I Love animals.",
    },
    {
      fullName: "Maija Pīlādze",
      imageURL: "/youth-images/Maya.png",
      shortDescription: "Playing basketball every day, all day.",
    },
    {
      fullName: "Peteris Bumbieris",
      imageURL: "/youth-images/Peteris.png",
      shortDescription: "Searching for a job.",
    },
    {
      fullName: "Rems Ozols",
      imageURL: "/youth-images/Rem.png",
      shortDescription: "I don't really know how to write.",
    },
  ];
  return { props: { data } };
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  appPageURL: '/redirect',
  LoaderComponent: LoadingScreen
})(Company);