import { observer } from "mobx-react";
import React from "react";
import "../css/img_style.css";
import Main from "./Main"
const  Image= observer((props)=> {
    const data = props
  return (
    <div className="main">
      <div className="container">
        <img src="../img/udemy_logo.png" alt="img" />
      </div>
      <div className="reaction">
        <div className="like">Like:{props.state.likeCount}</div>
        <div className="comment">Comments:{props.state.commentsCount}</div>
      </div>
      <div className="like_btn">
        <button className="btn" onClick={props.state.updateCount}>
          Like
        </button>
      </div>
      <div className="comment_text">
        <input
        
          type="text"
          value={props.state.value}
          onChange={props.state.getcomment}
          placeholder="enter comment here"
        />
        <button onClick={props.state.pushComment}>Add</button>
      </div>
      <div className="comment_list">
        <ul>
          {props.state.comments.map((data, i) =>
            ( 
              <li key={i}>
                {data}
                
                <button
                  className="delete"
                  onClick={() => {
                    props.state.handleDelete(i);
                  }}
                >
                  Delete
                </button>
                <button
                  className="edit"
                  onClick={() => {
                    props.state.handleEdit(i);
                  }}
                >
                  Edit
                </button>
              </li>
             )
          )}
        </ul>
      </div>
      <Main data={data} />
    </div>
  );
})

export default Image;
