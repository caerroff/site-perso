import { Link } from 'react-router-dom'

function BlogNew() {
    return (
        <>
            <div className='m-5 border-4 border-black rounded-2xl'>
                <div className='bg-orange-300 p-4 rounded-t-xl'>
                    <h1 className='uppercase'>Formulaire</h1>
                </div>
                <div className='m-5'>
                    <form id='blog_form' method='POST' action='http://localhost:3000/blog/new'
                        className='grid 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                        <div className="border flex items-center justify-center">
                            <label>Titre</label>
                            <input className='border border-1 border-black w-2/3 m-3'></input>
                        </div>
                        <div className="border flex items-center justify-center">
                            <label>Auteur</label>
                            <input className="border border-black m-2" type='text' id='author' name='author' />
                        </div>
                        <div className="border flex flex-col items-center justify-center col">
                            <label className="ml-2 pt-2 align-middle">Contenu</label>
                            <textarea className="border border-black h-60 m-2 w-11/12" name="content" />
                        </div>
                        <div className="border flex items-center justify-center">
                            <label>Date</label>
                            <input className="border border-black p-2 m-2" type='date' id='createdAt' name='createdAt' />
                        </div>

                    </form>
                </div>

                <div className='flex justify-center p-2 border-t-2 space-x-5'>
                    <input className="w-24 text-center border border-green-500 p-2 rounded-xl bg-green-500 hover:bg-lime-700 hover:text-white hover:cursor-pointer" type="submit" value='Envoyer' form='blog_form' />
                    <Link to='/blog' className="border hover:text-white border-red-400 bg-red-400 hover:bg-red-700 rounded-xl w-24 text-center p-2">Retour</Link>
                </div>

            </div>

        </>
    )
}

export default BlogNew;