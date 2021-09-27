type LogInFormProps = {
    context: 'youth' | 'company';
}

export default function LogInForm(props: LogInFormProps) {
    let enterBtnColor = props.context === 'youth' ? 'light-button' : 'dark-button';
    return (
        <>
            <div className="card shadow-sm flex-grow-1">
                <h5 className="card-title text-center mt-3">Log In</h5>
                <div className="card-body">
                    <form action="" className="m-auto">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                E-mail
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Password
                            </label>
                            <input type="password" className="form-control"/>
                        </div>
                        <button
                            type="submit"
                            className={`rounded my-3 py-2 px-4 border fw-normal h5 text-decoration-none w-100 ${enterBtnColor}`}
                        >
                            <a className="">Enter</a>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}