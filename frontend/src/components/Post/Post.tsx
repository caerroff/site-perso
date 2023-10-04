import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Post = {
    title: string | null,
    author: string | null,
    createdAt: Date | null,
}

function Post(props: JSON) {
    const [post, setPost] = useState()

    function getPost(url: string) {
        fetch('http://localhost:3000/' + url).then((response) => {
            response.json().then((data) => {
                console.log(data)
            }).catch((reason) => {
                console.log('Erreur : ' + reason)
                console.log('Code Erreur : ' + response.status)
            })
        }
        )
        setPost(post)
        console.log(props.url)
    }

    useEffect(() => {
        getPost(props.url)
    }, [props.url])

    return (
        <>
            <div className='m-5 space-x-5 space-y-3'>
                <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to='/blog/new'>Nouveau Post</Link>
                <h1>Post</h1>
                <p>{post != null ? post.title : 'Erreur'}</p>
            </div>
        </>
    )
}

export default Post