import React, { Component } from "react";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import Router from "next/router";
import { Mutation } from "react-apollo";
import Error from "./ErrorMessage";
import DynamicSelect from "./DynamicSelect";
import {houseMembers, senateMembers} from "../lib/people";


const CREATE_CAMPAIGN_SCRIPT_MUTATION = gql`
  mutation CREATE_CAMPAIGN_SCRIPT_MUTATION(
    $title: String!
    $scriptContent: String!
    $campaignID: String!
    $data: Json
    $targetCondition2: String
    $targetCondition3: String
    $targetCondition4: String
  ) {
    createCampaignScript(
      title: $title
      scriptContent: $scriptContent
      campaignID: $campaignID
      data: $data
      targetCondition2: $targetCondition2
      targetCondition3: $targetCondition3
      targetCondition4: $targetCondition4
    ) {
      id
    }
  }
`;


class CreateScript extends Component {

  state = {
    title: "",
    scriptContent: "",
    campaignID: this.props.id,
    isServer: true,
    data: [],
    targetCondition2: "",
    targetCondition3: "",
    targetCondition4: ""
  };

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
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    // SSR doesn't fire ComponentDidMount, so we import CKEditor inside of it and store it as a component prop
    this.CKEditor = require("@ckeditor/ckeditor5-react");
    this.ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
    this.setState({ isServer: false }); // We just do this to toggle a re-render
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_CAMPAIGN_SCRIPT_MUTATION}
        variables={this.state}
      >
        {(createCampaignScript, { error, loading }) => (
          <div id="createCampaignScriptItem">
            <Error error={error} />

            <h1>Edit Script</h1>

            <form
              onSubmit={async e => {
                e.preventDefault();

                const res = await createCampaignScript();
                console.log(this.state);

                Router.push({
                    pathname: '/update',
                    query: {id: this.props.id},
                });
              }}
            >

              <h2>Create New Script Version</h2>

              <input
                type="text"
                id="newVersionName"
                name="title"
                required
                placeholder="Version Name"
                value={this.state.title}
                onChange={this.handleChange}
              />

              <div className="setTargetingCondition">

                <h3>Set Targeting Condition</h3>

                <DynamicSelect data={houseMembers} onChange={this.onDropdownChange} />

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
                  name="defaultscript"
                  data={this.state.scriptContent}
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
  }
}

export default CreateScript;
