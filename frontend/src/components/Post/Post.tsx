import { useEffect, useState } from 'react'
import { Loader } from '../Loader/index.tsx'
// import { Link } from 'react-router-dom'

type Props = {
    url: string
}

type Post = {
    title: string,
    content: string,
    author: string,
    createdAt: string
}

function Post(props: Props) {
    const [post, setPost] = useState<Post>()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await fetch(`http://localhost:3000/blog/${props.url}`)
                const data = await response.json()
                setPost(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [props.url])

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className='border-2 border-blue-400 hover:bg-blue-100 bg-white my-2 rounded-xl p-2'>
                    <h1 className="underline uppercase">{post.title}</h1 >
                    <p className="font-mono m-3">{post.content}</p>
                    <p className="italic font-extralight">{post.author}</p>
                    <p className="italic text-gray-500 text-sm w-full">Écrit le {new Date(post.createdAt).toLocaleDateString('FR')}</p>
                </div >
            )
            }

        </>
    )
}

export default Post