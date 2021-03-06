/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Home from 'src/components/Home';


// Action Creators
import { dislikes, likes, deleteMovie, changePage, changeItemsPerPage, precendentPage, nextPage } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  list: state.moviesList,
  currentCat: state.currentCat,
  currentPage: state.currentPage,
  todosPerPage: state.todosPerPage,
  pageNumbers: state.pageNumbers,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  dislikes: (id) => {
    dispatch(dislikes(id));
  },
  likes: (id) => {
    dispatch(likes(id));
  },
  deleteMovie: (id) => {
    dispatch(deleteMovie(id));
  },
  changePage: (id) => {
    dispatch(changePage(id));
  },
  changeItemsPerPage: (value) => {
    dispatch(changeItemsPerPage(value));
  },
  precendentPage: () => {
    dispatch(precendentPage());
  },
  nextPage: () => {
    dispatch(nextPage());
  },
});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);


/**
 * Export
 */
export default HomeContainer;
