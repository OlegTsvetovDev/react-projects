import React from 'react'


const PostService = async (url, setState) => {
  fetch(url)
    .then(r => r.json())
    .then(d => setState(d))
    .catch(e => console.log(e))

}


export default PostService
