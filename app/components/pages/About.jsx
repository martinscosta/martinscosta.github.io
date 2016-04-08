import React from 'react';
import DefaultLayout from '../DefaultLayout';
import {Jumbotron} from 'react-bootstrap';



const About = () => {
  return (
    <DefaultLayout title='About Page'>
      <Jumbotron>
        Vários testes e desenvolvimentos realizados por mim. 
      </Jumbotron>
    </DefaultLayout>    
  );
};

export default About; 