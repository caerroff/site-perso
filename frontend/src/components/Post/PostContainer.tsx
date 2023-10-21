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
            <div className="grid grid-cols-1 md:grid-cols-4 w-full py-12 gap-2 md:min-h-screen">
                <div className="border-2 md:col-span-1 p-4 text-center bg-purple-50 rounded-2xl">
                    <h1 className="underline text-xl">Options de Tri</h1>
                </div>
                <div className="md:col-span-3 p-4 border-2 bg-blue-100 bg-gradient-to-br from-purple-100 rounded-2xl">
                    <h1 className="underline text-2xl text-center pb-5">Posts</h1>
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