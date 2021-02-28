import { observable, action, computed } from "mobx";

import React from "react";

const Store = observable({
  likeCount: 10,
  tempComm: "",
  value: "",
  comments: ["cool","wow"],

  updateCount: action(() => {
    Store.likeCount += 1;
  }),

  getcomment: action((e) => {
    Store.value = e.target.value;
  }),
  pushComment: action((e) => {
      if(Store.value){
        Store.comments.push(Store.value);
        Store.value = "";
      } 
      else{
        alert("Enter Comment")
      }
      
    
  }),
  handleDelete: action((i)=>{
    Store.comments.splice(i,1)
  }),
  handleEdit: action((i)=>{
    Store.value = Store.comments[i]
    Store.handleDelete(i)
  }),

  get commentsCount() {
    return Store.comments.length;
  },
});

export default Store;
