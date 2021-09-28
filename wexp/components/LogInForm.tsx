import AuthEmailInput from "./AuthEmailInput";
import AuthEnterBtn from "./AuthEnterBtn";
import AuthFormCard from "./AuthFormCard";
import AuthPasswordInput from "./AuthPasswordInput";


const loginEmailInputId = "login-email-input";
const loginPasswordInputId = "login-password-input";

export default function LogInForm(props) {
    return (
        <AuthFormCard title="Log In">
            <form action="">
                <AuthEmailInput inputId={loginEmailInputId} className="mb-3" />
                <AuthPasswordInput inputId={loginPasswordInputId} className="mb-3" />
                <AuthEnterBtn context={props.context}/>
            </form>
        </AuthFormCard>
    )
}