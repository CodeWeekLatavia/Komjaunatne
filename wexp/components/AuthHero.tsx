import LogInForm from "./LogInForm";
import YouthSignUpForm from "./youth/YouthSignUpForm";
import CompanySignUpForm from './company/CompanySignUpForm';

type AuthHeroProps = {
    context: 'youth' | 'company';
}

export default function AuthHero(props: AuthHeroProps) {
    return (
        <div className="d-inline-flex w-100 justify-content-center">
            <div className="col-lg-6 col-12">
            {props.context==='youth'?<YouthSignUpForm context={props.context}/>:<CompanySignUpForm context={props.context}/>}
            </div>
        </div>
    );
}