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
        }).catch((reason) => {
            console.log(reason)
        })


    }

    useEffect(() => {
        callApi()
    }, [])

    return (
        <>
            <div className='flex flex-col bg-indigo-300 m-5 rounded-3xl px-10 py-2 text-center'>
                <h1 className="text-3xl">Développeur Freelance</h1>
                <p className="italic text-gray-700 underline">{response.message ? response.message : ''}</p>
            </div>
        </>
    )
}

export default Home