import React, { Component } from "react";
import gql from "graphql-tag";
import Router from 'next/router';
import { Mutation, Query } from "react-apollo";
import Error from './ErrorMessage';
import DynamicSelect from "./DynamicSelect";
import {houseMembers, senateMembers} from "../lib/people";




const SINGLE_SCRIPT_QUERY = gql`
  query SINGLE_SCRIPT_QUERY($id: ID!) {
    campaignScript(where: { id: $id }) {
      id
      title
      scriptContent
      campaignID
      data
      targetCondition2
      targetCondition3
      targetCondition4
    }
  }
`;

const UPDATE_SCRIPT_MUTATION = gql`
  mutation UPDATE_SCRIPT_MUTATION(
    $id: ID!
    $title: String
    $scriptContent: String
    $campaignID: String
    $data: Json
    $targetCondition2: String
    $targetCondition3: String
    $targetCondition4: String
  ) {
    updateCampaignScript(
      id: $id
      title: $title
      scriptContent: $scriptContent
      campaignID: $campaignID
      data: $data
      targetCondition2: $targetCondition2
      targetCondition3: $targetCondition3
      targetCondition4: $targetCondition4
    ) {
      id
      title
      scriptContent
      campaignID
      data
      targetCondition2
      targetCondition3
      targetCondition4

    }
  }
`;


class UpdateScript extends Component {

  state = {};

  onDropdownChange = (currentNode, selectedNodes) => {
    let targetCondish = [];
    targetCondish.push(currentNode.label);
    if (selectedNodes) {
      selectedNodes.map(selectedItems => {
        targetCondish.push(selectedItems.label);
        // console.log(targetCondish);
      });
      targetCondish.shift();
    }

    this.setState({ data: targetCondish });
    console.log(this.state);
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  handleSelectChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log( {[name] : value} );
  };

  componentDidMount() {
    // SSR doesn't fire ComponentDidMount, so we import CKEditor inside of it and store it as a component prop
    this.CKEditor = require("@ckeditor/ckeditor5-react");
    this.ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
    this.setState({ isServer: false }); // We just do this to toggle a re-render
  }

