import Image from 'next/image';
import GoogleLogo from '../../public/google_logo.png';
import firebase from 'firebase';

export default function AuthGoogleBtn() {
    return (

        <div className={`rounded my-3 py-2 px-4 border fw-normal h5 text-decoration-none w-100 white-button`}
            onClick={signInWithGoogle}
        >
            <div className="d-flex justify-content-between">
                <div className="position-relative px-3 py-3">
                    <Image src={GoogleLogo} alt="Google Logo" layout="fill" objectFit="contain" />
                </div>
                <span className="align-self-center text-center">Sign In With Google</span>
                <div className="position-relative px-3 py-3"></div>
            </div>
        </div>
    );
}

function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential as firebase.auth.OAuthCredential;

            var token = credential.accessToken;

            var user = result.user;

            console.log(user);
        }).catch((error) => {

            var errorCode = error.code;
            var errorMessage = error.message;

            var email = error.email;

            var credential = error.credential;

        });
}