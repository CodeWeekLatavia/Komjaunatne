export default function RegIndustrySelect(props: { inputId: string, className?}) {
    return (
        <div className={props.className}>
            <label htmlFor={props.inputId} className="form-label">
                Industry
            </label>
            <select
                className="form-control"
                id={props.inputId}
                defaultValue={'DEFAULT'}
            >
                <option value="DEFAULT">...</option>
                <option>Aerospace Industry</option>
                <option>Transport Industry</option>
                <option>Computer Industry</option>
                <option>Telecommunication industry</option>
                <option>Agriculture industry</option>
                <option>Construction Industry</option>
                <option>Education Industry</option>
                <option>Pharmaceutical Industry</option>
                <option>Food Industry</option>
                <option>Health care Industry</option>
                <option>Hospitality Industry</option>
                <option>Entertainment Industry</option>
                <option>News Media Industry</option>
                <option>Energy Industry</option>
                <option>Manufacturing Industry</option>
                <option>Music Industry</option>
                <option>Mining Industry</option>
                <option>Worldwide web</option>
                <option>Electronics Industry</option>
            </select>
        </div>
    )
}