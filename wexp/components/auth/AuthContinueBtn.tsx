export default function AuthContinueBtn(props: {btnId:string, className?}) {
    return (
        <button
            type="submit"
            className={`rounded my-3 py-2 px-4 border fw-normal h5 text-decoration-none w-100 green-button`}
            id={props.btnId}
        >
            Continue
        </button>
    );
}