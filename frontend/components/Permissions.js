import {Query , Mutation} from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Table from './styles/Table'
import SickButton from './styles/SickButton'
import propTypes from 'prop-types';

const possiblePermissions = [
    'ADMIN',
    'USER',
    // 'ITEMCREATE',
    // 'ITEMUPDATE',
    // 'ITEMDELETE',
    // 'PERMISSIONUPDATE',
];

const UPDATE_PERMISSIONS_MUTATION = gql`
    mutation updatePermissions($permissions: [Permission], $userId: ID!) {
        updatePermissions(permissions: $permissions, userId: $userId) {
            id
            permissions
            name
            email
        }
    }
`;

const ALL_USERS_QUERY = gql`
    query {
        users {
            id
            name
            email
            permissions
        }
    }
`;

const SignOutDiv = styled.div`
    display: block;
    margin: 100px auto 0;
    max-width: 1000px;
    h2 {
        font-size: 2em;
        text-transform: uppercase;
    }
`;

const Permissions = (props) => (
    <Query query={ALL_USERS_QUERY}>
        {({data, loading, error}) => console.log(data) || (
            <SignOutDiv>
                <Error error={error} />
                <div>
                    <h2>Manage Users</h2>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                {/* {possiblePermissions.map(permission => <th key={permission}>{permission}</th>)} */}
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users.map(user => <UserPermissions key={user.id} user={user} />)}
                        </tbody>
                    </Table>
                </div>
            </SignOutDiv>
        )}
    </Query>
);

class UserPermissions extends React.Component {
    static propTypes = {
        user: propTypes.shape({
            name: propTypes.string,
            email: propTypes.string,
            id: propTypes.string,
            permissions: propTypes.array,
        }).isRequired,
    };
    state = {
        permissions: this.props.user.permissions,
    };
    handlePermissionChange = (e, updatePermissions) => {
        const checkbox = e.target;
        // take copy of current permissions
        let updatedPermissions = [...this.state.permissions];
        // figure out if we need to remove or add this permission
        if(checkbox.checked) {
            // add it in!
            updatedPermissions.push(checkbox.value);
        } else {
            updatedPermissions = updatedPermissions.filter(permission => permission !== checkbox.value)
        }
        this.setState({permissions: updatedPermissions });
        updatePermissions();
        console.log(updatePermissions);

    }
    render() {
        const user = this.props.user;
        return (
            <Mutation mutation={UPDATE_PERMISSIONS_MUTATION} variables={{
                permissions: this.state.permissions,
                userId: this.props.user.id
            }}>
                {(updatePermissions, {loading, error}) => (
                    <>
                    {error && <tr><td colSpan="8"><Error error={error} /></td></tr>}

            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* {possiblePermissions.map(permission => (
                  <td key={permission}>
                      <label htmlFor={`${user.id}-permission-${permission}`}>
                          <input
                            id={`${user.id}-permission-${permission}`}
                            type="checkbox"
                            checked={this.state.permissions.includes(permission)}
                            value={permission}
                            onChange={(e) =>
                                this.handlePermissionChange(e, updatePermissions)}
                            ></input>
                      </label>
                  </td>
                ))} */}
                <td>
                    <SickButton
                        type="button"
                        disabled={loading}
                        onClick={updatePermissions}
                    >
                        Delet{loading ? 'ing' : 'e'}
                    </SickButton>
                </td>
            </tr>
            </>
            )}
        </Mutation>
        )
    }
}

export default Permissions;