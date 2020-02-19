import React, { Component } from 'react';


class Question extends React.Component {

    constructor(props) {

      super(props);

      const targetType = [];

      this.props.questionChoices.map(tt => {

        if(tt.terms[0].type == "rep" && props.targetType == "US House") {
          targetType.push(tt);
        } else if(tt.terms[0].type == "sen" && props.targetType == "US Senate") {
          targetType.push(tt);
        }

      })


      this.state = {
        answers: props.data,
        initNames: targetType,
        names: targetType,
        targetTypes: props.targetType
      };

      this.onInput = this.onInput.bind(this);
      this.buildRadioButtons = this.buildRadioButtons.bind(this);
    }

    filterList = (event) => {
      event.preventDefault();

      let items = this.state.initNames;

      items = items.filter((item) => {

        let fname = item.name.official_full;
        let dis = item.terms[0].state;
        let party = item.terms[0].party;

        if(fname.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
          return item;
        } else if(dis.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
          return item;
        } else if(party.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
          return item;
        }

      });

      this.setState({names: items});

    }

    handleSelectChange = (event) => {
      let value = event.target.value;
      this.setState({executeStatus: value});
    };


    executeTasks = (event) => {

      let questionChoices = this.props.questionChoices;
      let names = this.state.names;
      let stateanswers = this.state.answers;
      let option = this.state.executeStatus;

      let newstateanswers = [];
      let qcs = [];

      let answers = [];

      // Loops through search results
      names.map(name => {
        // Assigns action to candidates
        name.answer = option;
        let id = name.id.bioguide;
        let answer = { id , answer: name.answer };
        answers.push(answer);
      });

      if(stateanswers) {
        // Update existing candidates with new answers
        stateanswers.map(sans => {
          let sansID = sans.id;
          answers.map(ans => {
            if(sansID === ans.id) {
              sans.answer = ans.answer
              // answers.shift();
            }
          });
          newstateanswers.push(sans);
        });
        this.setState({answers: newstateanswers}, () => console.log(this.state.answers));
      } else {
        this.setState({answers}, () => console.log(this.state.answers));
      }

    }


    onInput(e, props) {
      // e.preventDefault();
      const id = e.target.name;
      const answer2 = { id, answer: e.target.value };
      let answers;
      if(this.state.answers) {
        if (this.state.answers.some(answer => answer.id === id)) {
          answers = [...this.state.answers.filter(answer => answer.id !== id), answer2];
        } else {
          answers = [...this.state.answers, answer2];
        }
      } else {
        answers = [answer2];
      }

      this.setState({ answers }, () => console.log(this.state.answers));

    }

    buildRadioButtons(arr, type, id, checked) {

      return arr.map((choice, i) => {

        if(choice == checked) {
          return (
            <React.Fragment key={i}>
              <input
                className={checked+" trueee"}
                onChange={this.onInput}
                onClick={this.onInput}
                type="radio"
                id={choice+"-"+id}
                name={id}
                checked={true}
                value={choice}
              />
              <label htmlFor={choice+"-"+id} className={choice+"Label"}>{choice}</label>
            </React.Fragment>
         )
        } else {
          return (
            <React.Fragment key={i}>
              <input
                className={checked+" falseee"}
                onChange={this.onInput}
                onClick={this.onInput}
                type="radio"
                id={choice+"-"+id}
                name={id}
                checked={false}
                value={choice}
              />
              <label htmlFor={choice+"-"+id} className={choice+"Label"}>{choice}</label>
            </React.Fragment>
          )
        }
      }
    )
  }

    render() {

        var iterator = this.state.names.map((question, i) => {


        const choices = ["support", "oppose", "other", "none"];
        const questionType = "radio";
        let questionText;
        if(question.terms[0].type === "sen") {
           questionText = question.name.official_full+" - "+question.terms[0].party+" - "+question.terms[0].state;
        } else {
           questionText = question.name.official_full+" - "+question.terms[0].party+" - "+question.terms[0].state+"-"+question.terms[0].district;
        }
        const questionID = question.id.bioguide;

        if(this.state.answers && this.state.names) {
          this.state.answers.map(item => {
            if(item.id == questionID && choices.includes(item.answer)) {
              question.answer = item.answer;
            }
          });
        } else {
          question.answer = '';
        }

        return (
          <div className="candidatePerson" key={i}>
            <p>{questionText}</p>
            <div className="switch-field">
              {this.buildRadioButtons(choices, questionType, questionID, question.answer)}
            </div>
          </div>
        );
      });
      return (
        <React.Fragment>
          <div id="candidateSearch">
            <label>Filter: </label>
            <input id="candidateSearch" type="text" placeholder="Search" onChange={this.filterList} />
            <div className="executeTasks">

              <label>Execute: </label>

              <select
                onChange={this.handleSelectChange}
                value={this.state.candidateStance}
                name="candidateStance"
                className="select-css"
              >
                <option value="">Choose an Option</option>
                <option value="support">Support</option>
                <option value="oppose">Oppose</option>
                <option value="other">Other</option>
                <option value="none">None</option>
              </select>

              <a onClick={this.executeTasks}>Execute</a>

            </div>

          </div>
          <div id="targetPeopleContainer">
            {iterator}
          </div>
        </React.Fragment>
      );
    }
  }


  export default Question;