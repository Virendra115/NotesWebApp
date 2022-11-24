import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Dropzone from "./Dropzone";

import "../index.css";
const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1lEBjEh5w6bqOqXUAYnUJn2TqlWCXiqNIQ&usqp=CAU";
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const [img, setImage] = useState(null);
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Added Successfully!", "success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={3} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={3} required />
                </div>
                <div>
                    <label htmlFor="title" className="form-label">Image Upload</label>
                    <br />
                    <div className="container">
                        <h2 className="text-center">Drag and Drop here</h2>
                        <Dropzone className="drop-img" />
                    </div>
                </div>
                <br />
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                </div>

                <button disabled={note.title.length < 2 || note.description.length < 2} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>

        </div>
    )
}

export default AddNote