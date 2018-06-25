import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from './common/InputField';
import TextAreaField from './common/TextareaField';
import * as actions from '../actions/notes';

class ShowNote extends Component {

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

    componentWillReceiveProps(nextProps, nextState) {
        if (this.state.id !== nextProps.match.params.id) {
            this.props.getNote(nextProps.match.params.id)
        }
        if (this.state.id !== nextProps.note.id) {
            const { id, title, body } = nextProps.note;
            this.setState({
                id,
                title,
                body,
            });
        }
    }

    componentDidMount() {
        this.props.getNote(this.props.match.params.id);
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


        console.log(Object.keys(errors).length);
        if (!Object.keys(errors).length) {
            const newNote = {
                id: this.state.id,
                title: this.state.title,
                body: this.state.body,
            }
            this.props.updateNote(newNote);
        }
    }

    render() {
        const { title, body, errors } = this.state;
        console.log('1', errors.title);
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

function mapStateToProps({ note }) {
    return { note };
}

export default connect(mapStateToProps, actions)(ShowNote);