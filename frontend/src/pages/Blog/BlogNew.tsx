function BlogNew() {
    return (
        <>
            <h1>Formulaire</h1>
            <form method='POST' action='http://localhost:3000/blog/new'>
                <div className="border">
                    <label>Titre</label>
                    <input className="border border-black m-2" type='text' id='title' name='title' />
                </div>
                <div className="border">
                    <label>Auteur</label>
                    <input className="border border-black m-2" type='text' id='author' name='author' />
                </div>
                <div className="border space-x-10">
                    <label>Date</label>
                    <input className="border border-black p-2" type='date' id='createdAt' name='createdAt' />
                </div>
                <input className="border border-green-500 p-2" type="submit" value='Envoyer' />
            </form>
        </>
    )
}

export default BlogNew;