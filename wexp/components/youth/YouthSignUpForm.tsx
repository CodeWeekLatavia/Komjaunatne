import firebase from "firebase";
import AuthAlertMsg from "../auth/AuthAlertMsg";
import AuthContinueBtn from "../auth/AuthContinueBtn";
import AuthEmailInput from "../auth/AuthEmailInput";
import AuthFormCard from "../auth/AuthFormCard";
import AuthPasswordInput from "../auth/AuthPasswordInput";

const youthAlertMsgId = "youth-form-error-msg";
const youthEmailInputId = "youth-email-input";
const youthPasswordInputId = "youth-password-input";
const youthContinueBtnId = "youth-form-submit";

export default function YouthSignUpForm() {
    return (
        <AuthFormCard title="Youth Sign Up" onSubmit={registerYouthUser}>
            <AuthAlertMsg msgId={youthAlertMsgId} />
            <div>
                <AuthEmailInput inputId={youthEmailInputId} className="mb-3" />
                <AuthPasswordInput inputId={youthPasswordInputId} className="mb-3" />
            </div>
            <AuthContinueBtn btnId={youthContinueBtnId} />
        </AuthFormCard>
    )
}

function registerYouthUser(event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;

    const emailInput = formElement.querySelector('#' + youthEmailInputId) as HTMLInputElement;
    const emailValue = emailInput.value;

    const passwordInput = formElement.querySelector('#' + youthPasswordInputId) as HTMLInputElement;
    const passwordValue = passwordInput.value;

    disableSubmitBtn();

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
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
    const submitBtn = document.querySelector('#' + youthContinueBtnId) as HTMLButtonElement;
    submitBtn.disabled = true;
    submitBtn.classList.add('button-disabled')
}

function enableSubmitBtn() {
    const submitBtn = document.querySelector('#' + youthContinueBtnId) as HTMLButtonElement;
    submitBtn.disabled = false;
    submitBtn.classList.remove('button-disabled')
}

function displayError(errorMessage) {
    const errorDiv = document.querySelector('#' + youthAlertMsgId) as HTMLDivElement;
    errorDiv.style.display = 'block';
    errorDiv.style.maxHeight = errorDiv.scrollHeight + "px";
    errorDiv.innerHTML = errorMessage;
}