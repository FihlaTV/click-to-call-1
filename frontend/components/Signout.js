import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import { CURRENT_USER_QUERY } from './User';
import User from './User';


const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        signout {
            message
        }
    }
`;



const SignOutDiv = styled.div`
    display: block;
    margin: -50px auto 0;
    max-width: 1000px;

    text-align: right;
    p {
        display: inline-block;
    }
    button {
        background: #2D4C6B;
        color: white;
        border: 0;
        padding: 5px 30px;
        font-size: 16px;
        text-align: right;
        display: inline-block;
        margin: 0 0 0 20px;
    }

`;

const Signout = () => (
    <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[
        {query: CURRENT_USER_QUERY}
    ]}>
        {(signout) => (
            <SignOutDiv>

                <User>
                    {({ data: { me } }) => (
                        <>
                            {me && (
                                <>
                                    <p>{me.name}</p>
                                    <button onClick={signout}>Logout</button>
                                </>
                            )}
                        </>
                    )}
                </User>

            </SignOutDiv>
        )
        }
    </Mutation>
);

export default Signout;
