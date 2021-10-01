import Link from "next/link";
export default function AuthLoginBtn(props: { context: 'youth' | 'company' | 'other', btnId }) {
    let enterBtnColor = props.context === 'other' ? 'green-button'
        : props.context === 'youth' ? 'light-button' : 'dark-button';
    return (
        <Link href="/login">
            <button
                type="button"
                id={props.btnId}
                className={`rounded my-3 py-2 px-4 border fw-normal h5 text-decoration-none w-100 ${enterBtnColor}`}
            >
                <a className="">Log In</a>
            </button>
        </Link>

    );
}