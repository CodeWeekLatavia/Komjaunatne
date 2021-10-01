export default function UserProfile(props: {setProfileState}){
    console.log('hello');
    let closeProfile = function (e) {
        if (e.target !== e.currentTarget)
        return;
        props.setProfileState(false);
    }
    return (
        <div className={"vh-100 vw-100"} onClick={closeProfile} style={{ zIndex: 4, backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div className="container d-flex h-50 my-5">
            <div className="card w-100">
            <div className="card-body">
            <h1 className="card-title">Full Description or something</h1>
                <div className="d-flex flex-column justify-content-center py-2 py-md-2 align-items-center
                                justify-content-evenly h-100">
                                    
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}