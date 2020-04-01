import React, { Component } from 'react';
import Header from './Header';


const sections = [
  { title: 'About', url: '/About' },
  { title: 'Volunteer', url: '/Volunteer' },
  { title: 'login', url: '#' },
  { title: 'sign up', url: '#' },
  
];

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title="Le3ez hadchi khadam!" sections={sections} />
        </React.Fragment>
  
    );
  }
}
export default About;
