import React, { useState, useEffect } from 'react';
import "./BlogCard.css";
import { Link } from 'react-router-dom';
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
dayjs.extend(calendar);

const BlogCard = ({blog}) => {
	return (
		<Link to={`/blogs/${blog.id}`}>
			<div className="blog-card">
				<div className="img">
					<img src={`${blog.attributes.cover}`} alt="" />
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
}
 
export default BlogCard;