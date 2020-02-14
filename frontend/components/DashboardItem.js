import React, { Component } from 'react';
import Link from 'next/link';



class DashboardItem extends React.Component {

    render() {

        const { item } = this.props;
        // let itemurl;
        // if(item.customURL == null || item.customURL == '') {
        //     itemurl = item.id
        // } else {
        //     itemurl = item.customURL
        // }
        return (

            <tr>
                <td>
                    <Link
                        href={{
                            pathname: '/preview',
                            query: {id: item.id},
                        }}
                    >
                        <a>
                            {item.title}
                        </a>
                    </Link>

                </td>

                {(item.expiration == 'true') ? <td className="onexp">On</td> : <td className="offexp">Off</td>}

                <td>admin</td>

                <td>
                    <Link
                        href={{
                            pathname: '/update',
                            query: { id: item.id },
                        }}
                    >
                        <a className="editbtn">Edit </a>
                    </Link>
                    {/* <Link href="#">
                        <a className="dupbtn"> Duplicate</a>
                    </Link> */}
                </td>
            </tr>
        )
    }
}

export default DashboardItem;
