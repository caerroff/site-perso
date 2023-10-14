import PostContainer from "../../components/Post/PostContainer"
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <>
            <div className="p-5">
                <Link className='bg-blue-500 hover:bg-blue-800 active:bg-blue-900 text-white hover:border hover:border-red-300 font-bold p-2 rounded-2xl' to='/blog/new'>Nouveau Post</Link>
                <PostContainer />
            </div>
        </>
    )
}

export default Blog