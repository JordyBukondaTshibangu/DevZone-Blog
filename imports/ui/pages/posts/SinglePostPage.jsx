import React from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { PostsCollection } from '../../../api/collections/postCollections';
import { useHistory } from 'react-router-dom';

const dev = JSON.parse(localStorage.getItem('dev'));
let email;
if(dev === null){
    email = ""
} else {
    email = dev.email;
}

const SinglePostPage = props => {

    if(!dev){
        useHistory().push('/sign-in');
    } 

    const { title, tagline, description, image, author, content  } = props.post;

    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>Author : <strong>{author}</strong></p>
                <p>Tagline : <strong>{tagline}</strong></p>
            </div>
            <div>
                <p><strong>Description</strong> {description}</p>
                <p><strong>Content</strong> {content}</p>
            </div>
        </div>
    )
}

export default withTracker(() => {

            Meteor.subscribe('pots');

            return { post : PostsCollection.findOne({email}).fetch()};

})(SinglePostPage)
