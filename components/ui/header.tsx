import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Logo from '@/public/images/logo.jpg'
import icom from '@/public/images/icon/icon.jpeg'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute w-full bg-black z-30 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block flex gap-2" aria-label="Cruip">
              {/* <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg> */}
              <Image src={Logo} width={80} height={80} alt='logo' /><span className='object-cover text-red-500 mt-5 font-bold text-[20px]'>Stato-Sphere</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap   items-center">
              <li>
                <Link
                  href="/"
                  className="btn  border border-red-500 font-medium text-red-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Acceuil
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="font-medium text-red-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Annonces
                </Link>
              </li>
              <li>
                <Link
                  href="/stats"
                  className="font-medium text-red-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Statistiques
                </Link>
               
              </li>
               <li>
                <Link
                  href="/concours"
                  className="font-medium text-red-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Concours
                </Link>
              </li>
                <li>
                <Link
                  href="/biblio"
                  className="font-medium text-red-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Bibliotheques
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-red-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-red-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <Image src={icom} width={40} height={40} alt='logo' />
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
