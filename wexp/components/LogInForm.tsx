import firebase from "firebase";
import AuthAlertMsg from "./auth/AuthAlertMsg";
import AuthEmailInput from "./auth/AuthEmailInput";
import AuthEnterBtn from "./auth/AuthEnterBtn";
import AuthFormCard from "./auth/AuthFormCard";
import AuthGoogleBtn from "./auth/AuthGoogleBtn";
import AuthPasswordInput from "./auth/AuthPasswordInput";

const loginAlertMsgId = "login-form-error-msg";
const loginEmailInputId = "login-email-input";
const loginPasswordInputId = "login-password-input";
const loginContinueBtnId = "login-form-submit";

export default function LogInForm(props) {
    return (
        <AuthFormCard title="Log In" onSubmit={logInUser}>
            <AuthAlertMsg msgId={loginAlertMsgId} />
            <div>
                <AuthEmailInput inputId={loginEmailInputId} className="mb-3" />
                <AuthPasswordInput inputId={loginPasswordInputId} className="mb-3" />
            </div>
            <div>
                <AuthEnterBtn btnId={loginContinueBtnId} context={props.context} />
                <AuthGoogleBtn />
            </div>
        </AuthFormCard>
    )
}

function logInUser(event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;

    const emailInput = formElement.querySelector('#' + loginEmailInputId) as HTMLInputElement;
    const emailValue = emailInput.value;

    const passwordInput = formElement.querySelector('#' + loginPasswordInputId) as HTMLInputElement;
    const passwordValue = passwordInput.value;

    disableSubmitBtn();

    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            const url = '/api/login';
            user.getIdToken().then(idToken => {
                fetch(url, {
                    method: 'post',
                    headers: new Headers({
                        'Authorization': idToken
                    })
                })
            })
        })
        .catch((error) => {
            var errorMessage = error.message;
            if (errorMessage) displayError(errorMessage);
        })
        .finally(() => {
            enableSubmitBtn();
        });
}

function disableSubmitBtn() {
    const submitBtn = document.querySelector('#' + loginContinueBtnId) as HTMLButtonElement;
    submitBtn.disabled = true;
    submitBtn.classList.add('button-disabled')
}

function enableSubmitBtn() {
    const submitBtn = document.querySelector('#' + loginContinueBtnId) as HTMLButtonElement;
    submitBtn.disabled = false;
    submitBtn.classList.remove('button-disabled')
}

function displayError(errorMessage) {
    const errorDiv = document.querySelector('#' + loginAlertMsgId) as HTMLDivElement;
    errorDiv.style.display = 'block';
    errorDiv.style.maxHeight = errorDiv.scrollHeight + "px";
    errorDiv.innerHTML = errorMessage;
}