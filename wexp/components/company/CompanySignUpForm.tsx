export default function CompanySignUpForm() {
    return (
        <>
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title text-center py-2">Sign Up</h5>
                    <p className="card-text">If an account with the provided email exists, you will be logged in.</p>
                    <form action="" className="m-auto">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck"
                            />
                            <label htmlFor="exampleCheck1" className="form-check-label">
                                I agree to the{" "}
                                <i>
                                    <a>terms and conditions</a>
                                </i>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className={`rounded py-2 px-4 border fw-normal h5 text-decoration-none w-100 dark-button`}
                        >
                            <a className="">Enter</a>
                        </button>
                    </form>
                </div>
            </div>
            <h3 className="text-center py-3"></h3>


        </>
    )
}