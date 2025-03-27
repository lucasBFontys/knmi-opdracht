"use client"

import Link from "next/link"
import { ThemeToggle } from "../theme/toggle.jsx"
import { useState } from "react"
const Logo = "/logo.svg"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-[rgb(var(--color-offwit))] dark:bg-[rgb(18_24_38)] z-50 transition-colors duration-200">
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <img src={Logo || "/placeholder.svg?height=36&width=36"} className="mr-3 h-6 sm:h-9" alt="KNMI Logo" />
          </Link>

          <div className="flex items-center lg:order-2">
            <a className="w-10 h-10 flex items-center justify-center text-[rgb(var(--color-blauw))] dark:text-[rgb(226_232_240)] border-2 border-[rgb(229_231_235)] dark:border-[rgb(55_65_81)] rounded-full mr-6 overflow-hidden transition-colors">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png"
                alt="taal"
                className="w-full h-full object-cover"
              />
            </a>

            <a
              href="#"
              className="text-white bg-[rgb(var(--color-groen))] hover:bg-[rgb(var(--color-groendark))] dark:bg-[rgb(3_161_132)] dark:hover:bg-[rgb(1_122_99)] font-body font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-3 transition-colors"
            >
              Download app
            </a>

            <ThemeToggle />

            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${mobileMenuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${mobileMenuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${mobileMenuOpen ? "block" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 font-body`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/over"
                  className="block py-2 pr-4 pl-3 text-[rgb(var(--color-blauw))] dark:text-[rgb(226_232_240)] border-b hover:underline lg:hover:bg-transparent lg:border-0 lg:p-0 transition-colors"
                  aria-current="page"
                >
                  Over
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block py-2 pr-4 pl-3 text-[rgb(var(--color-blauw))] dark:text-[rgb(226_232_240)] border-b hover:underline lg:hover:bg-transparent lg:border-0 lg:p-0 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pr-4 pl-3 text-[rgb(var(--color-blauw))] dark:text-[rgb(226_232_240)] border-b hover:underline lg:hover:bg-transparent lg:border-0 lg:p-0 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/Nieuws"
                  className="block py-2 pr-4 pl-3 text-[rgb(var(--color-blauw))] dark:text-[rgb(226_232_240)] border-b hover:underline lg:hover:bg-transparent lg:border-0 lg:p-0 transition-colors"
                >
                  Nieuws & Updates
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

