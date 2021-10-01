
export default function AuthAgeInput(props: {inputId:string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                Your Age
            </label>
            <input
                type="number"
                className="form-control"
                id={props.inputId}
            />
        </div>
    )
}