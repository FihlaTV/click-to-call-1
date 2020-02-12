import {Query} from 'react-apollo';
import {CURRENT_USER_QUERY} from './User';
import Link from 'next/link';
import Signin from './Signin';
import Dashboard from './Dashboard';
import Signout from './Signout';
import Permissions from './Permissions';


const PleaseSignIn = (props) => (
    <Query query={CURRENT_USER_QUERY}>
        {({data, loading}) => {
            if (loading) return <p>Loading...</p>;
            if (!data.me) {
                return (
                    <div>
                        <h1>CLICK TO CALL</h1>
                        <Signin />
                    </div>
                );
            } else {
                return (
                    <div>
                        <Signout />

                        {/* <Dashboard /> */}
                        <Permissions />
                    </div>
                );
            }
        }}
    </Query>
);

export default PleaseSignIn;