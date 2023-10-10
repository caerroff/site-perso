import Post from './Post'
import { useState, useEffect } from 'react'
import { Loader } from '../Loader'

function PostContainer() {
    const [postsId, setPostsId] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch('http://localhost:3000/blog/getIds')
        //     .then((response) => {
        //         response.json()
        //             .then((data) => {
        //                 setPostsId(data)
        //             })
        //             .catch((reason) => {
        //                 console.log(reason)
        //             })
        //     })
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
            <div className="flex w-full">
                <div className="border-2 w-1/4 p-4 text-center bg-purple-50">
                    <h1 className="underline text-xl">Options de Tri</h1>
                </div>
                <div className="w-2/3 mx-2 p-4 border-2 bg-lime-50">
                    <h1 className="underline text-2xl text-center pb-5">Posts</h1>
                    {loading ? (
                        <Loader />
                    ) : (
                        postsId.map((id) => {
                            return (
                                <Post url={id} />
                            )
                        })
                    )}
                </div>
            </div>
        </>
    )
}

export default PostContainer