  render() {
    return (
      <Query query={SINGLE_SCRIPT_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (data.item) return <p>No Item Found for ID...</p>;
          if (error) return <p>Error: {error.message}</p>;
            console.log(data);
          return (
            <Mutation mutation={UPDATE_SCRIPT_MUTATION} variables={this.state}>
              {(updateCampaignScript, { error, loading }) => (
                  <div id="createCampaignScriptItem">
                  <Error error={error} />

                  <h1>Update Script</h1>

                  <form
                    onSubmit={async e => {
                      e.preventDefault();

                      const res = await updateCampaignScript({
                        variables: {
                            id: this.props.id,
                            ...this.state,
                        }
                    });

                      Router.push({
                          pathname: '/update',
                          query: {id: data.campaignScript.campaignID},
                      });
                    }}
                  >

                    <h2>Update Script Version</h2>

                    <input
                      type="text"
                      id="newVersionName"
                      name="title"
                      required
                      placeholder="Version Name"
                      defaultValue={data.campaignScript.title}
                      onChange={this.handleChange}
                    />

                    <div className="setTargetingCondition">
                      <h3>Set Targeting Condition</h3>

                      <DynamicSelect defaultValue={data.campaignScript.data} data={houseMembers} onChange={this.onDropdownChange} />

                      <div className="addNewCondition">
                        <p>
                          <i>
                            <b>OR</b>
                          </i>
                        </p>
                        <div className="newConditionRow">
                          <select
                            name="targetCondition2"
                            onChange={this.handleSelectChange}
                            defaultValue={data.campaignScript.targetCondition2}
                            value={this.state.targetCondition2}
                          >
                            <option value="">Support/Oppose</option>
                            <option value="support">Support</option>
                            <option value="oppose">Oppose</option>
                            <option value="neither">Neither</option>
                          </select>
                        </div>
                      </div>

                      <div className="addNewCondition">
                        <p>
                          <i>AND</i>
                        </p>
                        <div className="newConditionRow">
                          <select
                            name="targetCondition3"
                            onChange={this.handleSelectChange}
                            defaultValue={data.campaignScript.targetCondition3}
                            value={this.state.targetCondition3}
                          >
                            <option value="">Party</option>
                            <option value="Republican">Republican</option>
                            <option value="Democrat">Democrat</option>
                            <option value="Independent">Independent</option>
                          </select>
                        </div>
                      </div>

                      <div className="addNewCondition">
                        <p>
                          <i>AND</i>
                        </p>
                        <div className="newConditionRow">
                          <select
                            name="targetCondition4"
                            onChange={this.handleSelectChange}
                            defaultValue={data.campaignScript.targetCondition4}
                            value={this.state.targetCondition4}
                          >
                            <option value="">State</option>
                            <option value="AL">Alabama - AL</option>
                            <option value="AK">Alaska - AK</option>
                            <option value="AZ">Arizona - AZ</option>
                            <option value="AR">Arkansas - AR</option>
                            <option value="CA">California - CA</option>
                            <option value="CO">Colorado - CO</option>
                            <option value="CT">Connecticut - CT</option>
                            <option value="DE">Delaware - DE</option>
                            <option value="FL">Florida - FL</option>
                            <option value="GA">Georgia - GA</option>
                            <option value="HI">Hawaii - HI</option>
                            <option value="ID">Idaho - ID</option>
                            <option value="IL">Illinois - IL</option>
                            <option value="IN">Indiana - IN</option>
                            <option value="IA">Iowa - IA</option>
                            <option value="KS">Kansas - KS</option>
                            <option value="KY">Kentucky - KY</option>
                            <option value="LA">Louisiana - LA</option>
                            <option value="ME">Maine - ME</option>
                            <option value="MD">Maryland - MD</option>
                            <option value="MA">Massachusetts - MA</option>
                            <option value="MI">Michigan - MI</option>
                            <option value="MN">Minnesota - MN</option>
                            <option value="MS">Mississippi - MS</option>
                            <option value="MO">Missouri - MO</option>
                            <option value="MT">Montana - MT</option>
                            <option value="NE">Nebraska - NE</option>
                            <option value="NV">Nevada - NV</option>
                            <option value="NH">New Hampshire - NH</option>
                            <option value="NJ">New Jersey - NJ</option>
                            <option value="NM">New Mexico - NM</option>
                            <option value="NY">New York - NY</option>
                            <option value="NC">North Carolina - NC</option>
                            <option value="OH">Ohio - OH</option>
                            <option value="OK">Oklahoma - OK</option>
                            <option value="OR">Oregon - OR</option>
                            <option value="PA">Pennsylvania - PA</option>
                            <option value="RI">Rhode Island - RI</option>
                            <option value="SC">South Carolina - SC</option>
                            <option value="SD">South Dakota - SD</option>
                            <option value="TN">Tennessee - TN</option>
                            <option value="TX">Texas - TX</option>
                            <option value="UT">Utah - UT</option>
                            <option value="VT">Vermont - VT</option>
                            <option value="VA">Virginia - VA</option>
                            <option value="WA">Washington - WA</option>
                            <option value="WV">West Virginia - WV</option>
                            <option value="WI">Wisconsin - WI</option>
                            <option value="WY">Wyoming - WY</option>
                          </select>
                        </div>
                      </div>

                    </div>

                    <h2>Script Content</h2>

                    {this.CKEditor && (
                      <this.CKEditor
                        name="scriptContent"
                        data={data.campaignScript.scriptContent}
                        editor={this.ClassicEditor}
                        onInit={editor => {
                          console.log(editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          this.setState({ scriptContent: data });
                        }}
                      />
                    )}

                    <button type="submit">Save</button>
                  </form>
                </div>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateScript;
