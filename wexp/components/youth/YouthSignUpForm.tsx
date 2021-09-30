import firebase from "firebase";
import AuthAlertMsg from "../auth/AuthAlertMsg";
import AuthContinueBtn from "../auth/AuthContinueBtn";
import AuthEmailInput from "../auth/AuthEmailInput";
import AuthFormCard from "../auth/AuthFormCard";
import AuthPasswordInput from "../auth/AuthPasswordInput";
import AuthFullName from '../auth/AuthFullName';
import AuthAgeInput from "../auth/AuthAgeInput";
import AuthLoginBtn from '../auth/AuthLoginBtn';

import Link from 'next/link';

const youthAlertMsgId = "youth-form-error-msg";
const youthEmailInputId = "youth-email-input";
const youthPasswordInputId = "youth-password-input";
const youthFullNameInputId = "youth-full-name-input";
const youthAgeInputId = "youth-age-input";
const youthLoginBtnId = "youth-login";
const youthContinueBtnId = "youth-form-submit";

export default function YouthSignUpForm(props: { context: 'youth' | 'company' }) {
    return (
        <AuthFormCard title="Youth Sign Up" onSubmit={registerYouthUser}>
            <AuthAlertMsg msgId={youthAlertMsgId} />
            <div>
                <AuthFullName inputId={youthFullNameInputId} className="mb-3" />
                <AuthEmailInput inputId={youthEmailInputId} className="mb-3" />
                <AuthPasswordInput inputId={youthPasswordInputId} className="mb-3" />
                <AuthAgeInput inputId={youthAgeInputId} className="mb-3" />
            </div>
            <AuthContinueBtn btnId={youthContinueBtnId} />
            <div className="strikethrough fs-5">OR</div>
            <AuthLoginBtn context={props.context} btnId={youthLoginBtnId} />
        </AuthFormCard>
    )
}

interface YouthRegistrationData {
    userType: 'youth' | 'company',
    email: string,
    fullName: string,
    age: number
}

function registerYouthUser(event) {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;

    const emailInput = formElement.querySelector('#' + youthEmailInputId) as HTMLInputElement;
    const emailValue = emailInput.value;

    const passwordInput = formElement.querySelector('#' + youthPasswordInputId) as HTMLInputElement;
    const passwordValue = passwordInput.value;

    const fullNameInput = formElement.querySelector('#' + youthFullNameInputId) as HTMLInputElement;
    const fullNameValue = fullNameInput.value;

    const ageInput = formElement.querySelector('#' + youthAgeInputId) as HTMLInputElement;
    const ageValue = +ageInput.value;

    const data: YouthRegistrationData = {
        userType: 'youth',
        email: emailValue,
        fullName: fullNameValue,
        age: ageValue
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