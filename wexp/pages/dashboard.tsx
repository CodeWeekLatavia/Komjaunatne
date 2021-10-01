
import { AuthAction, withAuthUser } from "next-firebase-auth";
import LoadingScreen from "../components/LoadingScreen";
function Dashboard(){
    return (
        <div className="container">
            <h1 className="text-center my-5">Dashboard or Something idk</h1>
        </div>
    );
}

export default withAuthUser({
    whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
    authPageURL: '/login',
    LoaderComponent: LoadingScreen
  })(Dashboard);