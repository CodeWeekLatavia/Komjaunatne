
import { AuthAction, withAuthUser } from "next-firebase-auth";
import LoadingScreen from "../../components/LoadingScreen";
import { GetServerSideProps } from "next";
import YouthList from "../../components/YouthList";
import { UserDetails } from '../../models/youth-list';

function Dashboard(props: any){
    return (
        <div className="container">
            <div className="text-center mt-3">
                <h3>Available Employers</h3>
                <p>Here is the list of our registered employers</p>
                <div className="bg-dark w-100 py-1 px-5 text-end text-white rounded-3">
                    <a>Open Filter Settings &#x2193;</a>
                </div>
                <div className="d-flex flex-wrap">
                    <YouthList users={props.data} />
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
    whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
    authPageURL: '/login',
    LoaderComponent: LoadingScreen
  })(Dashboard);