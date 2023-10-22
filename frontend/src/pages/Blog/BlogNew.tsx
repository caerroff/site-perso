import { Link } from 'react-router-dom'

function BlogNew() {
    return (
        <>
            <div className="m-auto w-full max-w-[1500px]">
                <div className='m-5 border-4 border-black rounded-2xl bg-gray-700 bg-gradient-to-t from-gray-600'>
                    <div className='bg-yellow-400 p-4 rounded-t-xl'>
                        <h1 className='uppercase text-center font-bold text-2xl'>Création d'un nouveau post</h1>
                    </div>
                    <div className='m-1 border-black'>
                        <form id='blog_form' method='POST' action='http://localhost:3000/blog/new'
                            className='flex flex-col'>
                            <div className="flex flex-col items-center justify-center">
                                <label className='text-xl'>Titre</label>
                                <input placeholder="Titre de l'article" className='bg-slate-200 h-10 w-1/3 min-w-[200px] m-3 text-black placeholder-gray-500 placeholder:italic placeholder:text-center focus:ring focus:ring-red-500' name='title'></input>
                            </div>
                            <div className=" flex flex-col items-center justify-center">
                                <label className='text-xl'>Auteur</label>
                                <input className='bg-slate-200 h-10 w-1/3 min-w-[200px] m-3 placeholder:text-center placeholder:italic' placeholder="Auteur de l'Article" name='author'></input>
                            </div>
                            <div className=" flex flex-col items-center justify-center col">
                                <label className="ml-2 pt-2 align-middle">Contenu</label>
                                <textarea className="border border-black h-60 m-2 w-1/2 min-w-[200px] bg-slate-200" name="content" />
                            </div>
                            <div className=" flex items-center justify-center">
                                <label>Date</label>
                                <input className="border border-black p-2 m-2" type='date' id='createdAt' name='createdAt' />
                            </div>

                        </form>
                    </div>

                    <div className='flex justify-center p-2 border-t-2 space-x-5 bg-slate-700 border border-slate-700 rounded-b-xl'>
                        <input disabled={true} className="disabled:bg-gray-500 disabled:border-gray-500 disabled:text-black disabled:hover:cursor-not-allowed w-24 text-center border border-green-500 p-2 rounded-xl bg-green-500 hover:bg-lime-700 hover:text-white hover:cursor-pointer" type="submit" value='Envoyer' form='blog_form' />
                        <Link to='/blog' className="border hover:text-white border-red-400 bg-red-400 hover:bg-red-700 rounded-xl w-24 text-center p-2">Retour</Link>
                    </div>

                </div>
            </div>


        </>
    )
}

export default BlogNew;