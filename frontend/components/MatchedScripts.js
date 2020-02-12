import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { legislators } from "../lib/legislators";

const SINGLE_SCRIPT_QUERY = gql`
  query SINGLE_SCRIPT_QUERY($id: String!) {
    campaignScripts(where: { campaignID: $id }) {
      id
      title
      scriptContent
      targetCondition2
      targetCondition3
      targetCondition4
      data
    }
  }
`;

 class MatchedScripts extends Component {

    state = {
        targetCandidates: this.props.candidates,
    };

    render() {

    return (
      <div>
        <Query query={SINGLE_SCRIPT_QUERY} variables={{ id: this.props.id }} >
            {({ data, loading, error }) => {
                if (loading) return <p>Loading...</p>;
                if (data.item) return <p>No Item Found for ID...</p>;
                if (error) return <p>Error: {error.message}</p>;

                    // Loops through all possible scripts
                    return data.campaignScripts.map((cScript, i) => {

                      if(cScript.data[0]) {
                        var arraycontainskeyword = (cScript.data.indexOf(this.props.matchedCand) > -1);
                        // If target candidate matches address and ZIP, show this script
                        if(arraycontainskeyword == true) {
                          return (
                            <div className="repNameScript" key={i}>
                                <h1>{cScript.title}</h1>
                                {cScript.data}
                                <br />
                                {cScript.targetCondition2}
                                <br />
                                {cScript.targetCondition3}
                                <br />
                                {cScript.targetCondition4}
                                <div className="scriptContainer">
                                    <div dangerouslySetInnerHTML={{
                                        __html: cScript.scriptContent
                                    }}/>
                                </div>
                            </div>
                        )
                        } else {
                          return false;
                        }
                      } else if(cScript.targetCondition3) {
                        if(this.props.candParty === "Democratic Party") {
                          if(cScript.targetCondition3 == "Democrat") {
                            return (
                              <div className="repNameScript" key={i}>

                                  <h1>{cScript.title}</h1>
                                  {cScript.data}
                                  <br />
                                  {cScript.targetCondition2}
                                  <br />
                                  {cScript.targetCondition3}
                                  <br />
                                  {cScript.targetCondition4}
                                  <div className="scriptContainer">
                                      <div dangerouslySetInnerHTML={{
                                          __html: cScript.scriptContent
                                      }}/>
                                  </div>
                              </div>
                          )
                          }
                        } else {
                          if(cScript.targetCondition3 == "Republican") {
                            return (
                              <div className="repNameScript" key={i}>

                                  <h1>{cScript.title}</h1>
                                  {cScript.data}
                                  <br />
                                  {cScript.targetCondition2}
                                  <br />
                                  {cScript.targetCondition3}
                                  <br />
                                  {cScript.targetCondition4}
                                  <div className="scriptContainer">
                                      <div dangerouslySetInnerHTML={{
                                          __html: cScript.scriptContent
                                      }}/>
                                  </div>
                              </div>
                          )
                        }
                      }
                    } else if(cScript.targetCondition4) {
                      if(this.props.candState) {
                        if(this.props.candState == cScript.targetCondition4){
                          return (
                            <div className="repNameScript" key={i}>
                                <h1>{cScript.title}</h1>
                                {cScript.data}
                                <br />
                                {cScript.targetCondition2}
                                <br />
                                {cScript.targetCondition3}
                                <br />
                                {cScript.targetCondition4}
                                <div className="scriptContainer">
                                    <div dangerouslySetInnerHTML={{
                                        __html: cScript.scriptContent
                                    }}/>
                                </div>
                            </div>
                        )
                        } else {
                          return false;
                        }
                      }
                    } else {
                      this.state.targetCandidates.map((cand, i) => {
                        var scriptID = cand.id;
                          // Loops through all legislators. Adds 10 to ranked score.
                          legislators.map(q => {
                            if(q.id.bioguide === scriptID && cand.answer === data.campaignScripts.targetCondition2) {
                              var fullname = q.name.first+" "+q.name.last;
                              if(cScript.data) {
                                cScript.data.map(n => {
                                  if(n == fullname) {
                                    return (
                                      <div className="repNameScript" key={i}>
                                        <h1>{cScript.title}</h1>
                                        {cScript.data}
                                        <br />
                                        {cScript.targetCondition2}
                                        <br />
                                        {cScript.targetCondition3}
                                        <br />
                                        {cScript.targetCondition4}
                                        <div className="scriptContainer">
                                          <div dangerouslySetInnerHTML={{
                                            __html: cScript.scriptContent
                                          }}/>
                                        </div>
                                      </div>
                                    )
                                  }
                                });
                              }
                            }
                          });
                        });
                      }


                    });
                  }
                }
        </Query>
      </div>
    );
  }
}


export default MatchedScripts;