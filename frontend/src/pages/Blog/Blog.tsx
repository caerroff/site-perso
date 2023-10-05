import PostContainer from "../../components/Post/PostContainer"
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <>
            <div className="p-5 space-y-5">
                <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to='/blog/new'>Nouveau Post</Link>
                <PostContainer />
            </div>
        </>
    )
}

export default Blog