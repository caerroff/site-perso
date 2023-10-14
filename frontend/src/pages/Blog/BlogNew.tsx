import { Link } from 'react-router-dom'

function BlogNew() {
    return (
        <>
            <div className='m-5 border-4 border-black rounded-2xl bg-gray-700 bg-gradient-to-tl via-gray-600 from-gray-200'>
                <div className='bg-orange-300 p-4 rounded-t-xl'>
                    <h1 className='uppercase text-center'>Formulaire</h1>
                </div>
                <div className='m-5'>
                    <form id='blog_form' method='POST' action='http://localhost:3000/blog/new'
                        className='flex flex-col'>
                        <div className=" flex flex-col items-center justify-center">
                            <label className='text-xl'>Titre</label>
                            <input placeholder="Titre de l'article" className='bg-gray-200 bg-gradient-to-t from-gray-400 w-1/2 m-3 text-black placeholder-gray-500 placeholder:italic text-center shadow-gray-100 shadow-inner focus:ring focus:ring-red-500' name='title'></input>
                        </div>
                        <div className=" flex flex-col items-center justify-center">
                            <label className='text-xl'>Auteur</label>
                            <input className='bg-gray-500 bg-gradient-to-b from-gray-300 w-1/3 m-3' name='author'></input>
                        </div>
                        <div className="border border-black flex flex-col items-center justify-center col">
                            <label className="ml-2 pt-2 align-middle">Contenu</label>
                            <textarea className="border border-black h-60 m-2 w-11/12" name="content" />
                        </div>
                        <div className="border border-black flex items-center justify-center">
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