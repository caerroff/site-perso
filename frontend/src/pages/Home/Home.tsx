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
                const response = await fetch('http://localhost:3000')
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
        const arrowDown = document.getElementById('arrow-down')
        const projectBox = document.getElementById('projectBox')
        arrowDown?.addEventListener('click', () => {
            projectBox?.scroll({
                top: projectBox.scrollHeight,
                left: 0,
                behavior: 'smooth'
            })
        })
    }, [])

    return (
        <>
            <div className='xl:text-xl bg-blue-950 bg-gradient-to-br via-indigo-950 from-indigo-800 text-white m-3 md:m-5 rounded-3xl px-3 md:px-10 py-2 text-center h-fit pt-3'>
                <p className=" text-5xl font-mono pt-8 title-font mb-2">Développeur Freelance</p>
                {loading ? (
                    <div className='mx-auto w-full'>
                        <Loader />
                    </div>
                ) : (
                    <p className="italic text-gray-300 underline">{response.message ? response.message : 'API Indisponible...'}</p>
                )}
                <p className='text-xl pt-3'>👋🏻 Bonjour, je m'appelle Thomas Masin et je suis développeur FullStack en freelance</p>
                <p className='w-full md:w-3/4 md:mx-auto pt-5'>👨🏻‍🎓 Étudiant en informatique à l'IUT de Blagnac (31), je suis passionné par la programmation et l'informatique depuis mes 12 ans.
                    J'ai commencé par apprendre le Python, le C++ et le Java, avant de me tourner vers le développement web, en React et en Symfony.
                    Depuis ma deuxième année de BUT (2022-2023), je suis alternant à la Gendarmerie Nationale. Plus d'informations sont disponibles sur la <Link to="/projects" className='underline text-green-600'>page projets</Link>.
                </p>
                <div className="text-left mb-3 md:mb-10 md:mt-2 sm:h-fit md:h-fit flex flex-col xs:flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row h-fit">
                    <div className="w-full md:w-1/4 p-5">
                        <h1 className="text-xl font-semibold">Ma Stack</h1>
                        <h2>☀️ Front-End:</h2>
                        <ul className="list-disc pl-10">
                            <li>React.js</li>
                            <li>Twig</li>
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
                    <div className='w-full md:w-1/4 pt-5'>
                        <h1 className='text-xl text-center font-semibold mb-3'>Mes projets en bref</h1>
                        <div id='projectBox' className='grid grid-cols-1 gap-3 overflow-scroll sm:h-64 md:mt-3'>
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
                            <span id='arrow-down' className='invisible sm:visible sticky inset-0 bottom-1 text-center px-3 opacity-80 hover:opacity-100 hover:cursor-pointer bg-gray-300 m-auto rounded-full'><i className='fa fa-fw fa-arrow-down text-black'></i></span>
                        </div>
                    </div>
                    <div className="sm:w-full sm:col-span-2 md:w-1/2 md:col-span-1 grid md:ml-5 grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit gap-2 sm:mt-12 md:mt-0">
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
            </div>
        </>
    )
}

export default Home