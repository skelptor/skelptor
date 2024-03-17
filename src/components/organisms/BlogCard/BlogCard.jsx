import React, { useState, useEffect } from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { Chip } from "@mui/material";
dayjs.extend(calendar);

const BlogCard = ({ blog }) => {
	return (
		<Link to={`/blogs/${blog.id}`}>
			<div className="blog-card">
				<div className="img">
					<img src={`${blog.attributes.cover}`} alt="" />
					<Chip
						label={blog.attributes.category.data.attributes.name}
						sx={{
							position: "absolute",
							top: "20px",
							left: "20px",
							zIndex: "1",
							background: "white",
							fontWeight: '600'
						}}
						variant="contained"
					></Chip>
				</div>
				<div className="content">
					<div className="title">{blog.attributes.title}</div>
					<div className="row">
						<p>{blog.attributes.readTime}</p>
						{dayjs(blog.attributes.createdAt).calendar(
							dayjs(blog.attributes.createdAt)
						)}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
