import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

type Props = {
    url: string
}

const emptyPostData = { title: '', author: '', createdAt: new Date(), content: '' }

function Post(props: Props) {
    const [post, setPost] = useState(emptyPostData)


    useEffect(() => {
        console.log("effect");
        fetch('http://localhost:3000' + props.url)
            .then((response) => response.json()
                .then((postData) => {
                    setPost(postData)
                })
                .catch((error) => console.log(error))
            )
    }, [props.url])

    return (
        <>
            <div className='border-2 border-blue-400 hover:bg-blue-100 bg-white my-2 rounded-xl p-2'>
                <h1 className="underline uppercase">{post.title}</h1>
                <p className="font-mono m-3">{post.content}</p>
                <p className="italic font-extralight">{post.author}</p>
                <p className="italic text-gray-500 text-sm w-full">Écrit le {new Date(post.createdAt).toLocaleDateString('FR')}</p>
            </div>
        </>
    )
}

export default Post