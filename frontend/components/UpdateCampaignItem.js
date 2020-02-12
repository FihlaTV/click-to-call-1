import React, { Component } from "react";
import gql from "graphql-tag";
import Router from "next/router";
import { Mutation, Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import ScriptListing from "./ScriptListing";
import SearchCandidates from "./SearchCandidates";
import Question from "./Question";
import MainStyles from "./styles/MainStyles";
import ScriptItem from "./ScriptItem";
import Tabs from "./Tabs";
import MainLogo from "./MainLogo";
import { questionChoices } from "../lib/questions";
import { legislators } from "../lib/legislators";


const CallYourRepContainer = styled.div`
  margin: 100px 0;
  h2 {
    border-bottom: 3px solid gray;
  }
  .ck-content {
    height: 200px;
  }
`;


const SINGLE_CAMPAIGN_ITEM_QUERY = gql`
  query SINGLE_CAMPAIGN_ITEM_QUERY($id: ID!) {
    campaignItem(where: { id: $id }) {
      id
      title
      connectKey
      customURL
      targetType
      dynamicScripts
      generateURLAlias
      expiration
      callBody
      defaultScript
      targetCandidates
      thankYouTitle
      thankYouMessage
      emailTitle
      emailBody
      facebookTitle
      facebookURL
      facebookBody
      facebookImage
      twitterTitle
      twitterURL
      twitterBody
      twitterImage
    }
  }
`;

const UPDATE_CAMPAIGN_MUTATION = gql`
  mutation UPDATE_CAMPAIGN_MUTATION(
    $id: ID!
    $title: String
    $connectKey: String
    $targetType: String
    $dynamicScripts: String
    $generateURLAlias: String
    $customURL: String
    $expiration: String
    $callBody: String
    $defaultScript: String
    $targetCandidates: Json
    $thankYouTitle: String
    $thankYouMessage: String
    $emailTitle: String
    $emailBody: String
    $facebookTitle: String
    $facebookURL: String
    $facebookBody: String
    $facebookImage: String
    $twitterTitle: String
    $twitterURL: String
    $twitterBody: String
    $twitterImage: String
  ) {
    updateCampaignItem(
      id: $id
      title: $title
      connectKey: $connectKey
      targetType: $targetType
      dynamicScripts: $dynamicScripts
      generateURLAlias: $generateURLAlias
      customURL: $customURL
      expiration: $expiration
      callBody: $callBody
      defaultScript: $defaultScript
      targetCandidates: $targetCandidates
      thankYouTitle: $thankYouTitle
      thankYouMessage: $thankYouMessage
      emailTitle: $emailTitle
      emailBody: $emailBody
      facebookTitle: $facebookTitle
      facebookURL: $facebookURL
      facebookBody: $facebookBody
      facebookImage: $facebookImage
      twitterTitle: $twitterTitle
      twitterURL: $twitterURL
      twitterBody: $twitterBody
      twitterImage: $twitterImage
    ) {
      id
      title
      connectKey
      targetType
      dynamicScripts
      generateURLAlias
      customURL
      expiration
      callBody
      defaultScript
      targetCandidates
      thankYouTitle
      thankYouMessage
      emailTitle
      emailBody
      facebookTitle
      facebookURL
      facebookBody
      facebookImage
      twitterTitle
      twitterURL
      twitterBody
      twitterImage
    }
  }
`;

class UpdateCampaignItem extends Component {
  constructor(props) {
    super(props);
    this.Question1 = React.createRef();
  }

  state = {
    candidatePerspective: []
  };

  handleCheckboxChange = e => {
    this.setState({ generateURLAlias: e.target.checked });
    console.log(this.state);
  };

  handleExpChange = e => {
    this.setState({ expiration: e.target.checked });
    console.log(this.state);
  };

  toggleIsChecked() {
    console.log("toggling isChecked value!");
    this.setState({ generateURLAlias: !this.state.generateURLAlias });
  };

  handleButtonClick = e => {
    console.log("button was pressed!", e);
    this.toggleIsChecked();
  };

  uploadFacebookFile = async e => {
    console.log("uploading file...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sickfits");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/du1f0pd1d/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();
    this.setState({
      facebookImage: file.eager[0].secure_url
    });
  };

  handleSelectChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log({ [name]: value });
  };

  uploadTwitterFile = async e => {
    console.log("uploading file...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sickfits");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/du1f0pd1d/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();
    this.setState({
      twitterImage: file.eager[0].secure_url
    });
  };

  updateCampaignItem = async (e, updateCampaignItemMutation) => {
    e.preventDefault();
    const Question1 = this.Question1.current;
    const res = await updateCampaignItemMutation({
      variables: {
        id: this.props.id,
        targetCandidates: Question1.state.answers,
        ...this.state
      }
    });

    console.log(res);

    Router.push({
      pathname: "/dashboard"
    });
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    console.log(val);
    this.setState({ [name]: val });
  };

  componentDidMount() {
    // SSR doesn't fire ComponentDidMount, so we import CKEditor inside of it and store it as a component prop
    this.CKEditor = require("@ckeditor/ckeditor5-react");
    this.ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
    this.setState({ isServer: false }); // We just do this to toggle a re-render
  };

  render() {

    return (
      <Query
        query={SINGLE_CAMPAIGN_ITEM_QUERY}
        variables={{ id: this.props.id }}
      >
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (data.item) return <p>No Item Found for ID...</p>;
          if (error) return <p>Error: {error.message}</p>;

          return (
            <Mutation
              mutation={UPDATE_CAMPAIGN_MUTATION}
              variables={this.state}
            >
              {(updateCampaignItem, { error, loading }) => (
                <div>
                  <Error error={error} />
                  <MainStyles>
                    <Link href="/dashboard">
                      <a className="breadcrumb">Back to Dashboard</a>
                    </Link>

                    <form
                      id="createCampaignItem"
                      onSubmit={e =>
                        this.updateCampaignItem(e, updateCampaignItem)
                      }
                    >
                      <h1>{data.campaignItem.title}</h1>

                      <div className="onoffswitchcontainer">
                        LIVE
                        <div className="onoffswitch">
                          <input
                            onChange={this.handleExpChange}
                            defaultChecked={ data.campaignItem.expiration == "true" ? true : false }
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

                      <div className="radiobtn-section">
                        <h3>Target Type: {data.campaignItem.targetType}</h3>
                        <h3>
                          Dynamic Scripts:
                          <select
                            name="dynamicScripts"
                            onChange={this.handleSelectChange}
                            defaultValue={data.campaignItem.dynamicScripts}
                            value={this.state.dynamicScripts}
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </h3>
                      </div>

                      <CallYourRepContainer>
                        <h2>CALL YOUR REPRESENTATIVE</h2>
                        {this.CKEditor && (
                          <this.CKEditor
                            name="callbody"
                            data={data.campaignItem.callBody}
                            editor={this.ClassicEditor}
                            onInit={editor => {
                              // console.log(editor)
                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              this.setState({ callBody: data });
                            }}
                          />
                        )}
                      </CallYourRepContainer>

                      <div className="thankYouMessage">
                        <h2>THANK YOU MESSAGE</h2>
                        <input
                          type="text"
                          id="thankYouTitle"
                          name="thankYouTitle"
                          placeholder="Edit Title"
                          required
                          value={data.campaignItem.thankYouTitle}
                          onChange={this.handleChange}
                        />
                        {this.CKEditor && (
                          <this.CKEditor
                            name="thankYouMessage"
                            data={data.campaignItem.thankYouMessage}
                            editor={this.ClassicEditor}
                            onInit={editor => {
                              console.log(editor);
                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              this.setState({ thankYouMessage: data });
                            }}
                          />
                        )}
                      </div>

                      <CallYourRepContainer>
                        <h2>Default Script Version</h2>
                        {this.CKEditor && (
                          <this.CKEditor
                            name="defaultScript"
                            data={data.campaignItem.defaultScript}
                            editor={this.ClassicEditor}
                            onInit={editor => {
                              // console.log(editor)
                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              this.setState({ defaultScript: data });
                            }}
                          />
                        )}
                      </CallYourRepContainer>

                      <ScriptListing props={this.props.id} />

                      <Link
                        href={{
                          pathname: "/script",
                          query: { id: data.campaignItem.id }
                        }}
                      >
                        <a className="addNewScript">Add New Script</a>
                      </Link>


                        <Question
                          data={data.campaignItem.targetCandidates}
                          // questionChoices={questionChoices}
                          questionChoices={legislators}
                          ref={this.Question1}
                          targetType={data.campaignItem.targetType}
                        />

                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>

                      <div className="URLPathSettings">
                        <h2>URL Path Settings</h2>
                        <label>
                          <input
                            type="checkbox"
                            id="generateURLAlias"
                            name="generateURLAlias"
                            defaultChecked={
                              data.campaignItem.generateURLAlias == "true"
                                ? true
                                : false
                            }
                            onChange={this.handleCheckboxChange}
                          />
                          <p>
                            Generate automatic URL alias <br /> Uncheck this to
                            create a custom alias below
                          </p>
                        </label>
                        <label>
                          URL alias
                          <input
                            onChange={this.handleChange}
                            type="text"
                            id="customURL"
                            placeholder="Custom URL"
                            defaultValue={data.campaignItem.customURL}
                            name="customURL"
                          />
                        </label>

                        <p>
                          Optionally specify an alternative URL by which this
                          content can be accessed. For example, type "about"
                          when writing an about page. Use a relative path and
                          don't add a trailing slash or the URL alias won't
                          work.
                        </p>
                      </div>

                      <Tabs>
                        <div label="Email Share">
                          <div className="sharebody">
                            <input
                              type="text"
                              id="emailTitle"
                              name="emailTitle"
                              placeholder="Email Subject Line"
                              defaultValue={data.campaignItem.emailTitle}
                              value={this.state.emailTitle}
                              onChange={this.handleChange}
                            />
                            <input
                              type="text"
                              id="emailBody"
                              name="emailBody"
                              placeholder="Email Body Goes Here"
                              defaultValue={data.campaignItem.emailBody}
                              value={this.state.emailBody}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div label="Facebook Share">
                          <div className="sharebody">
                            <input
                              type="text"
                              id="facebookTitle"
                              name="facebookTitle"
                              placeholder="Facebook Title"
                              value={this.state.facebookTitle}
                              defaultValue={data.campaignItem.facebookTitle}
                              onChange={this.handleChange}
                            />
                            <input
                              type="text"
                              id="facebookURL"
                              name="facebookURL"
                              placeholder="Facebook URL"
                              value={this.state.facebookURL}
                              defaultValue={data.campaignItem.facebookURL}
                              onChange={this.handleChange}
                            />
                            <input
                              type="text"
                              id="facebookBody"
                              name="facebookBody"
                              placeholder="Facebook Description"
                              value={this.state.facebookBody}
                              defaultValue={data.campaignItem.facebookBody}
                              onChange={this.handleChange}
                            />
                            <label>
                              Upload Image
                              <br />
                              <input
                                type="file"
                                id="facebookImage"
                                name="facebookImage"
                                onChange={this.uploadFacebookFile}
                              />
                            </label>

                            {this.state.facebookImage && (
                              <img
                                width="200"
                                src={this.state.facebookImage}
                                alt="Upload Preview"
                              />
                            )}
                            {data.campaignItem.facebookImage && (
                              <img
                                width="200"
                                src={data.campaignItem.facebookImage}
                                alt="Upload Preview"
                              />
                            )}
                          </div>
                        </div>
                        <div label="Twitter Share">
                          <div className="sharebody">
                            <input
                              type="text"
                              id="twitterTitle"
                              name="twitterTitle"
                              placeholder="Twitter Title"
                              value={this.state.twitterTitle}
                              defaultValue={data.campaignItem.twitterTitle}
                              onChange={this.handleChange}
                            />
                            <input
                              type="text"
                              id="twitterURL"
                              name="twitterURL"
                              placeholder="Twitter URL"
                              value={this.state.twitterURL}
                              defaultValue={data.campaignItem.twitterURL}
                              onChange={this.handleChange}
                            />
                            <input
                              type="text"
                              id="twitterBody"
                              name="twitterBody"
                              placeholder="Twitter Description"
                              value={this.state.twitterBody}
                              defaultValue={data.campaignItem.twitterBody}
                              onChange={this.handleChange}
                            />
                            <label>
                              Upload Image
                              <br />
                              <input
                                type="file"
                                id="twitterImage"
                                name="twitterImage"
                                onChange={this.uploadTwitterFile}
                              />
                            </label>
                            {this.state.twitterImage && (
                              <img
                                width="200"
                                src={this.state.twitterImage}
                                alt="Upload Preview"
                              />
                            )}
                            {data.campaignItem.twitterImage && (
                              <img
                                width="200"
                                src={data.campaignItem.twitterImage}
                                alt="Upload Preview"
                              />
                            )}
                          </div>
                        </div>
                      </Tabs>

                      <div className="upload-files">
                        <button type="submit">Save</button>
                      </div>
                    </form>
                  </MainStyles>
                </div>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateCampaignItem;
export { UPDATE_CAMPAIGN_MUTATION };
