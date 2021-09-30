import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Logo.module.css'

export default function NavLogo() {
    return (
        <Link href="/">
            <a>
                <div style={{ padding: "2px" }}>
                    <div className="d-block d-md-none">
                        <div className={styles.cropped}>
                            <div className={styles.croppedImg}>
                                <img src="/logo.svg" alt="Company Logo" width="230px" height="40px" />
                            </div>
                        </div>
                    </div>
                    <div className="d-md-block d-none">
                        <Image
                            src="/logo.svg"
                            alt="Company Logo"
                            width={230}
                            height={40}
                        />
                    </div>
                </div>
            </a>
        </Link>
    );
}