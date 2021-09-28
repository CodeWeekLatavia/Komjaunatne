export default function AuthEnterBtn(props: {context: 'youth'|'company', btnId: string}){
    let enterBtnColor = props.context === 'youth' ? 'light-button' : 'dark-button';
    return(
        <button
            id={props.btnId}
            type="submit"
            className={`rounded my-3 py-2 px-4 border fw-normal h5 text-decoration-none w-100 ${enterBtnColor}`}
        >
            <a className="">Enter</a>
        </button>

    );
}