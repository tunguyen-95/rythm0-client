import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { signup } from '../../actions/users';

class SignupFormContainer extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state.name, this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <SignupForm
        user={this.props.user}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = {
  signup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormContainer);
