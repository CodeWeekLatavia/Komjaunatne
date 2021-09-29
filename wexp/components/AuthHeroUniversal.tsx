import LogInForm from "./LogInForm";
import YouthSignUpForm from "./youth/YouthSignUpForm";
import CompanySignUpForm from './company/CompanySignUpForm';
import SignUpForm from "./SignUpForm";

export default function AuthHeroUniversal() {
    return (
        <div className="d-inline-flex w-100 flex-column flex-lg-row gap-lg-4 justify-content-center">
            <LogInForm context="other"/>
            <SignUpForm />
        </div>
    );
}