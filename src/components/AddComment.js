import React from 'react';

const AddComment = ({ text, addComment }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addComment(input.value);
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