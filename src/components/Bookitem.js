import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const Bookitem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(noteContext)
  const { deleteNote } = context

  const handleClick = () => {
    deleteNote(note._id)
    props.showAlert("Deleted Successfully", "success");
  }
  let url = "#";
  let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1lEBjEh5w6bqOqXUAYnUJn2TqlWCXiqNIQ&usqp=CAU";
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
            <i className="fa-solid fa-trash mx-2" onClick={handleClick}></i>
          </div>
          <p className="card-text">{note.description}
          </p>
          <a href={props.img} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Bookitem;
