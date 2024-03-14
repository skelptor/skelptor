import React, { useState, useEffect, useRef } from 'react';
import Button from "../../components/atoms/Button/Button";
import "./Editor.css";

const ImageBlock = ({ image, setImage, deleteImage }) => {
	const inputRef = useRef();

	return image ? (
		<div className="uploaded-img">
			<img src={URL.createObjectURL(image)} alt="" />
			<div className="delete" onClick={() => deleteImage()}>
				<span className="material-icons">delete</span>
			</div>
		</div>
	) : (
		<div
			className="cover-image-upload"
			// onDragEnter={handleDragDropEvent}
			// onDragOver={handleDragDropEvent}
			// onDrop={(e) => {
			// 	handleDragDropEvent(e);
			// 	setFiles(e, "a");
			// }}
		>
			<p>Cover Image</p>
			<Button
				variant={"filled"}
				color="red"
				endIcon={<span className="material-icons">cloud_upload</span>}
				innerText={"Select files to upload"}
				onClick={() => inputRef.current.click()}
			></Button>
			{/* Hide the crappy looking default HTML input */}
			<input
				ref={inputRef}
				type="file"
				multiple
				style={{ display: "none" }}
				onChange={(e) => {
					setImage(e);
					inputRef.current.value = null;
				}}
			/>
		</div>
	);
}
 
export default ImageBlock;