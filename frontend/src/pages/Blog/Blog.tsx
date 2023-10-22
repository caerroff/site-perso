import PostContainer from "../../components/Post/PostContainer"
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <>
            <div className="grid justify-center">
                <Link to='/blog/new' className='bg-green-600 font-bold text-white mx-auto mt-5 p-3 rounded-2xl active:ring-white active:ring-2 hover:bg-green-800'>Nouveau</Link>
                <PostContainer />
            </div>
        </>
    )
}

export default Blog