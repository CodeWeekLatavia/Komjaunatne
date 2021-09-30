import Image from 'next/image'
import LoaderGif from '../public/loader.gif';

export default function LoadingScreen() {
    return (
        <div className="align-items-center d-inline-flex justify-content-center pb-5 position-fixed vh-100 vw-100">
            <div className="animate__animated animate__fadeIn">
                <Image src={LoaderGif} />
            </div>
        </div>
    )
}