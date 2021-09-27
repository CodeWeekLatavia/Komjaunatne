import firebase from "firebase";
import styles from "../../styles/Alert.module.css";

export default function YouthSignUpForm() {
    const registerYouthUser = event => {
        event.preventDefault();
        const formElement = event.target as HTMLFormElement;

        const emailInput = formElement.querySelector('#youth-email-input') as HTMLInputElement;
        const emailValue = emailInput.value;

        const passwordInput = formElement.querySelector('#youth-password-input') as HTMLInputElement;
        const passwordValue = passwordInput.value;

        const submitBtn = formElement.querySelector('#youth-form-submit') as HTMLButtonElement;

        const disableSubmitBtn = function () {
            submitBtn.disabled = true;
            submitBtn.classList.add('green-button-disabled')
        }
        const enableSubmitBtn = function () {
            submitBtn.disabled = false;
            submitBtn.classList.remove('green-button-disabled')
        }

        disableSubmitBtn();

        const errorDiv = formElement.querySelector('#youth-form-error-msg') as HTMLDivElement;

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
    return (
        <>
            <div className="card shadow-sm flex-grow-1">
                <h5 className="card-title text-center mt-3">Sign Up</h5>
                <div className="card-body">
                    <form onSubmit={registerYouthUser} className="m-auto">
                        <div style={{ display: 'none', textAlign: 'center' }} id="youth-form-error-msg" className={`alert alert-danger ${styles.content}`} role="alert">
                            This is a info alert—check it out!
                        </div>
                        <div className="mb-3">
                            <label htmlFor="youth-email-input" className="form-label">
                                E-mail
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="youth-email-input"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="youth-password-input" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="youth-password-input"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`rounded my-3 py-2 px-4 border fw-normal h5 text-decoration-none w-100 green-button`}
                            id="youth-form-submit"
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}