import React from 'react';
import { connect } from 'react-redux'
// import { addComment } from '../actions/index'
// import AddCommentContainer from '../containers/AddCommentContainer';

const AddComment = ({ text, addComment }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          // if (!input.value.trim()) {
          //   return
          // }
          store.dispatch(addComment(input.value));
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add comment
        </button>
      </form>
    </div>
  )
}


export default AddComment