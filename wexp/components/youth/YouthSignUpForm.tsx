import firebase from "firebase";
import AuthAlertMsg from "../AuthAlertMsg";
import AuthContinueBtn from "../AuthContinueBtn";
import AuthEmailInput from "../AuthEmailInput";
import AuthFormCard from "../AuthFormCard";
import AuthPasswordInput from "../AuthPasswordInput";

const youthAlertMsgId = "youth-form-error-msg";
const youthEmailInputId = "youth-email-input";
const youthPasswordInputId = "youth-password-input";
const youthContinueBtnId = "youth-form-submit";

export default function YouthSignUpForm() {
    return (
        <AuthFormCard title="Youth Sign Up">
            <form onSubmit={registerYouthUser}>
                <AuthAlertMsg msgId={youthAlertMsgId}/>
                <AuthEmailInput inputId={youthEmailInputId} className="mb-3"/>
                <AuthPasswordInput inputId={youthPasswordInputId} className="mb-3"/>
                <AuthContinueBtn btnId={youthContinueBtnId}/>
            </form>
        </AuthFormCard>
    )
}

function registerYouthUser(event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;

    const emailInput = formElement.querySelector('#'+youthEmailInputId) as HTMLInputElement;
    const emailValue = emailInput.value;

    const passwordInput = formElement.querySelector('#'+youthPasswordInputId) as HTMLInputElement;
    const passwordValue = passwordInput.value;

    const submitBtn = formElement.querySelector('#'+youthContinueBtnId) as HTMLButtonElement;

    const disableSubmitBtn = function () {
        submitBtn.disabled = true;
        submitBtn.classList.add('green-button-disabled')
    }
    const enableSubmitBtn = function () {
        submitBtn.disabled = false;
        submitBtn.classList.remove('green-button-disabled')
    }

    disableSubmitBtn();

    const errorDiv = formElement.querySelector('#'+youthAlertMsgId) as HTMLDivElement;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then((userCredential) => {
            enableSubmitBtn();
            // Signed in 
            console.log(userCredential);
            var user = userCredential.user;
            console.log(JSON.stringify(user));
            const url = '/api/login';
            user.getIdToken().then(idToken => {
                fetch(url, {
                    method: 'post',
                    headers: new Headers({
                        'Authorization': idToken
                    })
                }).then(res => { console.log(res) })
            })
        })
        .catch((error) => {
            var errorMessage = error.message;
            if (errorMessage) {
                enableSubmitBtn();
                errorDiv.style.display = 'block';
                errorDiv.style.maxHeight = errorDiv.scrollHeight + "px";
                errorDiv.innerHTML = errorMessage;
            }
            console.log(error);
        });
}