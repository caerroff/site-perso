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
            <div className='bg-indigo-200 m-5 rounded-3xl px-10 py-2 text-center mt-40 h-[60vh] pt-3'>
                <h1 className="text-3xl font-mono pt-8">Développeur Freelance</h1>
                {loading ? (
                    <Loader />
                ) : (
                    <p className="italic text-gray-700 underline">{response.message}</p>
                )}
                <div className="flex text-left border border-black rounded-2xl h-fit mt-5">
                    <div className="w-1/3 border-r border-black p-5 bg-blue-50 rounded-l-2xl">
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
                    <div className="w-2/3 border-l border-black p-5">
                        <h1 className="underline text-2xl font-semibold">Right part</h1>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home