import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error: ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log(values);
    }


    render() {
        const { handleSubmit } = this.props;
        return (
        <form 
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
            
            >
            <Field 
                label="Title"
                name="title"
                component={this.renderField}
            />
            <Field 
                label="Categories"
                name="categories"
                component={this.renderField}
            />
            <Field 
                label="Content"
                name="content"
                component={this.renderField}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
            <button className="btn btn-alert">Cancel</button>
        </form>
        );
    }
}

function validate(values) {
    //console.log(values) -> { title: '', categories: '', content: '' }
    const errors = {};
    // validate inputs from values object
    if(!values.title) {
        errors.title = "Enter a title!";
    }
    if(!values.categories) {
        errors.categories = "Enter a category.";
    }
    if(!values.content) {
        errors.content = "Enter content.";
    }

    //if error is empty the form is fine to submit
    // if errors has any properties redux assumes form is invalid
    return errors;

}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);