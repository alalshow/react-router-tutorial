import React from 'react';

const Post = ({location, match}) => {
    console.log('Post', match);
    console.log('location', location);
    return (
        <p>
            포스트 #{match.params.id}
        </p>
    )
}

export default Post;