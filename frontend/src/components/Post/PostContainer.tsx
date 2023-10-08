import Post from './Post'
import { useState, useEffect } from 'react'

function PostContainer() {
    const [postsId, setPostsId] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/blog/getIds')
            .then((response) => {
                response.json()
                    .then((data) => {
                        setPostsId(data)
                    })
                    .catch((reason) => {
                        console.log(reason)
                    })
            })
    }, [])

    return (
        <>
            <div className="flex w-full">
                <div className="border-2 w-1/4 p-4 text-center bg-purple-50">
                    <h1 className="underline text-xl">Options de Tri</h1>
                </div>
                <div className="w-2/3 mx-2 p-4 border-2 bg-lime-50">
                    <h1 className="underline text-2xl text-center">Posts</h1>
                    {postsId.map((id) => (
                        <Post
                            url={`/blog/${id}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default PostContainer