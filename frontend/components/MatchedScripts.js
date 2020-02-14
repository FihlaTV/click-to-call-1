import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { legislators } from "../lib/legislators";
import { houseMembers, senateMembers } from "../lib/people";

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
    targetCandidates: this.props.candidates
  };

  render() {
    return (
      <div>
        <Query query={SINGLE_SCRIPT_QUERY} variables={{ id: this.props.id }}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (data.item) return <p>No Item Found for ID...</p>;
            if (error) return <p>Error: {error.message}</p>;

            let houseMemberArray = [];
            let senateMemberArray = [];
            let legislatorHouseArray = [];
            let legislatorSenateArray = [];
            let candidateName = "";

            houseMembers.map(hm => {
              var dis = hm.district;
              var st = hm.state;
              houseMemberArray.push(hm.label + ", " + st + "-" + dis);
            });

            senateMembers.map(se => {
              var st = se.state;
              senateMemberArray.push(se.label + ", " + st);
            });

            legislators.map(leg => {
              var arr = leg.terms;

              var recentterm = arr[arr.length - 1];
              if (recentterm.district == undefined) {
                legislatorSenateArray.push(
                  leg.name.first + " " + leg.name.last + ", " + recentterm.state
                );
              } else {
                legislatorHouseArray.push(
                  leg.name.first +
                    " " +
                    leg.name.last +
                    ", " +
                    recentterm.state +
                    "-" +
                    recentterm.district
                );
              }
            });

            const statedis = this.props.candState + "-" + this.props.candDistrict;

            houseMemberArray.map(hma => {
              let name = hma.split(", ");
              if (name[1] == statedis) {
                legislatorHouseArray.map(lha => {
                  let legname = lha.split(", ");
                  if (legname[1] == name[1]) {
                    candidateName = name[0];
                  }
                });
              }
            });

            // let tally = 0;
            // tally = tally + 10;
            // tally = tally + 5;


            // console.log(tally);

            var lowest = Number.POSITIVE_INFINITY;
            var highest = Number.NEGATIVE_INFINITY;
            var tmp;

            // Loops through all possible scripts
             data.campaignScripts.map((cScript, i) => {

              let tally = 0;

              if (cScript.data[0]) {
                var arraycontainskeyword =
                  cScript.data.indexOf(candidateName) > -1;
                if (arraycontainskeyword == true) {
                  tally = tally + 10;
                }
              }

              if (cScript.targetCondition3) {
                if (this.props.candParty === "Democratic Party") {
                  if (cScript.targetCondition3 == "Democrat") {
                    tally = tally + 1;
                  }
                } else {
                  if (cScript.targetCondition3 == "Republican") {
                    tally = tally + 1;
                  }
                }
              }

              if (cScript.targetCondition4) {
                if (this.props.candState) {
                  if (this.props.candState == cScript.targetCondition4) {
                    tally = tally + 5;
                  }
                }
              }

              if (cScript.targetCondition2) {
                this.state.targetCandidates.map((cand, i) => {
                  var scriptID = cand.id;
                  // Loops through all legislators. Adds 10 to ranked score.
                  legislators.map(q => {
                    if (
                      q.id.bioguide === scriptID &&
                      cand.answer === cScript.targetCondition2
                    ) {
                      if(q.name.official_full == candidateName) {
                        tally = tally + 3
                      }
                    }
                  });
                });
              }

              cScript.tally = tally;

              tmp = cScript.tally;

              if (tmp < lowest) {
                lowest = tmp;
              }
              if (tmp > highest) {
                highest = tmp;
              }

              console.log(highest);


              // if (cScript.tally == 10) {
                // return (
                //   <div className="repNameScript" key={i}>
                //     <h1>{cScript.title}</h1>
                //     {cScript.data}
                //     <br />
                //     {cScript.targetCondition2}
                //     <br />
                //     {cScript.targetCondition3}
                //     <br />
                //     {cScript.targetCondition4}
                //     {cScript.tally}
                //     <div className="scriptContainer">
                //       <div
                //         dangerouslySetInnerHTML={{
                //           __html: cScript.scriptContent
                //         }}
                //       />
                //     </div>
                //   </div>
                // );
              // }
            });

            // console.log(highest);

            return data.campaignScripts.map((cScript, i) => {
              if (cScript.tally == highest) {
                return (
                  <div className="repNameScript" key={i}>
                    <h1>{cScript.title}</h1>
                    {/* {cScript.data}
                    <br />
                    {cScript.targetCondition2}
                    <br />
                    {cScript.targetCondition3}
                    <br />
                    {cScript.targetCondition4}
                    {cScript.tally} */}
                    <div className="scriptContainer">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: cScript.scriptContent
                        }}
                      />
                    </div>
                  </div>
                );
              }
            });

          }}
        </Query>
      </div>
    );
  }
}

export default MatchedScripts;
