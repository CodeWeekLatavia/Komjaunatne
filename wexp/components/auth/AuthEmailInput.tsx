
export default function AuthEmailInput(props: {inputId:string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                E-mail
            </label>
            <input
                type="email"
                className="form-control"
                id={props.inputId}
            />
        </div>
    )
}