function Formation() {
    return (
        <>
            <div className="bg-blue-900 m-5 p-3 rounded-2xl space-y-5 text-white">
                <h1 className="text-center font-serif text-5xl md:text-7xl pt-2">Mes Formations</h1>
                <p className="p-5 text-justify">J'ai commencé les formations en informatique à partir du Lycée, avec la spécialité NSI de la nouvelle réforme du baccalauréat.<br />
                    Lors de cette formation j'ai pu apprendre les rudiements de la programmation, et j'ai pu découvrir les bases de la programmation orientée objet.
                    Cette première formation m'a permis de découvrir que j'aimais la programmation, et que je voulais en faire mon métier.<br />
                    J'ai ensuite continué mes études en informatique, en intégrant l'IUT de Blagnac, pour y passer un BUT Informatique.
                    J'ai choisi cette formation car il était possible de la réaliser en alternance, ce que je trouve essentiel pour maîtriser un métier.<br />
                    À partir de la deuxième année, j'ai rejoins la Gendarmerie Nationale, au sein de la Section d'Appui Numérique, pour y réaliser mon alternance.
                    J'ai découvert la programmation Web dans un cadre professionnel, et j'ai pu découvrir les méthodes de travail en entreprise.
                </p>
                <h2 className="text-3xl">Mes formations par ordre chronologique</h2>

                <table className="table-auto w-full text-center border-2 border-black text-black">
                    <thead>
                        <tr>
                            <th>Formation</th>
                            <th>Établissement</th>
                            <th>Diplôme obtenu</th>
                            <th>Année</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Enseignement Secondaire</td>
                            <td>Lycée Général et Technologique Déodat de Séverac (Toulouse)</td>
                            <td>Baccalauréat Général Mathématiques et Numérique Sciences de l'Informatique (Mention Bien)</td>
                            <td>2018 - 2021</td>
                        </tr>
                        <tr className="now">
                            <td>Enseignement Universitaire</td>
                            <td>IUT de Blagnac, Université Toulouse Jean Jaurès</td>
                            <td>BUT Informatique</td>
                            <td>2021 - 2024</td>
                        </tr>
                        <tr className="future">
                            <td>Enseignement Universitaire</td>
                            <td>Ynov</td>
                            <td>Mastère développement Web</td>
                            <td>2024 - 2026</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-3xl">Mes projets de poursuite d'études</h2>
                <p>Comme montré dans le tableau précédent, je souhaite continuer les études jusqu'à l'obtention d'un mastère en développement Web.
                    En effet, mon travail à la Gendarmerie m'a permis de découvrir le monde du développement Web et l'attrait que j'ai pour ce domaine.
                    C'est pour cela que je souhaite me spécialiser dans ce domaine, pour en faire mon métier.
                </p>

                <h2 className="text-3xl">Apprentissages Personnels</h2>
                <p>En parallèle à ma formation et mon alternance, j'ai également lancé une auto-entreprise afin d'acquérir de nouvelles connaissances que je pourrai utiliser plus tard dans ma vie professionnelle.
                    J'ai pu ainsi apprendre à gérer une entreprise, à réaliser des devis, à gérer des clients, et à réaliser des projets de A à Z.
                    J'ai également pu apprendre à gérer mon temps, et à m'organiser pour réaliser mes projets personnels et professionnels.
                </p>
            </div>

        </>
    )
}

export default Formation