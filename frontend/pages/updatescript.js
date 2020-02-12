import React, { Component } from 'react';
import Router from 'next/router';
import MainStyles from '../components/styles/MainStyles';
import UpdateScript from '../components/UpdateScript';


const ScriptPage = props => (
  <MainStyles>
    <UpdateScript id={props.query.id} />
  </MainStyles>
);


export default ScriptPage;