import Image from 'next/image'
import LoaderGif from '../public/loader.gif';

export default function LoadingScreen(){
    return (
        <div className="align-items-center d-inline-flex justify-content-center pb-5 position-fixed vh-100 vw-100">
            <Image src={LoaderGif}/>
        </div>
    )
}