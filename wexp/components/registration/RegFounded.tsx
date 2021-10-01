export default function RegFoundedInput(props: {inputId:string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                Foundation year
            </label>
            <input
                type="number"
                className="form-control"
                id={props.inputId}
            />
        </div>
    )
}