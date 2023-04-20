import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <Content />
        <Footer />
      </div>
    </main>
  )
}

function Header() {
  return <>
    <div className="container mx-auto px-4 py-4 flex flex-wrap">
      <div className="flex-grow"><h1>Lewis Wholesale Co</h1></div>
      <div className="flex-1">
        <div className="float-right">
          <h1 className="inline px-4">About</h1>
          <h1 className="inline px-4">Contact</h1>
        </div>
      </div>
    </div>
  </>
}

function Content() {
  return <>
    <div className="container mx-auto">
      <About />
      <Contact />
    </div>
  </>
}

function Footer() {
  return <>
    <div className="bg-black rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4">
        <p className="text-center">Design by Preston Hill</p>
      </div>
    </div>
  </>
}

function About() {
  return <>
    <div>
      <p>Lewis Wholesale is a premiere Distributor of various different brands. Our model is partnered focused. Whether you are a supplier or an end buyer, trust Lewis Wholesale to make the purchasing process as seamless as possible. </p>
      <p>We operate Globally. Lewis Wholesale Co is composed of skilled product specialists with decades of combined experience. We understand supply chain logistics and we understand supply and demand. We are your go-to for anything distribution.</p>
    </div>
  </>
}

function Contact() {
  return <></>
}