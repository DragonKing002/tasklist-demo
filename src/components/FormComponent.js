import Form from "@rjsf/core";
import React from "react";
import validator from '@rjsf/validator-ajv8';

const FormComponent = (props) => {

    const Schema = props.Schema;

    const schema = require("../jsonFiles/schema.json")
    const formData = require("../jsonFiles/formData.json")
    const uiSchema = require("../jsonFiles/uiSchema.json")

    return (
        <div className="form">
            <Form
                schema={Schema}
                //uiSchema={uiSchema}
                //formData={formData}
                validator={validator}
            >
            </Form>
        </div>
    )
}

export default FormComponent;
