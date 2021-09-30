
export default function AuthFullName(props: {inputId:string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                Your Full Name
            </label>
            <input
                className="form-control"
                id={props.inputId}
            />
        </div>
    )
}