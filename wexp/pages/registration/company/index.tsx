import AuthFormCard from "../../../components/auth/AuthFormCard"
import { useState } from 'react';
import ProgressBar from "../../../components/ProgressBar";
import { withAuthUserTokenSSR, withAuthUser, AuthAction, getFirebaseAdmin } from 'next-firebase-auth';
import AuthFullName from "../../../components/auth/AuthFullName";
import AuthCompanyNameInput from "../../../components/auth/AuthCompanyNameInput";
import RegCityInput from "../../../components/registration/RegCityInput";
import RegLogoSelect from "../../../components/registration/RegLogoSelect";
import RegCountryInput from "../../../components/registration/RegCountryInput";
import RegIndustrySelect from "../../../components/registration/RegIndustrySelect";
import RegSizeSelect from "../../../components/registration/RegSizeSelect";
import RegWebsiteInput from "../../../components/registration/RegWebsiteInput";
import RegCompanyDescription from "../../../components/registration/RegCompanyDescription";
import RegTermsConditions from "../../../components/registration/RegTermsConditions";
import AuthContinueBtn from "../../../components/auth/AuthContinueBtn";
import RegFoundedInput from "../../../components/registration/RegFounded";

import { withRouter, NextRouter } from "next/router";

import firebase from 'firebase';

const companyNameInputId = "company-name-input";
const companyFullNameInputId = "company-full-name-input";
const companyLogoSelectId = "company-logo-select";
const companyCountrySelectId = "company-country-input";
const companyCityInputId = "company-city-input";
const companyIndustrySelectId = "company-industry-select";
const companySizeSelectId = "company-size-select";
const companyWebsiteInputId = "company-website-input";
const companyCompanyDescriptionInputId = "company-description-input";
const companyTermsConditionsInputId = "company-terms-conditions-input";
const companyContinueBtnId = "company-registration-continue";
const companyFoundedInputId = "company-founded-input";

function CompanyRegistration(props: {router: NextRouter}) {
    const regStateCount = 4;
    let [regState, setRegState] = useState(1);
    let regStatePercentage = (regState / regStateCount) * 100 + "%";

    return (
        <div className="d-inline-flex w-100 justify-content-center">
            <div className="col-lg-8 col-11 py-5 my-5">
                <AuthFormCard title="Complete Company Registration">

                    <div className="row">
                        <AuthFullName inputId={companyFullNameInputId} className="mb-3 col-md-6" />
                        <AuthCompanyNameInput inputId={companyNameInputId} className="mb-3 col-md-6" />
                        <RegLogoSelect inputId={companyLogoSelectId} className="mb-3 col-md-6" />
                        <RegIndustrySelect inputId={companyIndustrySelectId} className="mb-3 col-md-6" />
                        <RegSizeSelect inputId={companySizeSelectId} className="mb-3 col-md-6" />
                        <RegFoundedInput inputId={companyFoundedInputId} className="mb-3 col-md-6" />
                        <RegCompanyDescription inputId={companyCompanyDescriptionInputId} className="mb-3" />
                        <ContinueBtn router={props.router}/>
                    </div>
                    {true ? null : <>
                    <div className="row">
                        <RegCountryInput inputId={companyCountrySelectId} className="mb-3 col-md-6" />
                        <RegCityInput inputId={companyCityInputId} className="mb-3 col-md-6" />
                    </div>
                    <div className="row">
                        <RegWebsiteInput inputId={companyWebsiteInputId} className="mb-3 col-md-6" />
                    </div>
                    <div className="row">
                        <RegTermsConditions inputId={companyTermsConditionsInputId} className="mb-3 col-md-6" />
                    </div>
                    <div className="my-5">
                        <ProgressBar done={regStatePercentage} />
                    </div>
                        </>}
                </AuthFormCard>
            </div>
        </div>
    )
}

const ContinueBtn = (props:{router: NextRouter}) => {
    return (
        <button
            type="button"
            className={`rounded my-3 py-2 px-4 border fw-normal h5 text-decoration-none w-100 green-button`}
            id={companyContinueBtnId}
            onClick={()=>goToDashboard(props.router)}
        >
            Continue
        </button>
    );
}

function goToDashboard(router){
    const uid = firebase.auth().currentUser.uid;
    firebase.firestore().collection('users').doc(uid)
    .update({
        completedRegistration: true
    }).then(()=>{
        router.push('/company/dashboard')
    })
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
    const redirectRedirect = {
        redirect: {
            destination: '/redirect',
            permanent: false,
        }
    }
    const db = getFirebaseAdmin().firestore();
    const doc = await db.collection('users').doc(AuthUser.id).get();
    if (!doc.exists) return redirectRedirect;
    const data = doc.data();
    console.log(data);
})

export default withAuthUser()(withRouter(CompanyRegistration));

const navButtonClasses = "rounded p-2 px-4 border m-1 fw-normal h4 mx-3 text-decoration-none";
let YouthBtn = () => (<a className={`${navButtonClasses} light-button`}>Youth</a>);
let CompanyBtn = () => (<a className={`${navButtonClasses} dark-button`}>Company</a>);
