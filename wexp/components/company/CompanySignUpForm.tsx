import firebase from "firebase";
import AuthAlertMsg from "../auth/AuthAlertMsg";
import AuthContinueBtn from "../auth/AuthContinueBtn";
import AuthEmailInput from "../auth/AuthEmailInput";
import AuthFormCard from "../auth/AuthFormCard";
import AuthPasswordInput from "../auth/AuthPasswordInput";
import AuthLoginBtn from "../auth/AuthLoginBtn";
import AuthCompanyNameInput from "../auth/AuthCompanyNameInput";
import AuthFullName from "../auth/AuthFullName";

import { CompanyUserData } from "../../models/company-firestore";

const companyAlertMsgId = "company-form-error-msg";
const companyNameInputId = "company-name-input";
const companyEmailInputId = "company-email-input";
const companyPasswordInputId = "company-password-input";
const companyLoginBtnId = "company-login";
const companyFullNameInputId = "company-full-name-input";
const companyContinueBtnId = "company-form-submit";

///company name
// your full name
// e-mail
// password
export default function CompanySignUpForm(props: {context: 'youth'|'company'}) {
    return (

        <AuthFormCard title="Company Sign Up" onSubmit={registerCompanyUser}>
            <AuthAlertMsg msgId={companyAlertMsgId} />
            <AuthCompanyNameInput inputId={companyNameInputId} className="mb-3" />
            <AuthFullName inputId={companyFullNameInputId} className="mb-3" />
            <div>
                <AuthEmailInput inputId={companyEmailInputId} className="mb-3" />
                <AuthPasswordInput inputId={companyPasswordInputId} className="mb-3" />
            </div>
            <AuthContinueBtn btnId={companyContinueBtnId} />
            <div className="strikethrough fs-5">OR</div>
            <AuthLoginBtn context={props.context} btnId={companyLoginBtnId} />
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

    const fullNameInput = formElement.querySelector('#' + companyFullNameInputId) as HTMLInputElement;
    const fullNameValue = fullNameInput.value;

    const companyNameInput = formElement.querySelector('#'+companyNameInputId) as HTMLInputElement;
    const companyNameValue = companyNameInput.value;

    const data: CompanyUserData = {
        userType: 'company',
        fullName: fullNameValue,
        companyName: companyNameValue,
        completedRegistration: false
    };

    disableSubmitBtn();

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then((userCredential) => {
            firebase
                .firestore()
                .collection('users')
                .doc(`${userCredential.user.uid}`)
                .set(data)

            var user = userCredential.user;
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