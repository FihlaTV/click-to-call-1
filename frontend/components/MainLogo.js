import React, { Component } from 'react';
import Link from 'next/link';

class MainLogo extends Component {
  render() {
    return (
        <Link href="/dashboard">
            <a id="mainLogo">
                <img src="/static/mainlogo.png" />
            </a>
        </Link>
    );
  }
}


export default MainLogo;