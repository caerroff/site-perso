import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
    url: string
}

const emptyPostData = { title: '', author: '', createdAt: new Date() }

function Post(props: Props) {
    const [post, setPost] = useState(emptyPostData)


    useEffect(() => {
        fetch('http://localhost:3000' + props.url)
            .then((response) => response.json()
                .then((postData) => {
                    setPost(postData)
                    console.log(postData)
                })
                .catch((error) => console.log(error))
            )
    }, [props.url])

    return (
        <>
            <div className='m-5 space-x-5 space-y-3'>
                <h1>Post</h1>
                <p>{post.title}</p>
            </div>
        </>
    )
}

export default Post