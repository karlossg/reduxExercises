import { connect } from 'react-redux';
import AddComment from '../components/AddComment';
import { addComment } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  addComment: text => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(AddComment);

