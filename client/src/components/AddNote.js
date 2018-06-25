import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from './common/InputField';
import TextAreaField from './common/TextareaField';
import * as actions from '../actions/notes';

class AddNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            body: '',
            errors: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const errors = {}
        if (this.state.title === '') {
            errors.title = 'Title field is required'
            this.setState({ errors })
        }
        if (this.state.body === '') {
            errors.body = 'Body field is required'
            this.setState({ errors })
        }

        if (!Object.keys(errors).length) {
            const newNote = {
                title: this.state.title,
                body: this.state.body,
            }
            this.props.addNote(newNote);
            this.setState({ errors: {} })
        }
    }

    render() {
        const { title, body, errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <InputField
                    placeholder="Enter title"
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                />
                <TextAreaField
                    placeholder="Enter description"
                    name="body"
                    value={body}
                    onChange={this.onChange}
                    error={errors.body}
                />
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(AddNote);