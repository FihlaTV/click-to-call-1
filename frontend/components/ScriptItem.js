import React, { Component } from 'react';
import Link from 'next/link';


class ScriptItem extends Component {
  render() {

    const { item } = this.props;

    return (
        <div className="campaignScriptItem">
            <h3>{item.title}</h3>
            <div className="editCampaignScript">
                <Link
                    href={{
                        pathname: '/updatescript',
                        query: {id: item.id},
                    }}
                >
                    <a>Edit</a>
                </Link>

                <h6>Last Modified at 11:59 PM, 12/31/2018</h6>
            </div>
            {/* <h4>{item.campaignID}</h4> */}
        </div>
    );
  }
}


export default ScriptItem;