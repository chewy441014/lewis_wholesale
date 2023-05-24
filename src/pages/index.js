import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <Content />
        <Footer />
      </div>
    </main>
  )
}

function Header() {
  return <nav>
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img className="hidden h-8 w-auto lg:block md:block sm:block outline-dotted outline-2 outline-offset-2 rounded" src="/logo1.png" alt="Lewis Wholesale"></img>
          </div>
          <div className="flex space-x-8">
            <a href="" className="px-3 py-2 font-medium">Lewis Wholesale</a>
            <div className="items-center py-2">
              <a href="#about" className="text-sm font-medium px-2" aria-current="page">About</a>
              <a href="#contact" className="text-sm font-medium px-2">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

function Content() {
  return <>
    <div className="container mx-auto">
      <Intro />
      <About />
      <Contact />
    </div>
  </>
}

function Footer() {
  return <>
      <div className="mx-auto max-w-screen-xl p-4 content-center flex flex-col mt-4">
        <img className="rounded-lg max-w-sm shadow-2xl" src="logo-lewis-wholesale-big.png"/>
        <p className="text-center m-2">Design by Preston Hill</p>
      </div>
  </>
}

function Intro() {
  return <div className="max-w-screen-lg mx-auto bg-office-back bg-cover bg-center h-screen rounded-lg px-32 shadow-2xl">
    {/* <img src="/back1.jpg" className="rounded-lg blur-sm" /> */}
    <div className="px-16 h-full backdrop-blur-sm backdrop-saturate-[0.60] backdrop-brightness-125">
      
    </div>
  </div>
}

function About() {
  return <div className="max-w-screen-lg mx-auto " id="about">
    <div className="px-10 py-5 mt-4">
      {Blurb("We distribute what our customers need most.", "/delivery-truck-icon.png", "justify-end")}
      {Blurb("We work across a diverse range of industries. These include health and household, beauty and personal care, grocery, pet supplies, and home and office.", "/personal-care-products-icon.png", "justify-start")}
    </div>
  </div>
}

function Blurb(text, image, justify) {
  justify = "flex my-10 " + justify
  return <div className={justify}>
    <div className="flex max-w-lg items-center bg-gradient-to-r from-[#2b50aa]/40 from-60% to-[#2b50aa] rounded-lg shadow-2xl">
      <p className="p-3 pr-5 m-2">{text}</p>
      <img className="p-3 pr-5 m-2 object-scale-down h-36 w-36" src={image} />
    </div>
  </div>
}

function Contact() {
  return <div className="max-w-screen-lg shadow-2xl rounded-lg mx-auto text-center py-12 mt-4" id="contact">
    <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
      Become a Partner
    </h2>
    <div className="mt-8 flex justify-center">
      <div className="inline-flex rounded-md bg-white w-2/3 justify-center">
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-full">
              <input className="border-2 rounded w-full py-2 px-4 leading-tight" id="inline-full-name" type="text" placeholder="Full Name" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-full">
              <input className="border-2 rounded w-full py-2 px-4 leading-tight" id="inline-company-name" type="text" placeholder="Company Name" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-full">
              <input className="border-2 rounded w-full py-2 px-4 leading-tight" id="inline-phone" type="text" placeholder="Phone Number" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-full">
              <input className="border-2 rounded w-full pt-2 pb-20 px-4 leading-tight align-top" id="inline-message" type="text" placeholder="Message" />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-full">
              <button className="shadow font-bold py-2 px-4 rounded" type="button">
                Send it!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
}