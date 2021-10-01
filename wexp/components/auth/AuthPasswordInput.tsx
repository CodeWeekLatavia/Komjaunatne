export default function AuthPasswordInput(props: {inputId:string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                Password
            </label>
            <input
                type="password"
                className="form-control"
                id={props.inputId}
            />
        </div>
    )
}