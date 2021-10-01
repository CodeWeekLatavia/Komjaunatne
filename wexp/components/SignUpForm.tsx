import AuthFormCard from "./auth/AuthFormCard";
import Link from 'next/link';

const youthSectionPath = '/youth';
const companySectionPath = '/company';

export default function SignUpForm(){
    return (
        <AuthFormCard title="Or Sign Up">
            <div className="d-flex flex-column h-100 justify-content-center text-center">
                <YouthBtn/>
                <span className="my-3"/>
                <CompanyBtn/>
            </div>
        </AuthFormCard>
    );
}


const navButtonClasses = "rounded p-2 px-4 border m-1 fw-normal h4 mx-3 text-decoration-none";
let YouthBtn = () => (<Link href={youthSectionPath}><a className={`${navButtonClasses} light-button`}>For Youth</a></Link>);
let CompanyBtn = () => (<Link href={companySectionPath}><a className={`${navButtonClasses} dark-button`}>For Companies</a></Link>);