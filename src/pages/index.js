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
  return <div className="max-w-screen-lg shadow-2xl rounded-lg mx-auto py-12 mt-4" id="about">
    <div className="px-10">
      <p>Our typical customer varies since we are bottom line driven. If the profit margins make sense, we will distribute it. Our typical customers are those interested in the following: Health and household, beauty and personal care, grocery, pet supplies, home and office, baby supplies.</p>
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