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
                        console.log(data)
                    })
                    .catch((reason) => {
                        console.log(reason)
                    })
            })
    }, [])

    return (
        <>
            {/* {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))} */}
            {postsId.map((id) => (
                <div>
                    <Post
                        url={`/blog/${id}`}
                    />
                </div>
            ))}
        </>
    )
}

export default PostContainer