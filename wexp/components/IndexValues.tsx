import Image from "next/image";

export default function IndexValues() {
    return (
        <div style={{filter:"invert(1)"}}className="d-flex justify-content-center align-items-center flex-column py-4 text-white text-center bg-black">
            <h1 className="mt-4">Our Values</h1>
            <div className="row d-md-flex d-none w-100 my-4">
                <div className="col-md">
                    <GuaranteeImage />
                </div>
                <div className="col-md">
                    <SpeedImage />
                </div>
                <div className="col-md">
                    <SimplicityImage />
                </div>
            </div>
            <div className="row w-100 my-4">
                <div className="col-md my-3 my-md-0">
                    <GuaranteeText/>
                </div>
                <div className="col-md my-3 my-md-0">
                    <SpeedText/>
                </div>
                <div className="col-md my-3 my-md-0">
                    <SimplicityText/>
                </div>

            </div>
        </div>
    )
}

const GuaranteeImage = () => <Image src="/guarantee.svg" width="149px" height="152px"></Image>
const GuaranteeText = () =>
(<>
    <h4>Guarantee</h4>
    <p>
        14 day feedback guarantee.
    </p>
</>);
const SpeedImage = () => <Image src="/speed.svg" width="238px" height="152px"></Image>
const SpeedText = () =>
(<>
    <h4>Speed</h4>
    <p>
       Takes less than 90s to start exploring.
    </p>
</>);
const SimplicityImage = () => <Image src="/simple.svg" width="200px" height="171px"></Image>
const SimplicityText = () =>
(<>
    <h4>Simpliticty</h4>
    <p>
        Easy to navigate.
    </p>
</>);