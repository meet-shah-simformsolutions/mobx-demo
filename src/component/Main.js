import React from 'react';

function Main(props) {
    const newData =  props.data.state
    return (
        <div>
           <h2> New Component </h2> 
           Total Likes : {newData.likeCount}<br/>
           Total Comments : {newData.commentsCount}<br/>
        </div>
    );
}

export default Main;