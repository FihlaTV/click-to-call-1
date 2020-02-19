import React, { Component } from 'react';
import Link from 'next/link';
import DeleteItem from './DeleteItem';


class DashboardItem extends React.Component {

    render() {

        const { item } = this.props;

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
                {(item.user != null) ? <td>{item.user.name}</td> : <td>N/A</td>}
                <td>
                    <Link
                        href={{
                            pathname: '/update',
                            query: { id: item.id },
                        }}
                    >
                        <a className="editbtn">Edit </a>
                    </Link>

                    <DeleteItem id={item.id}>Delete</DeleteItem>
                    {/* <Link href="#">
                        <a className="dupbtn"> Duplicate</a>
                    </Link> */}
                </td>
            </tr>
        )
    }
}

export default DashboardItem;
