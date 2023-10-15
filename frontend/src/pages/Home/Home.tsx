import { useState, useEffect } from 'react'
import { Loader } from '../../components/Loader/index.tsx'
import { Link } from 'react-router-dom'

type Response = {
    message: string
}

function Home() {
    const [response, setResponse] = useState<Response>({ message: '' })
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        async function fetchApi() {
            try {
                const response = await fetch('http://172.232.37.37:3000')
                const data = await response.json()
                setResponse(data)
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchApi()


        const arrowDownPage = document.getElementById('arrowDownPage')
        arrowDownPage?.addEventListener('click', () => {
            arrowDownPage?.scrollIntoView({
                behavior: 'smooth',
            })
            arrowDownPage?.classList.add('invisible')
        })
        document.addEventListener('scroll', () => {
            if (window.scrollY < 200) {
                arrowDownPage?.classList.remove('invisible')
            } else {
                arrowDownPage?.classList.add('invisible')
            }
        })
    }, [])

    return (
        <>
            <div id='container' className='xl:text-xl bg-blue-950 bg-gradient-to-b via-indigo-950 from-purple-950 text-white m-3 md:m-5 rounded-3xl md:px-10 space-y-2 h-fit'>
                <div className='h-screen pt-64 md:pt-96'>
                    <div className='grid md:grid-cols-3 content-center items-center justify-items-center h-64 space-y-8 md:space-y-0 md:space-x-8'>
                        <div id='title' className='text-center font-semibold md:col-span-2'>
                            <p className='title-font text-6xl md:text-8xl'>Développeur Fullstack Freelance</p>
                            {loading ? (
                                <div className='mx-auto w-full'>
                                    <Loader />
                                </div>
                            ) : (
                                <p className="font-sans shadow-none text-gray-300 text-lg">{response.message ? response.message : 'API Indisponible...'}</p>
                            )}
                        </div>
                        <img className='rounded-full h-44 md:h-72' src='/assets/photo-profil.png'></img>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 font-sans mx-2">
                    <div className="bg-gray-200 bg-gradient-to-tl md:col-span-2 from-gray-400 rounded-3xl text-center text-black p-2">
                        <p className='text-xl pt-3'><span className='text-6xl'>👋🏻</span> <br />Bonjour, je m'appelle Thomas Masin et je suis développeur FullStack en freelance</p>
                        <p className='w-full pt-5'>👨🏻‍🎓 Étudiant en informatique à l'IUT de Blagnac (31), je suis passionné par la programmation et l'informatique depuis mes 12 ans.
                            J'ai commencé par apprendre le Python, le C++ et le Java, avant de me tourner vers le développement web, en React et en Symfony.
                            Depuis ma deuxième année de BUT (2022-2023), je suis alternant à la Gendarmerie Nationale. Plus d'informations sont disponibles sur la <Link to="/projects" className='underline text-green-600'>page projets</Link>.
                        </p>
                    </div>
                    <div className='grid bg-gray-200 bg-gradient-to-tl from-gray-400 rounded-3xl p-2 text-black items-center'>
                        <img src='/assets/gendarmerie.jpg' className="rounded-3xl" />
                    </div>
                </div>

                <div className="text-left mb-3 md:mb-10 md:mt-2 h-fit md:h-fit flex flex-col xs:flex-col md:py-32 sm:grid sm:grid-cols-2 md:flex md:flex-row">
                    <div className="w-full md:w-1/4 p-5">
                        <h1 className="text-xl font-semibold">Ma Stack</h1>
                        <h2>☀️ Front-End:</h2>
                        <ul className="list-disc pl-10">
                            <li>React.js</li>
                            <li>Twig</li>
                            <li>TailwindCSS</li>
                        </ul>
                        <h2>⌨️ Back-End:</h2>
                        <ul className="list-disc pl-10">
                            <li>PHP/Symfony</li>
                            <li>MariaDB / PostgreSQL / MySQL</li>
                        </ul>
                        <h2>🛜 Serveur:</h2>
                        <ul className="list-disc pl-10">
                            <li>Debian 12</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                    <div className='w-4/5 mx-auto md:w-1/4 pt-5'>
                        <h1 className='text-xl text-center font-semibold mb-3'>Mes projets en bref</h1>
                        <div id='projectBox' className='grid grid-cols-1 gap-3 overflow-scroll md:mt-3'>
                            <div className='text-center border border-blue-400 rounded-3xl space-y-2 p-2'>
                                <h2>Développement d'une application nationale</h2>
                                <h3 className='text-gray-300 text-sm'>Gendarmerie Nationale</h3>
                                <p className='text-xs'>Sol@ris, Application servant à répertorier les matériels informatiques et radios de la Gendarmerie, de la Police et du Ministère de l'Intérieur</p>
                            </div>
                            <div className='text-center border border-blue-400 rounded-3xl space-y-2 p-2'>
                                <h2>Développement d'une application nationale</h2>
                                <h3 className='text-gray-300 text-sm'>Gendarmerie Nationale</h3>
                                <p className='text-xs'>Sol@ris, Application servant à répertorier les matériels informatiques et radios de la Gendarmerie, de la Police et du Ministère de l'Intérieur</p>
                            </div>
                            <div className='text-center border border-red-400 rounded-3xl space-y-2 p-2'>
                                <h2>Développement d'une application nationale</h2>
                                <h3 className='text-gray-300 text-sm'>Personnel</h3>
                                <p className='text-xs'>Sol@ris, Application servant à répertorier les matériels informatiques et radios de la Gendarmerie, de la Police et du Ministère de l'Intérieur</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-full sm:col-span-2 md:w-1/2 md:col-span-1 grid md:ml-5 grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full gap-1 sm:mt-12 md:mt-0 my-5 md:my-0">
                        <img src='/assets/react.svg' alt="react logo" className="h-14 md:h-24 mx-auto col-span-2 xl:col-span-2" />
                        <img src='/assets/symfony.png' alt="symfony logo" className="h-14 md:h-24 pt-0 mx-auto col-span-2 sm:col-span-2 xl:col-span-2" />
                        <div className='h-fit inline-block align-middle col-span-4 xs:col-span-1 w-fit mx-auto xl:col-span-4'>
                            <img src='/assets/htmlcss.png' alt="html logo" className='h-12 md:h-14 mr-1 mx-auto' />
                            <img src='/assets/js.png' alt="js logo" className='h-10 md:h-12 mt-2 mx-auto' />
                        </div>
                        <img src='/assets/docker.webp' alt="docker logo" className="h-16 md:h-24 mx-auto col-span-2 sm:col-span-1 xl:col-span-2" />
                        <img src='/assets/mariadb.png' alt="mariadb logo" className="h-16 md:h-24 mx-auto col-span-2 sm:col-span-1 xl:col-span-2" />
                        <img src='/assets/tux.png' alt="linux logo" className="h-12 md:h-24 mx-auto col-span-4 sm:col-span-1 xl:col-span-4" />
                    </div>
                </div>
            </div >
            <i id='arrowDownPage' className='absolute hover:animate-bounce hover:cursor-pointer hover:opacity-100 active:animate-ping bottom-4 left-48 md:left-1/2 fa fa-arrow-down text-3xl text-black bg-gray-300 opacity-60 p-2 px-3 rounded-full'></i>
        </>
    )
}

export default Home