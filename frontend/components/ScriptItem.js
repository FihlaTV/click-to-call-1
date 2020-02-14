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

            </div>

        </div>
    );
  }
}


export default ScriptItem;