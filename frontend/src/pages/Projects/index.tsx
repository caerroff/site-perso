function Projects() {

    return (
        <>
            <div className='min-h-screen bg-blue-400 bg-gradient-to-t from-gray-600 m-5 p-5 rounded-[20px] space-y-10'>
                <h1 className='text-center font-serif text-7xl'>Mes projets</h1>

                <div className="grid grid-cols-1 gap-2 md:gap-0 md:flex md:space-x-2">
                    <div className='md:w-2/3 bg-white p-3 rounded-[20px] space-y-2'>
                        <h2 className="text-2xl">Développement d'un Progiciel National</h2>
                        <p><span className='italic'>Sol@ris</span> est un projet national, développé par la Gendarmerie, permettant un suivi des matériels informatiques et radios de la Gendarmerie, de la Police et du Ministère de l'Intérieur</p>
                        <p>En plus de gérer les stocks, l'application possède un suivi des demandes d'intervention, les suivis de réparation ainsi que la génération de documents.</p>
                        <p>J'ai pu développer plusieurs fonctionnalités au sein de la communauté de développeurs Sol@ris, utilisant notamment des connaissances en Symfony, Webpack, Javascript et en conception.</p>
                    </div>
                    <div className='md:w-1/3 bg-gray-500 rounded-[20px] p-3'>
                        <a href='/assets/solaris.png'><img id='solaris' src='/assets/solaris.png' alt="Image de l'Accueil de Sol@ris" /></a>
                    </div>
                </div>

                <div className="flex space-x-2">
                    <div className='w-1/3 bg-gray-500 rounded-[20px] p-3'>
                        <p>Photo ici</p>
                    </div>
                    <div className='w-2/3 bg-white p-3 rounded-[20px]'>
                        <h2 className="text-2xl">Création d'un jeu vidéo en 2D</h2>
                        <p>Shonen Fighter, jeu vidéo de combat, inspiré des univers Shonen, écrit exclusivement en C++ avec la librairie SFML. Développé à deux, en <span className="italic">coding dojo</span> à l'aide d'un git public.</p>

                    </div>
                </div>
                <div className="flex space-x-2">
                    <div className='w-2/3 bg-white p-3 rounded-[20px]'>
                        <h2 className="text-2xl">Création d'un jeu vidéo en 2D</h2>
                        <p>Shonen Fighter, jeu vidéo de combat, inspiré des univers Shonen, écrit exclusivement en C++ avec la librairie SFML. Développé à deux, en <span className="italic">coding dojo</span> à l'aide d'un git public.</p>

                    </div>
                    <div className='w-1/3 bg-gray-500 rounded-[20px] p-3'>
                        <p>Photo ici</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <div className='w-1/3 bg-gray-500 rounded-[20px] p-3'>
                        <p>Photo ici</p>
                    </div>
                    <div className='w-2/3 bg-white p-3 rounded-[20px]'>
                        <h2 className="text-2xl">Création d'un jeu vidéo en 2D</h2>
                        <p>Shonen Fighter, jeu vidéo de combat, inspiré des univers Shonen, écrit exclusivement en C++ avec la librairie SFML. Développé à deux, en <span className="italic">coding dojo</span> à l'aide d'un git public.</p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects