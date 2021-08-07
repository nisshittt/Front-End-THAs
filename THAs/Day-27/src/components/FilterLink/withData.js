import { connect } from "react-redux";
import { setActiveFilter } from "../../actions/activeFilter";
import Link from "./";

export default connect(
  (state, ownProps) => ({
    active: ownProps.filter === state.activeFilter
  }),
  (dispatch, ownProps) => ({
    onClick: () => dispatch(setActiveFilter(ownProps.filter))
  })
)(Link);
