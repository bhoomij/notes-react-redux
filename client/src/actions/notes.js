import { GET_NOTES, GET_NOTE } from './types';

let notes = [
    {
        id: 10,
        title: 'Learn react',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum!'
    },
    {
        id: 11,
        title: 'Plan holiday',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
    },
    {
        id: 12,
        title: 'Pay bill',
        body: 'Lorem, ipsum dolor.'
    }
];

export const getNotes = () => {
    return {
        type: GET_NOTES,
        payload: notes
    };
}

export const getNote = (id) => {
    const note = notes.find(note => note.id === Number(id));
    return {
        type: GET_NOTE,
        payload: note,
    };
}

export const addNote = (note) => {
    note.id = new Date().getUTCMilliseconds();
    notes.unshift(note);
    return {
        type: 'GET_NOTES',
        payload: notes
    };
}

export const updateNote = (note) => {
    var index = notes.findIndex(item => item.id === note.id);
    notes[index].title = note.title;
    notes[index].body = note.body;
    return {
        type: 'GET_NOTES',
        payload: notes
    };
}

export const deleteNote = (note) => {
    if (window.confirm('This CANT be undone, Sure you want to remove this note ?')) {
        var index = notes.findIndex(item => item.id === note.id);
        notes.splice(index, 1);
    }
    return {
        type: 'GET_NOTES',
        payload: notes
    };
}