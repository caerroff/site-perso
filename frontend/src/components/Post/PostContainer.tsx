import Post from './Post'
import { useState, useEffect } from 'react'
import { Loader } from '../Loader'

function PostContainer() {
    const [postsId, setPostsId] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchIds() {
            try {
                setLoading(true)
                const response = await fetch('http://localhost:3000/blog/getIds')
                const data = await response.json()
                setPostsId(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchIds()
    }, [])

    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 w-screen max-w-[2000px]">
                <div className="border-2 p-4 text-center text-white bg-slate-950 rounded-2xl md:w-1/4">
                    <h1 className="text-lg md:text-2xl">Options de Tri</h1>
                </div>
                <div className="p-4 border-2 text-white bg-slate-900 bg-gradient-to-t from-slate-800 rounded-2xl md:w-3/4">
                    <h1 className="text-xl md:text-4xl text-center pb-5">Posts</h1>
                    {loading ? (
                        <div className="flex flex-col items-center">
                            <Loader />
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                            {postsId.map((id) => {
                                return (
                                    <Post url={id} />
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default PostContainer