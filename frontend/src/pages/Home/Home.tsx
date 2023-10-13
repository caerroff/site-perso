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
                <div className="text-left p-5 mt-10 h-96 bg-gray-800 rounded-3xl bg-gradient-to-br via-gray-800 from-purple-500">
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
                <div className="mt-26 mb-48 p-5 text-right">
                    <h1 className="underline text-2xl font-semibold">Right part</h1>
                </div>
            </div>
        </>
    )
}

export default Home