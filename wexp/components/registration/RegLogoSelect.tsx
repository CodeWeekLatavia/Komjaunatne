export default function RegLogoSelect(props: {inputId:string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                Company Logo
            </label>
            <input
                type="file"
                className="form-control"
                id={props.inputId}
            />
        </div>
    )
}