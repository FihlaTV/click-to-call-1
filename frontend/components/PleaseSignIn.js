import {Query} from 'react-apollo';
import {CURRENT_USER_QUERY} from './User';
import Link from 'next/link';
import Signin from './Signin';
import Dashboard from './Dashboard';
import Signout from './Signout';
import Permissions from './Permissions';
import MainStyles from "./styles/MainStyles";



const PleaseSignIn = (props) => (
    <Query query={CURRENT_USER_QUERY}>
        {({data, loading}) => {
            if (loading) return <p>Loading...</p>;
            if (!data.me) {
                return (
                    <MainStyles>
                        <div id="pleaseLogIn">
                            <h1>CLICK TO CALL</h1>
                            <Signin />
                        </div>
                    </MainStyles>
                );
            } else {
                return (
                    <div>
                        <Signout />

                        <Dashboard />
                        {/* <Permissions /> */}
                    </div>
                );
            }
        }}
    </Query>
);

export default PleaseSignIn;