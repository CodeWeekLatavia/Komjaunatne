import firebase from "firebase";
import AuthAlertMsg from "../auth/AuthAlertMsg";
import AuthContinueBtn from "../auth/AuthContinueBtn";
import AuthEmailInput from "../auth/AuthEmailInput";
import AuthFormCard from "../auth/AuthFormCard";
import AuthPasswordInput from "../auth/AuthPasswordInput";

const companyAlertMsgId = "company-form-error-msg";
const companyEmailInputId = "company-email-input";
const companyPasswordInputId = "company-password-input";
const companyContinueBtnId = "company-form-submit";

///company name
// your full name
// e-mail
// password
export default function CompanySignUpForm() {
    return (

        <AuthFormCard title="Company Sign Up" onSubmit={registerCompanyUser}>
            <AuthAlertMsg msgId={companyAlertMsgId} />
            <div>
                <AuthEmailInput inputId={companyEmailInputId} className="mb-3" />
                <AuthPasswordInput inputId={companyPasswordInputId} className="mb-3" />
            </div>
            <AuthContinueBtn btnId={companyContinueBtnId} />
        </AuthFormCard>
    )
}

function registerCompanyUser(event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;

    const emailInput = formElement.querySelector('#' + companyEmailInputId) as HTMLInputElement;
    const emailValue = emailInput.value;

    const passwordInput = formElement.querySelector('#' + companyPasswordInputId) as HTMLInputElement;
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
    const submitBtn = document.querySelector('#' + companyContinueBtnId) as HTMLButtonElement;
    submitBtn.disabled = true;
    submitBtn.classList.add('button-disabled')
}

function enableSubmitBtn() {
    const submitBtn = document.querySelector('#' + companyContinueBtnId) as HTMLButtonElement;
    submitBtn.disabled = false;
    submitBtn.classList.remove('button-disabled')
}

function displayError(errorMessage) {
    const errorDiv = document.querySelector('#' + companyAlertMsgId) as HTMLDivElement;
    errorDiv.style.display = 'block';
    errorDiv.style.maxHeight = errorDiv.scrollHeight + "px";
    errorDiv.innerHTML = errorMessage;
}