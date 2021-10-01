export default function RegTermsConditions(props: {inputId:string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                Agree to T&C:
            </label>
            <span className="px-3"/>
            <input
                type="checkbox"
                className="form-check-input"
                id={props.inputId}
            />
        </div>
    )
}