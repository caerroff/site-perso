function Projects() {

    return (
        <>
            <div className="grid justify-center">
                <div className='min-h-screen max-w-[2000px] bg-blue-900 bg-gradient-to-t from-gray-900 m-5 p-5 rounded-[20px] space-y-10'>
                    <h1 className='text-center font-serif text-5xl md:text-7xl text-white'>Mes projets</h1>

                    <div className="grid grid-cols-1 gap-2 md:gap-0 lg:flex lg:space-x-2">
                        <div className='lg:w-1/3 bg-slate-800 rounded-[20px] p-1'>
                            <a href='/assets/solaris.png'><img className='rounded-2xl' id='solaris' src='/assets/solaris.png' alt="Image de l'Accueil de Sol@ris" /></a>
                        </div>
                        <div className='lg:w-2/3 bg-white p-3 rounded-[20px] space-y-2'>
                            <h2 className="text-2xl">Développement d'un Progiciel National</h2>
                            <p><span className='italic'>Sol@ris</span> est un projet national, développé par la Gendarmerie, permettant un suivi des matériels informatiques et radios de la Gendarmerie, de la Police et du Ministère de l'Intérieur</p>
                            <p>En plus de gérer les stocks, l'application possède un suivi des demandes d'intervention, les suivis de réparation ainsi que la génération de documents.</p>
                            <p>J'ai pu développer plusieurs fonctionnalités au sein de la communauté de développeurs Sol@ris, utilisant notamment des connaissances en Symfony, Webpack, Javascript et en conception.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2 md:gap-0 lg:flex lg:space-x-2">
                        <div className='lg:w-2/3 bg-white p-3 rounded-[20px] space-y-2'>
                            <h2 className="text-2xl">Développement d'applications à destination de la Région de Gendarmerie d'Occitanie</h2>
                            <p><span className='italic'>aGENDa, Socle, Rocclab</span> sont des projets régionaux, développés par la Gendarmerie, servant à répondre à plusieurs problématiques de la Gendarmerie.</p>
                            <p>aGENDa, par exemple, gère les calendriers des personnels de la Gendarmerie, offrant un système de calendrier collaboratif, de partage de fichiers, de rappel d'évènements etc...</p>
                            <p>Le Socle, lui, sert de base à la création de nouvelles applications régionales, gérant déjà le système de sécurité et de connexion de la Gendarmerie.</p>
                        </div>
                        <div className='lg:w-1/3 bg-slate-800 rounded-[20px] p-1'>
                            <a href='/assets/socle.png'><img className='rounded-2xl' id='solaris' src='/assets/socle.png' alt="Image de l'Accueil du socle" /></a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2 md:gap-0 lg:flex lg:space-x-2">
                        <div className='lg:w-1/3 bg-slate-800 rounded-[20px] p-1'>
                            <a href='/assets/retool.png'><img className='rounded-2xl' id='socle' src='/assets/retool.png' alt="Image de l'Accueil de l'application Retool" /></a>
                        </div>
                        <div className='lg:w-2/3 bg-white p-3 rounded-[20px] space-y-2'>
                            <h2 className="text-2xl">Développement d'application en freelance</h2>
                            <p>Quelques projets de freelance, notamment une application servant à réaliser une étude cartographique afin de déterminer le rendement solaire d'une parcelle agricole.
                                Développement à l'aide de Retool, avant de passer à une application React.js, plus rapide et plus performante. Intégration à un projet existant (base de données Airtable, existant Retool).
                                Ce projet m'a permis de découvrir la relation client et la réalisation de cahier des charges avec tarification des prestations.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects