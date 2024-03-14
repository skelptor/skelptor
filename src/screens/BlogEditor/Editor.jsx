import React, { useState, useEffect, useRef } from "react";
import Button from "../../components/atoms/Button/Button";
import "./Editor.css";
import useFileUpload from "react-use-file-upload";
import ImageBlock from "./ImageBlock";
import { createBlog, uploadImages } from "../../services/api";
import { alert } from "../../components/molecules/CustomAlert/alert";
import { useNavigate } from "react-router-dom";

const Editor = ({
	login,
	logout,
	user,
	emailVerificationOpen,
	authOpen,
	onAuthOpen,
	onAuthClose,
}) => {
	const inputRef = useRef();
	const navigate = useNavigate();

	const {
		files,
		fileNames,
		fileTypes,
		totalSize,
		totalSizeInBytes,
		handleDragDropEvent,
		clearAllFiles,
		createFormData,
		setFiles,
		removeFile,
	} = useFileUpload();

	const [cover, setCover] = useState();
	const [title, setTitle] = useState();
	const [desc, setDesc] = useState();
	const [readTime, setReadTime] = useState();
	const [category, setCategory] = useState();
	const [contents, setContents] = useState([]);
	const [contentImages, setContentImages] = useState([]);
	const [draft, setDraft] = useState(true);

	const handleUploadContentImage = (e, i) => {
		const contentsCopy = contents;
		contentsCopy[i].img = e.target.files[0];
		// setContentImages([...contentImages, e.target.files[0]]);
		// setFiles(e, "a");
		setContents([...contentsCopy]);
	};
	const handleDeleteContentImage = (i) => {
		const contentsCopy = contents;
		contentsCopy[i].img = "";
		setContents([...contentsCopy]);
		// const contentImagesCopy = contentImages;
		// contentImagesCopy.splice(i - 1, 1);
		// setContentImages([...contentImagesCopy]);
	};
	const handleSetContentDesc = (e, i) => {
		const contentsCopy = contents;
		contentsCopy[i].content = e.target.value;
		setContents(contentsCopy);
	};

	useEffect(() => {
		if (!user) onAuthOpen();
	}, [onAuthOpen, user]);

	const handleSubmit = async (publish) => {
		const form = new FormData();

		try {
			const contentsCopy = contents;
			let coverCopy = cover;
			form.append(`files`, cover);
			let res = await uploadImages(form);
			coverCopy = "http://localhost:1337" + res.data[0].url;
			// contents.forEach(content => content.img = res.data)
			for (const content of contentsCopy) {
				// const form = new FormData();
				form.append("files", content.img);
				res = await uploadImages(form);
				content.img = "http://localhost:1337" + res.data[0].url;
			}

			// setContents(contentsCopy);

			const payload = {
				title,
				description: desc,
				cover: coverCopy,
				contents: contentsCopy,
				category,
				visibility: publish,
			};
			console.log("payload", payload);

			res = await createBlog({ data: payload });
			console.log(res.data);

			if (!res.data.error) {
				alert({
					message: "Blog created Successfully",
					type: "success",
				});
				navigate("/blogs");
			} else {
				alert({
					message: res.data.error.message,
					type: "error",
				});
			}
		} catch (err) {
			alert({
				message: err.response.data.error.message,
				type: "error",
			});
			console.log(err);
		}
	};

	return (
		user && (
			<div className="editor">
				<section className="section-1">
					<textarea
						type="text"
						className="title"
						placeholder="title..."
						value={title}
						onInput={(e) => setTitle(e.target.value)}
					/>

					{
						<ImageBlock
							image={cover}
							setImage={(e) => setCover(e.target.files[0])}
							deleteImage={() => setCover(null)}
						></ImageBlock>
					}

					<textarea
						placeholder="description"
						value={desc}
						onInput={(e) => setDesc(e.target.value)}
					></textarea>

					{contents &&
						contents.map((item, i) =>
							item.type == "text" ? (
								<div className="textarea" key={i}>
									<textarea
										placeholder="Enter text here ..."
										value={item.content}
										onInput={(e) =>
											handleSetContentDesc(e, i)
										}
									></textarea>
									<div
										className="delete"
										onClick={() =>
											setContents(
												[...contents].splice(i - 1, 1)
											)
										}
									>
										<span className="material-icons">
											delete
										</span>
									</div>
								</div>
							) : (
								<ImageBlock
									key={i}
									image={item.media}
									setImage={(e) =>
										handleUploadContentImage(e, i)
									}
									deleteImage={() =>
										handleDeleteContentImage(i)
									}
								></ImageBlock>
							)
						)}
					<div className="add-block">
						<Button
							variant={"filled"}
							color="red"
							endIcon={
								<span className="material-icons">add</span>
							}
							innerText={"Add new text block"}
							onClick={() =>
								setContents([...contents, { type: "text" }])
							}
						></Button>
						<Button
							variant={"filled"}
							color="red"
							endIcon={
								<span className="material-icons">add</span>
							}
							innerText={"Add new image"}
							onClick={() => {
								setContents([
									...contents,
									{ type: "media", media: "" },
								]);
								console.log(contents);
							}}
						></Button>
					</div>

					<input type="text" name="" id="" placeholder="Category" />

					<div className="toolbox">
						<Button
							variant={"filled"}
							color={"green"}
							innerText={"Save and Publish"}
							endIcon={
								<span className="material-icons">done</span>
							}
							onClick={() => handleSubmit(true)}
						></Button>
						<Button
							variant={"outlined"}
							color={"green"}
							innerText={"Save as Draft"}
							endIcon={
								<span className="material-icons">done</span>
							}
							onClick={() => handleSubmit(false)}
						></Button>
						<Button
							variant={"outlined"}
							color={"red"}
							innerText={"Delete"}
							endIcon={
								<span className="material-icons">close</span>
							}
						></Button>
					</div>
				</section>
			</div>
		)
	);
};

export default Editor;
