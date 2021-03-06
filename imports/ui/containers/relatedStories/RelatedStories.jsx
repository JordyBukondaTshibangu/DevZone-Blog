import React from 'react';
import { useHistory } from 'react-router-dom';
import RelatedStory from '../../components/relatedPost/RelatedPost.jsx';
import './RelatedStories.css';

const RelatedStories = ({posts}) => {

    let history = useHistory();

    const handleViewPost = (_id) => {
        history.push(`/posts/${_id}`)
    }

    return (
        <div>
            <div className="related-stories">
                {
                    posts.map((post, index) => <div key={index} onClick={()=> handleViewPost(post._id)}><RelatedStory post={post} /></div>)
                }
            </div>
        </div>
    )
}

export default RelatedStories
