import LogInForm from "./LogInForm";
import YouthSignUpForm from "./youth/YouthSignUpForm";
import CompanySignUpForm from './company/CompanySignUpForm';

type CompanyAuthHeroProps = {
    context: 'youth' | 'company';
}

export default function CompanyAuthHero(props: CompanyAuthHeroProps) {
    return (
        <div className="d-inline-flex w-100 flex-column flex-lg-row gap-lg-4 justify-content-center">
            {props.context==='youth'?<YouthSignUpForm />:<CompanySignUpForm/>}
            <LogInForm context={props.context}/>
        </div>
    );
}