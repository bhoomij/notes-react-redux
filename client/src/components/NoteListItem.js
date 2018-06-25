import React from 'react';
import { Link } from 'react-router-dom';

const NoteListItem = ({ note }) => {

    return (
        < Link to={`/${note.id}`} className="list-group-item list-group-item-action flex-column align-items-start" >
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{note.title}</h5>
                {/* <small>3 days ago</small> */}
            </div>
            <p className="mb-1">
                {note.body}
            </p>
            {/* <small>Donec id elit non mi porta.</small> */}
        </Link >
    );
};

export default NoteListItem;