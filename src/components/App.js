import React from 'react';
import AddCommentContainer from '../containers/AddCommentContainer'
import CommentsListContainer from '../containers/CommentsListContainer';
// import './App.css';

const App = () => {
  return (
    <div className="App">
      <AddCommentContainer />
      Comments list:
      <CommentsListContainer />
    </div>
  );
};

export default App;
