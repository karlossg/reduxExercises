import uuid from 'uuid';

//const types
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

//action creators
export default function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  };
}

export function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

export function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
}

export function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}

//bound action creators
// const boundAddComment = text => dispatch(addComment(text));
// const boundEditComment = (id, text) => dispatch(editComment(id, text));
// const boundRemoveComment = id => dispatch(removeComment(id));
// const boundThumpUpComment = id => dispatch(thumbUpComment(id));
// const boundThumpUpComment = id => dispatch(thumbDownComment(id));

//actions
// {
//     type: ADD_COMMENT,
//     id: 20,
//     text: 'My first comment !'
// }

// {
//     type: EDIT_COMMENT,
//     id: 20,
//     text: 'wyedytowany tekst komentarza'
// }

// {
//     type: REMOVE_COMMENT,
//     id: 20 // przykładowy id komentarza do usunięcia
// }

// {
//     type: THUMB_UP_COMMENT,
//     id: 20,
// }

// {
//     type: THUMB_DOWN_COMMENT,
//     id: 20,
// }
