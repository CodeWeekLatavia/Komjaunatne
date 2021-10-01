export default function RegCompanyDescription(props: {inputId:string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                Short Company Description
            </label>
            <input
                className="form-control"
                id={props.inputId}
            />
        </div>
    )
}