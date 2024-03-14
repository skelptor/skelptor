import React, { useState, useEffect } from "react";
import "./Blogs.css";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import Button from "../../components/atoms/Button/Button";
import BlogCard from "../../components/organisms/Blogcard/Blogcard";
import CategoryMenu from "../../components/organisms/CategoryMenu/CategoryMenu";
import { getBlogs } from "../../services/api";
// import blogs from "../../assets/dev-data/blogs.json";

const Blogs = () => {
	
	const [anchorEl, setAnchorEl] = useState(null);
	const menuOpen = Boolean(anchorEl);
	const handleMenuOpen = (event) => {
		// handleSetMenuItems(event.currentTarget.id);
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
		// return navigate("/");
	};
	const [blogs, setBlogs] = useState();
	
	const handleGetBlogs = async () => {
		try {
			const res = await getBlogs();
			setBlogs(res.data.data);
		}
		catch (err) {
			alert({
				message: err.response.data.error.message,
				type: "error",
			});
			console.log(err);
		}
	}

	useEffect(() => {
		handleGetBlogs();
	}, [])

	return (
		<div className="blogs">
			<section className="section-1">
				<div className="heading">The Cosmetic Blog</div>
				<div className="sub-heading">
					Read from the largest collection of Blogs on Cosmetic
					Procedures and Products, all with the touch of skelp.ai
				</div>
				<div className="search">
					<div className="input">
						<input type="email" placeholder="Search" />
						<Button
							color={"green"}
							variant={"filled"}
							startIcon={
								<span className="material-icons">
									arrow_forward
								</span>
							}
						></Button>
					</div>
					<div className={`category ${menuOpen && 'active'}`} onClick={handleMenuOpen}>
						Choose a Category
						<span className="material-icons">expand_more</span>
					</div>
					<CategoryMenu
						anchorEl={anchorEl}
						handleMenuClose={handleMenuClose}
					></CategoryMenu>
				</div>
				<div className="content">
					{blogs && blogs.map((blog) => (
						<BlogCard blog={blog} key={blog.id}></BlogCard>
					))}
				</div>
			</section>
		</div>
	);
}
 
export default Blogs;