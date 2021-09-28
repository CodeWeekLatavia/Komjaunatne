import Link from "next/link";
import Image from "next/image";

export default function NavLogo() {
    return (
        <Link href="/">
            <a>
            <div style={{ padding: "2px" }}>
                <Image
                    src="/logo.svg"
                    alt="Company Logo"
                    width={230}
                    height={40}
                />
            </div>
            </a>
        </Link>
    );
}