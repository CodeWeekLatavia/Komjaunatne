import Image from 'next/image';

export default function NavMenuIcon(){
    return (
        <Image
            src="/bars-solid.svg"
            alt="Menu Icon"
            width={35}
            height={35}
        />
    )
}