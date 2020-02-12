import React, { Component } from 'react';
import Link from 'next/link';
import DashboardItem from './DashboardItem';
import DashboardItems from './DashboardItems';
import Search from './Search';

import Table from './styles/Table'
import MainStyles from './styles/MainStyles'


class Dashboard extends Component {
  render() {
    return (
      <MainStyles>

        <h1 className="dashboardh1">CLICK TO CALL LISTING</h1>
        <Link href="/item">
          <a className="createnew">
            Create New
          </a>
        </Link>

          <Table>
            <thead>
              <tr>
                <th>Admin Title</th>
                <th>Status</th>
                <th>Created By</th>
                <th><Search /></th>
              </tr>
            </thead>
            <DashboardItems  />
        </Table>

      </MainStyles>
    );
  }
}

export default Dashboard;