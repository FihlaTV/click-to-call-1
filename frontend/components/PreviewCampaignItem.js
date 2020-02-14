import React, { Component } from "react";
import gql from "graphql-tag";
import Router from "next/router";
import { useRouter } from 'next/router';

import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import MainStyles from "./styles/MainStyles";
import MatchedScripts from "./MatchedScripts";
import { FetchType } from "apollo-client";


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


class PreviewCampaignItem extends Component {

  state = {
    error: null,
    isLoaded: false,
    streetAddress: '',
    postalCode: '',
    officeItems: [],
    officialItems: [],
    divisionItems: [],
    candidateParty: '',
    candidateState: '',
    candidateDistrict: '',
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
    console.log(this.state);
  };

  connectSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);

    const res = await fetch("https://secure.mcommons.com/profiles/join", {
      method: "POST",
      body: data
    });

    // const fetchdata = await fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBZJiENz59YA6HdE9fbqdrAYPmayg9i61I&address="+encodeURI(this.state.streetAddress)+"+"+this.state.postalCode)
    //   .then(res => res.json());

      const fetchdata = await fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBZJiENz59YA6HdE9fbqdrAYPmayg9i61I&address=136+E+Scribner+Ave+15801")
      .then(res => res.json());

      console.log(fetchdata);



      if(fetchdata.officials[0]) {


        let dstr = fetchdata.offices[3].divisionId;
        let dres = dstr.split("/cd:");

        this.setState({
          isLoaded: true,
          officeItems: fetchdata.offices,
          officialItems: fetchdata.officials[4].name,
          divisionItems: fetchdata.divisions,
          candidateParty: fetchdata.officials[4].party,
          candidateState: fetchdata.normalizedInput.state,
          candidateDistrict: dres[1]
        });
      } else {
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      }




    this.setState({ shouldHide: true });
    this.setState({ shouldHide2: true });
    this.setState({ shouldHide3: false });

  }


  componentDidMount = e => {
    console.log(this.props.id);
    // Router.push('/custom-url', { shallow: true })




  }


  render() {



    return (

      <Query
        query={SINGLE_CAMPAIGN_ITEM_QUERY}
        variables={{ id: this.props.id }}
      >
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          console.log(data.campaignItem);
          if(data.campaignItem.expiration === 'false') {
            return (
              <MainStyles>
                <p className="expired">This campaign has expired.</p>
              </MainStyles>

            );
          } else {

          return (
            <div className="frontEndPage">
              <Error error={error} />
              <MainStyles>
                <Head>
                  <title>{data.campaignItem.title}</title>
                  <meta
                    property="og:site_name"
                    content="Indivisible"
                  />
                  <meta
                    property="og:type"
                    content="website"
                  />
                  <meta
                    property="og:title"
                    content="Indivisible"
                  />
                  <meta
                    property="og:url"
                    content="https://www.facebook.com/indivisibleguide/"
                  />
                  <meta
                    property="og:description"
                    content={data.campaignItem.facebookBody}
                  />
                  <meta
                    property="og:image"
                    content={data.campaignItem.facebookImage}
                  />
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta
                    name="twitter:site"
                    content="https://twitter.com/indivisibleteam"
                  />
                  <meta name="twitter:url" content="https://indivisible.org" />
                  <meta
                    name="twitter:title"
                    content={"Indivisible -" + data.campaignItem.title}
                  />
                  <meta
                    name="twitter:description"
                    content={data.campaignItem.twitterBody}
                  />
                  <meta
                    name="twitter:image"
                    content={data.campaignItem.twitterImage}
                  />
                </Head>

                <div
                  className={
                    this.state.shouldHide
                      ? "hidden frontEndHero"
                      : "frontEndHero"
                  }
                >
                  <div className="heroLeft">
                    <h2>{data.campaignItem.title}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.campaignItem.callBody
                      }}
                    />
                  </div>
                  <div className="heroRight">
                    <h3>
                      Fill out this form to get started. Providing your street address helps us target your call.
                    </h3>
                    <form onSubmit={this.connectSubmit}>
                      <input
                        type="hidden"
                        name="opt_in_path[]"
                        value="OP524334C35D99531FDB698DA8A9BBC181"
                      />
                      {/* <input type="hidden" name="redirect_to" value="http://yoursite.com/your_submission_confirmation_page" /> */}
                      <input
                        type="hidden"
                        name="mconnect"
                        // value="VO62798AD34DD5F773E028AD71DC139A9F"
                        tabIndex="-1"
                      />
                      <input
                        // name="person[street1]"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.streetAddress}
                        name="streetAddress"
                        required
                        placeholder="Street Name"
                      />
                      <input
                        // name="person[postal_code]"
                        onChange={this.handleChange}
                        value={this.state.postalCode}
                        name="postalCode"
                        required
                        type="text"
                        placeholder="ZIP"
                      />
                      <input
                        name="person[phone]"
                        type="number"
                        required
                        placeholder="Mobile Number"
                      />
                      <input type="submit" value="Call Me"  />
                    </form>


                    <h6>
                      By providing your cell phone number, you agree to receive calls and texts about important updates, ways to take action, and information about events in your area from Indivisible, approximately 3 to 5 times a month. Message&amp; data rates may apply. Reply with STOP to quit receiving texts at any time.
                    </h6>


                    <ul>
                      {/* {this.state.divisionItems.map(item => (
                        console.log(item)
                      ))} */}
                    </ul>


                    {/* <ul>
                      {this.state.officialItems.map(item => (
                        <li key={item.name}>
                          {console.log(item.address)}
                          {item.name}
                          <br />
                          {item.phones}
                          <br />
                          {item.channels[0].type}
                          <img src={item.photoUrl} alt="repimage" width="100%" />

                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>

                <div
                  className={
                    this.state.shouldHide2
                      ? "stepTwoSection"
                      : "hidden stepTwoSection"
                  }
                >
                  <div className="inner">
                    <h2>Your Phone Will Be Ringing Shortly...</h2>
                    <h3>
                      Please make sure you have your phone nearby, and that the
                      volume is turned up.
                    </h3>


                    <MatchedScripts
                      id={this.props.id}
                      candidates={data.campaignItem.targetCandidates}
                      matchedCand={this.state.officialItems}
                      candParty={this.state.candidateParty}
                      candState={this.state.candidateState}
                      candDistrict={this.state.candidateDistrict}
                    />


                    <div className="repNameScript">
                      <h1>DEFAULT SCRIPT</h1>
                      <div className="scriptContainer">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.campaignItem.defaultScript
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="imDone">
                    <div className="imDoneContainer">
                      <button
                        onClick={e => {
                          e.preventDefault();
                          this.setState({ shouldHide: true });
                          this.setState({ shouldHide2: false });
                          this.setState({ shouldHide3: true });
                        }}
                      >
                        I'm Done!
                      </button>
                      {/* <Link href="#" >
                      <a >
                        I'm talking to a different person.
                      </a>
                    </Link> */}
                    </div>
                  </div>
                </div>

                <div
                  className={
                    this.state.shouldHide3
                      ? "stepThreeSection"
                      : "hidden stepThreeSection"
                  }
                >

                  <div className="stepThreeContainer">
                    <h1>
                      THANK <span>YOU!</span>
                    </h1>

                    <h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.campaignItem.thankYouTitle
                        }}
                      />
                    </h2>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.campaignItem.thankYouMessage
                      }}
                    />

                    <button
                      onClick={e => {
                        e.preventDefault();
                        this.setState({ shouldHide: false });
                        this.setState({ shouldHide2: false });
                        this.setState({ shouldHide3: false });
                      }}
                    >
                      Call Again
                    </button>
                  </div>
                </div>

                <form
                  onSubmit={e => this.updateCampaignItem(e, updateCampaignItem)}
                ></form>
              </MainStyles>
            </div>
          );
          }
        }}
      </Query>
    );
  }
}

export default PreviewCampaignItem;
