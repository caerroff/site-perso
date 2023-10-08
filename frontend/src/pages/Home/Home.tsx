import { useState, useEffect } from 'react'

type ResponseAPI = {
    message: string;

}

const emptyResponseAPI: ResponseAPI = {
    message: ''
}

function Home() {
    const [response, setResponse] = useState(emptyResponseAPI)

    const callApi = (): void => {
        fetch('http://localhost:3000').then((response) => {
            response.json().then((data: ResponseAPI) => {
                setResponse(data)
            })
        }).catch(() => {
            const errorMessage = {
                message: 'API Down...'
            }
            setResponse(errorMessage)
        })


    }

    useEffect(() => {
        callApi()
    }, [])

    return (
        <>
            <div className='bg-indigo-200 m-5 rounded-3xl px-10 py-2 text-center h-fit pt-3'>
                <h1 className="text-3xl font-mono">Développeur Freelance</h1>
                <p className="italic text-gray-700 underline">{response.message ? response.message : ''}</p>
                <div className="flex text-left border border-black rounded-2xl h-full mt-5">
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