import LoadingScreen from "../components/LoadingScreen";
import { withAuthUserTokenSSR, withAuthUser, AuthAction, getFirebaseAdmin } from 'next-firebase-auth';

function Redirect() {
    return (
        <LoadingScreen />
    );
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {

    // In "Choose" on can pick whether they are youth or company
    let redirectChoose = {
        redirect: {
            destination: '/registration/choose',
            permanent: false,
        }
    }

    // Full registration form for youth individuals
    let redirectYouthRegistration = {
        redirect: {
            destination: '/registration/youth',
            permanent: false,
        }
    }

    // Full registration form for companies
    let redirectCompanyRegistration = {
        redirect: {
            destination: '/registration/company',
            permanent: false,
        }
    }

    let redirectYouthDashboard = {
        redirect: {
            destination: '/youth/dashboard',
            permanent: false,
        }
    }

    let redirectCompanyDashboard = {
        redirect: {
            destination: '/company/dashboard',
            permanent: false,
        }
    }

    const db = getFirebaseAdmin().firestore();
    const doc = await db.collection('users').doc(AuthUser.id).get();
    if(!doc.exists) return redirectChoose;
    const data = doc.data();
    if(data.completedRegistration===true){
        if(data.userType==='youth') return redirectYouthDashboard;
        if(data.userType==='company') return redirectCompanyDashboard;
        else return redirectChoose;
    }
    if(data.userType==='youth') return redirectYouthRegistration;
    else if(data.userType==='company') return redirectCompanyRegistration;
    else return redirectChoose;
})

export default withAuthUser()(Redirect);