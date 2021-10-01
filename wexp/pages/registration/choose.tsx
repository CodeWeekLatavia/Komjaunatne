import AuthFormCard from "../../components/auth/AuthFormCard";
import Link from 'next/link';
import firebase from "firebase";
import { NextRouter, withRouter } from 'next/router'

function Choose(props: {router: NextRouter}) {
    return (
        <div className="d-inline-flex w-100 justify-content-center">
            <div className="col-lg-8 col-11 py-5 my-5">
                <AuthFormCard title="Pick Your Side">
                    <div className="d-flex flex-column h-100 justify-content-center text-center">
                        <YouthBtn router={props.router}/>
                        <span className="my-3" />
                        <CompanyBtn router={props.router}/>
                    </div>
                </AuthFormCard>
            </div>
        </div>
    )
}

const navButtonClasses = "rounded p-2 px-4 border m-1 fw-normal h4 mx-3 text-decoration-none";
let YouthBtn = (props: {router: NextRouter}) => (<a onClick={()=>registerAsYouth(props.router)} className={`${navButtonClasses} light-button`}>Youth</a>);
let CompanyBtn = (props: {router: NextRouter}) => (<a onClick={()=>registerAsCompany(props.router)} className={`${navButtonClasses} dark-button`}>Company</a>);

function registerAsYouth(router){
    console.log('register as youth');
    const uid = firebase.auth().currentUser.uid;
    firebase.firestore().collection('users').doc(uid)
    .set({
        userType: 'youth',
        completedRegistration: false
    }).then(()=>{
        router.push('/redirect');
    })
}

function registerAsCompany(router){
    console.log('register as company');
    const uid = firebase.auth().currentUser.uid;
    firebase.firestore().collection('users').doc(uid)
    .set({
        userType: 'company',
        completedRegistration: false
    }).then(()=>{
        router.push('/redirect');
    })
}

export default withRouter(Choose);