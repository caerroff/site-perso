import { Link } from 'react-router-dom'

function showHideMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenu) {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden')
        } else {
            mobileMenu.classList.add('hidden')
        }
    }
}

function Header() {

    return (
        <nav className="sticky inset-0 h-fit sm:relative bg-indigo-500 via-indigo-700 bg-gradient-to-r from-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" onClick={() => showHideMobileMenu()} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <Link to='/' className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src="https://placehold.co/600x400" alt="Your Company" />
                        </Link>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to="/" className="text-gray-200 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Accueil</Link>
                                <Link to="/blog" className="text-gray-200 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
                                <Link to="/projects" className="text-gray-200 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projets</Link>
                                <Link to="/calendar" className="text-gray-200 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendrier</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>

                        <div className="relative ml-3">
                            <div>
                                <button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <img className="h-8 w-8 rounded-full" src="https://placehold.co/600x400" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden" id="mobile-menu">
                <Link to="/" onClick={() => { showHideMobileMenu() }} className="text-gray-200  block rounded-md px-3 py-2 text-base font-medium">Accueil</Link>
                <Link to="/blog" onClick={() => { showHideMobileMenu() }} className="text-gray-200  block rounded-md px-3 py-2 text-base font-medium">Blog</Link>
                <Link to="/projects" onClick={() => { showHideMobileMenu() }} className="text-gray-200  block rounded-md px-3 py-2 text-base font-medium">Projets</Link>
                <Link to="/calendar" onClick={() => { showHideMobileMenu() }} className="text-gray-200  block rounded-md px-3 py-2 text-base font-medium">Calendrier</Link>
            </div>
        </nav >

    )
}

export default Header