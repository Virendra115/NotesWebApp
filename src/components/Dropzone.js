import React from "react";
import { useDropzone } from "react-dropzone";
function Dropzone({ open }) {
    const { getRootProps, getInputProps, acceptedFiles } =
        useDropzone({});
    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));
    const mystyle = {
        textAlign: "center",
        padding: "20px",
        border: "3px blue dashed",
        width: "60%",
        margin: "auto"
    };

    return (
        <div style={mystyle}>
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here</p>
            </div>
            {acceptedFiles.length > 0 && (
                <img alt="not fount" width={"250px"} src={URL.createObjectURL(acceptedFiles[0])} />
            )}
            <aside>
                <ul>{files}</ul>
            </aside>
        </div>
    );

}

export default Dropzone;