import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="w-full px-4 lg:px-30 py-4 lg:py-5 border-t border-neutral-700 flex flex-col sm:flex-row items-center justify-between bg-black text-white">

      <p className="text-sm text-neutral-400 mb-2 sm:mb-0">
        © {new Date().getFullYear()} Made by HMZ
      </p>

      <div className="flex gap-4">
        <a href="https://github.com/hmzakt" target="_blank" rel="noopener noreferrer">
          <Image
            src="/svgs/gh.svg"
            alt="GitHub"
            width={40}
            height={40}
            className="w-10 h-10 hover:opacity-80 transition"
          />

        </a>
        <a href="https://www.linkedin.com/in/hmzakt/" target="_blank" rel="noopener noreferrer">
          <Image width={40}
            height={40} src="/svgs/linkedin.svg" alt="LinkedIn" className="w-10 h-10 hover:opacity-80 transition" />
        </a>
        <a href="mailto:hmzakt11@gmail.com">
          <Image width={40}
            height={40} src="/svgs/gmail.svg" alt="Email" className="w-10 h-10 hover:opacity-80 transition" />
        </a>
      </div>
    </footer>


  )
}

export default Footer
