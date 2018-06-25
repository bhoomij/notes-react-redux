import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/notes';

import NoteListItem from './NoteListItem';

class NotesList extends Component {

    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        if (!this.props.notes) {
            return <div>Loading...</div>
        }
        const noteList = this.props.notes.map(note => {
            return < NoteListItem note={note} key={note.id} />
        });
        return (
            <div className="col-md-3" style={{ maxHeight: '500px', overflowY: 'scroll' }} >
                <div className="list-group">
                    {noteList}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ notes }) {
    return { notes };
}

export default connect(mapStateToProps, actions)(NotesList);