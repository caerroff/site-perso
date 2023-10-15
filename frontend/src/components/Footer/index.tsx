function Footer() {

    return (
        <>
            <footer className="relative inset-x-0 bg-white rounded-lg shadow dark:bg-gray-900 text-white">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center mb-4 sm:mb-0 space-x-4">
                            <div className='flex'>
                                <img src="http://www.placehold.it/600x400" className="h-8 mr-3" alt="Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Caerroff</span>
                            </div>
                            <div className="flex space-x-1">
                                <a href='mailto:caerroff.dev@gmail.com' title='Mail'><i className='fa fa-envelope p-2 text-2xl bg-gray-700 rounded-full'></i></a>
                                <a href='https://www.linkedin.com/in/thomas-masin-014137222/' target='_blank' title='Linkedin'><i className='fa fa-linkedin p-2 text-2xl bg-gray-700 rounded-full'></i></a>
                                <i className='fa fa-m p-2 text-2xl bg-gray-700 rounded-full'></i>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Caerroff. Tous droits réservés.</span>
                </div>
            </footer>
        </>

    )

}

export default Footer;