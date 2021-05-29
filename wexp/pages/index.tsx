import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className="container">
      <div className="d-flex">
        <div className="m-5 p-5">
          <h1>Do You Want To Find A Job or An Employee?</h1>
          <p className="m-3">WExp is here to help the inspired <b>youth</b> start working at jobs where they <b>blossom.</b></p>
          <button className="rounded py-2 px-5 bg-dark border-dark text-white">Get Started</button>
        </div>
        <Image src="/handshake.svg" width="512px" height="512px"></Image>
      </div>
    </div>
    <div className={"bg-dark w-100 my-5 "+styles.invertedRadiusTop}>
      <div className="container d-flex justify-content-center">
        
        <h1 className="text-white">Our features</h1>
      </div>
    </div>
    </>
  )
}
