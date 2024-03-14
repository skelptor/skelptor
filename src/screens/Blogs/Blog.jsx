import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "marked-react";
import "./Blog.css";
// import BlogCard from "../../components/organisms/Blogcard/Blogcard";
import { getBlog } from "../../services/api";
import { alert } from "../../components/molecules/CustomAlert/alert";

const Blog = () => {
	const params = useParams();
	const [blog, setBlog] = useState();

	const handleGetBlog = async () => {
		const { blogId } = params;
		try {
			const res = await getBlog(blogId);
			setBlog(res.data.data);
		} catch (err) {
			alert({
				message: err.response.data.error.message,
				type: "error",
			});
			console.log(err);
		}
	};

	useEffect(() => {
		handleGetBlog();
	}, []);

	return (
		<div className="blog">
			<section className="section-1">
				{blog && (
					<>
						<div className="heading">{blog.attributes.title}</div>
						<div className="cover">
							<img src={`${blog.attributes.cover}`} alt="" />
						</div>
						<p className="desc">{blog.attributes.description}</p>
						{blog.attributes.contents &&
							blog.attributes.contents.map((section, i) =>
								section.type == "media" ? (
									<div className="img" key={i}>
										<img src={section.img} alt="" />
									</div>
								) : (
									<div
										key={i}
										className={`${section.type}`}
										
									>
											<Markdown>{ section.content }</Markdown>
									</div>
								)
							)}
					</>
				)}
			</section>
			{/* <section className="section-2">
				<div className="heading">
					Our Latest Blogs
				</div>
				<div className="row">
					{
						blogs.map((item, i) => i <= 2 && (
							<BlogCard blog={item} key={item.id}></BlogCard>
						))
					}
				</div>
			</section> */}
		</div>
	);
};

export default Blog;
