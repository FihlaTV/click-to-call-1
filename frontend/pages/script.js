import React, { Component } from 'react';
import Router from 'next/router';
import MainStyles from '../components/styles/MainStyles';
import CreateScript from '../components/CreateScript';

const ScriptPage = props => (
  <MainStyles>
    <CreateScript id={props.query.id} />
  </MainStyles>
);

export default ScriptPage;