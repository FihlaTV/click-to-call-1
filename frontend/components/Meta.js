import React, { Component } from 'react';
import Head from "next/head";

class Meta extends Component {
  render() {
    return (
      <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
          <meta charSet="utf-8"></meta>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css"></link>
          <link rel="shortcut icon" href="/static/favicon.png"></link>
          <title>Click to Call</title>
      </Head>
    );
  }
}

export default Meta;