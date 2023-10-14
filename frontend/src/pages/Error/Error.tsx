import { Loader } from '../../components/Loader/index.tsx'

function Error() {
    return (
        <>
            <div className="bg-gray-300 m-5 p-5 md:m-12 md:p-12 rounded-3xl text-center h-50 flex items-center flex-col">
                <h1 className="text-3xl italic">Pas si vite...</h1>
                <p>La page que vous cherchez n'existe pas encore... Pas de panique, si vous la cherchez, c'est qu'elle devrait arriver bientôt ;)</p>
                <Loader />
                <p className='text-9xl py-40'>:/</p>
            </div>
        </>
    )
}

export default Error