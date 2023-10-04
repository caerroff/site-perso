function Error() {
    return (
        <>
            <div className="bg-gray-300 m-12 p-12 rounded-3xl text-center h-50 flex items-center flex-col">
                <h1 className="text-3xl italic">Pas si vite...</h1>
                <p>La page que vous cherchez n'existe pas encore... Pas de panique, si vous la cherchez, c'est qu'elle devrait arriver bientôt ;)</p>
                <img className="h-50" src="/404.webp" alt="Logo 404" />
            </div>
        </>
    )
}

export default Error