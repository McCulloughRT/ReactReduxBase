import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

import { action } from '../actions/index';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    action: action
  },dispatch);
}
function mapStateToProps(state) {
  return{
    state: state.mainState.get('PROPERTY')
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);
