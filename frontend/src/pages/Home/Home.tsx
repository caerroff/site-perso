import { useState, useEffect } from 'react'
import { Loader } from '../../components/Loader/index.tsx'


function Home() {
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        async function fetchApi() {
            try {
                const response = await fetch('http://localhost:3000')
                const data = await response.json()
                console.log(data)
                setResponse(data)
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchApi()
    }, [])

    return (
        <>
            <div className='bg-gray-800 text-white m-5 rounded-3xl px-10 py-2 text-center h-fit pt-3'>
                <h1 className="text-3xl font-mono pt-8">Développeur Freelance</h1>
                {loading ? (
                    <Loader />
                ) : (
                    <p className="italic text-gray-300 underline">{response.message}</p>
                )}
                <div className="text-left mt-10 sm:h-auto md:h-96 flex flex-col xs:flex-col sm:flex-col md:flex-row">
                    <div className=" sm:w-full md:w-1/2 p-5 rounded-3xl bg-gray-800 bg-gradient-to-b via-gray-800 from-purple-500">
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
                    <div className="sm:w-1/2 grid md:ml-5 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit gap-5 sm:mt-12 self-center justify-center items-center">
                        <img src='/assets/react.svg' alt="react logo" className="h-24 mx-auto xl:col-span-2" />
                        <img src='/assets/symfony.png' alt="symfony logo" className="h-24 pt-0 mx-auto xl:col-span-2" />
                        <div className='h-fit inline-block align-middle w-fit mx-auto xl:col-span-4'>
                            <img src='/assets/htmlcss.png' alt="html logo" className='h-14 mr-1 mx-auto' />
                            <img src='/assets/js.png' alt="js logo" className='h-12 mt-2 mx-auto' />
                        </div>
                        <img src='/assets/docker.webp' alt="docker logo" className="h-24 mx-auto xl:col-span-2" />
                        <img src='/assets/mariadb.png' alt="mariadb logo" className="h-24 mx-auto col-span-2" />
                    </div>
                </div>
                <div className="mt-26 mb-48 p-5 text-right">
                    <h1 className="underline text-2xl font-semibold">Right part</h1>
                </div>
            </div>
        </>
    )
}

export default Home