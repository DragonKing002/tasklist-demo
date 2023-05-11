import FormComponent from './FormComponent';
import React from 'react';
import "./compStyling/MainContainer.css";

const MainContainer = (props) => {

    const indexFlow = props.indexFlow;
    const Schema = [{
        "title": "Embedded Form",
        "description": "A simple form example.",
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First name"
          },
          "lastName": {
            "type": "string",
            "title": "Last name"
          },
          "Age": {
            "type": "integer"
          },
          "uri": {
            "type": "string",
            "format": "uri",
            "title": "GitHub"
          },
          "email-id": {
            "type": "string",
            "format": "email"
          },
          "password": {
            "type": "string",
            "title": "Password"
          },
          "optionsEnumRadio": {
            "type": "string",
            "title": "Gender",
            "enum": [
              "Male",
              "Female",
              "I prefer not to say"
            ]
          }
        }
      },{
        "title": "Embedded Form",
        "description": "A simple form example.",
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First name"
          },
          "lastName": {
            "type": "string",
            "title": "Last name"
          },
          "Age": {
            "type": "integer"
          }}
      },{
        "title": "Embedded Form",
        "description": "A simple form example.",
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First name"
          },
          "lastName": {
            "type": "string",
            "title": "Last name"
          },
          "Age": {
            "type": "integer"
          }
        }
      },{
        "title": "Embedded Form",
        "description": "A simple form example.",
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First name"
          },
          "lastName": {
            "type": "string",
            "title": "Last name"
          },
          "Age": {
            "type": "integer"
          },
          "uri": {
            "type": "string",
            "format": "uri",
            "title": "GitHub"
          }
        }
      },]

    return(
        <div className="parentContainer">
            <FormComponent Schema={Schema[indexFlow]}/>
        </div>
    );
}

export default MainContainer;