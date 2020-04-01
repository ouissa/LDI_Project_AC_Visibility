import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname:'',
      stuId: '',
      phoneNum:'',
      CinNum: '',
      email : '',
      password: ''


    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error registering, please try again');
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up Below!</h1>
        <input
          type="fname"
          name="fname"
          placeholder="First Name"
          value={this.state.fname}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="lname"
          name="lname"
          placeholder="Last Name"
          value={this.state.lname}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="stuId"
          name="stuId"
          placeholder="ID"
          value={this.state.stuId}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="phoneNum"
          name="phoneNum"
          placeholder="Phone Number"
          value={this.state.phoneNum}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="cinNum"
          name="cinNum"
          placeholder="CIN Number"
          value={this.state.cinNum}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}