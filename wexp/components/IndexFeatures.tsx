export default function IndexFeatures() {
    return (
        <div className="m-5 py-5">
            <h1 className="text-start py-4">How WExp platform works?</h1>
            <div className="card my-4">
                <div className="card-body row">
                    <div className="border-3 border-dark border-end col text-end">
                        <h1 style={{ fontSize: "50px" }} className="card-title m-4">1.</h1>
                        <h3 className="m-3">Register</h3>
                    </div>
                    <div className="col px-5">
                        <p className="align-items-center card-text d-flex h-100 text-start">
                            Create a profile. Fill out some information. Potentially upload your CV and profile image.
                            And start exploring.
                        </p>
                    </div>
                </div>
            </div>
            <div className="card my-4">
                <div className="card-body row">
                    <div className="border-3 border-dark border-end col text-end">
                        <h1 style={{ fontSize: "50px" }} className="card-title m-4">2.</h1>
                        <h3 className="m-3">Reach Out</h3>
                    </div>
                    <div className="col px-5">
                        <p className="align-items-center card-text d-flex h-100 text-start">
                            Both sides can reach out to each other requesting. After getting notified, the other side responds with times they are available to meet.
                        </p>
                    </div>
                </div>
            </div>
            <div className="card my-4">
                <div className="card-body row">
                    <div className="border-3 border-dark border-end col text-end">
                        <h1 style={{ fontSize: "50px" }} className="card-title m-4">3.</h1>
                        <h3 className="m-3">Get hired</h3>
                    </div>
                    <div className="col px-5">
                        <p className="align-items-center card-text d-flex h-100 text-start">
                            Apply to job offers and land your next gig. Communicate with recruiters via the app.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}