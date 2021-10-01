import AuthHeroUniversal from "../components/AuthHeroUniversal";

import { AuthAction, withAuthUser } from "next-firebase-auth";
import LoadingScreen from "../components/LoadingScreen";

function Login() {
    return (
        <div className="container my-5">
            <AuthHeroUniversal />
        </div>
    );
}

export default withAuthUser({
    whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
    whenAuthed: AuthAction.REDIRECT_TO_APP,
    appPageURL: '/redirect',
    LoaderComponent: LoadingScreen
})(Login);