import React, { Component } from "react";
import gql from "graphql-tag";
import Router from "next/router";
import { Mutation } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import ScriptListing from "./ScriptListing";
import Tabs from "./Tabs";

import MainStyles from "./styles/MainStyles";

const CallYourRepContainer = styled.div`
  margin-bottom: 100px;
  h2 {
    border-bottom: 3px solid gray;
  }
  .ck-content {
    height: 200px;
  }
`;

const CREATE_CAMPAIGN_MUTATION = gql`
  mutation CREATE_CAMPAIGN_MUTATION(
    $title: String!
    $connectKey: String!
    $targetType: String!
    $dynamicScripts: String!
    $generateURLAlias: String!
    $customURL: String!
    $callBody: String!
    $defaultScript: String!
    $expiration: String!
  ) {
    createCampaignItem(
      title: $title
      connectKey: $connectKey
      targetType: $targetType
      dynamicScripts: $dynamicScripts
      generateURLAlias: $generateURLAlias
      customURL: $customURL
      expiration: $expiration
      callBody: $callBody
      defaultScript: $defaultScript
    ) {
      id
    }
  }
`;

class CampaignItem extends Component {
  state = {
    title: "",
    connectKey: "",
    targetType: "",
    dynamicScripts: "",
    generateURLAlias: false,
    customURL: "",
    callBody: "",
    defaultScript: "",
    expiration: false,
    isServer: true
  };

  handleCheckboxChange = e => {
    console.log("checkbox changed!", e);
    this.setState({ generateURLAlias: e.target.checked });
  };

  toggleIsChecked() {
    console.log("toggling isChecked value!");
    this.setState({ generateURLAlias: !this.state.generateURLAlias });
  }

  handleButtonClick = e => {
    console.log("button was pressed!", e);
    this.toggleIsChecked();
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
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

      <Mutation mutation={CREATE_CAMPAIGN_MUTATION} variables={this.state}>
        {(createCampaignItem, { error, loading }) => (
          <div>
            <Error error={error} />

            <MainStyles>

              <form
                id="createCampaignItem"
                onSubmit={async e => {
                  e.preventDefault();
                  const res = await createCampaignItem();

                  Router.push({
                    pathname: "/dashboard"
                  });
                }}
              >

                <h1>SET TARGETING</h1>

                <div className="onoffswitchcontainer">
                  LIVE
                  <div className="onoffswitch">
                    <input
                      checked={this.state.expiration}
                      onChange={this.handleCheckboxChange}
                      type="checkbox"
                      name="expiration"
                      className="onoffswitch-checkbox"
                      id="myonoffswitch"
                    />
                    <label
                      className="onoffswitch-label"
                      htmlFor="myonoffswitch"
                    >
                      <span className="onoffswitch-inner"></span>
                      <span className="onoffswitch-switch"></span>
                    </label>
                  </div>
                </div>

                <input
                  type="text"
                  id="settargettitle"
                  name="title"
                  placeholder="CLICK TO CALL CAMPAIGN TITLE"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />

                <p>
                  Lorem ipsum sit amet, consectur adispdising eli. Prion
                  ultrices ex at mollis. Donec sed row nf.
                </p>

                <input
                  type="text"
                  id="connectkey"
                  name="connectKey"
                  placeholder="Connect Key"
                  required
                  value={this.state.connectKey}
                  onChange={this.handleChange}
                />

                <div className="radiobtn-section">
                  <h3>Target Type</h3>
                  <label>
                    <input
                      type="radio"
                      name="targetType"
                      value="US House"
                      checked={this.state.targetType === "US House"}
                      onChange={this.handleChange}
                    />
                    US House
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="targetType"
                      value="US Senate"
                      checked={this.state.targetType === "US Senate"}
                      onChange={this.handleChange}
                    />
                    US Senate
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="targetType"
                      value="Other"
                      checked={this.state.targetType === "Other"}
                      onChange={this.handleChange}
                    />
                    Other
                  </label>
                </div>

                <div className="radiobtn-section">
                  <h3>Dynamic Scripts</h3>
                  <label>
                    <input
                      type="radio"
                      name="dynamicScripts"
                      value="Yes"
                      checked={this.state.dynamicScripts === "Yes"}
                      onChange={this.handleChange}
                    />
                    Yes
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="dynamicScripts"
                      value="No"
                      checked={this.state.dynamicScripts === "No"}
                      onChange={this.handleChange}
                    />
                    No
                  </label>
                </div>

                {/* <div className="URLPathSettings">
                  <h2>URL Path Settings</h2>

                  <label>
                    <input
                      type="checkbox"
                      id="generateURLAlias"
                      name="generateURLAlias"
                      checked={this.state.generateURLAlias}
                      onChange={this.handleCheckboxChange}
                    />
                    <p>
                      Generate automatic URL alias <br /> Uncheck this to create
                      a custom alias below
                    </p>
                  </label>

                  <label>
                    URL alias
                    <input
                      onChange={this.handleChange}
                      type="text"
                      id="customURL"
                      placeholder="Custom URL"
                      value={this.state.customURL}
                      name="customURL"
                    />
                  </label>

                  <p>
                    Optionally specify an alternative URL by which this content
                    can be accessed. For example, type "about" when writing an
                    about page. Use a relative path and don't add a trailing
                    slash or the URL alias won't work.
                  </p>
                </div> */}

                <CallYourRepContainer>
                  <h2>CALL YOUR REPRESENTATIVE</h2>
                  {this.CKEditor && (
                    <this.CKEditor
                      name="callbody"
                      data={this.state.callBody}
                      editor={this.ClassicEditor}
                      onInit={editor => {
                        console.log(editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ callBody: data });
                      }}
                    />
                  )}
                </CallYourRepContainer>

                <CallYourRepContainer>
                  <h3>Create Default Script Version</h3>
                  {this.CKEditor && (
                    <this.CKEditor
                      name="defaultScript"
                      data={this.state.defaultScript}
                      editor={this.ClassicEditor}
                      onInit={editor => {
                        console.log(editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ defaultScript: data });
                      }}
                    />
                  )}
                </CallYourRepContainer>

                <div className="upload-files">
                  <button type="submit">Save</button>
                </div>
              </form>
            </MainStyles>
          </div>
        )}
      </Mutation>
    );
  }
}

export default CampaignItem;
export { CREATE_CAMPAIGN_MUTATION };
