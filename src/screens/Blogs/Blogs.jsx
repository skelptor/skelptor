import React, { useState, useEffect } from "react";
import "./Blogs.css";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
	Chip,
} from "@mui/material";
import Button from "../../components/atoms/Button/Button";
import BlogCard from "../../components/organisms/BlogCard/BlogCard";
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

	const [category, setCategory] = useState();
	const [searchQuery, setSearchQuery] = useState();

	const handleMenuClose = () => {
		setAnchorEl(null);
		// return navigate("/");
	};
	const [blogs, setBlogs] = useState();

	const handleGetBlogs = async () => {
		try {
			const res = await getBlogs();
			setBlogs(res.data.data);
		} catch (err) {
			alert({
				message: err.response.data.error.message,
				type: "error",
			});
			console.log(err);
		}
	};

	useEffect(() => {
		handleGetBlogs();
	}, []);

	const [searchResults, setSearchResults] = useState();

	useEffect(() => {
		setSearchResults(blogs);
		if (blogs && blogs.length > 0) {
			if (category && category.length > 0) {
				setSearchResults([
					...blogs.filter(
						(blog) =>
							blog.attributes.category.data.attributes.slug ===
							category
					),
				]);
			}
			if (searchQuery && searchQuery.length > 0) {
				setSearchResults([
					...searchResults.filter((blog) =>
						blog.attributes.title.includes(searchQuery)
					),
				]);
			}
		}
	}, [category, blogs, searchQuery]);

	return (
		<div className="blogs">
			<section className="section-1">
				<div className="heading">The Cosmetic Blog</div>
				<div className="sub-heading">
					Read from the largest collection of Blogs on Cosmetic
					Procedures and Products, all with the touch of skelp.ai
				</div>
				<div className="search">
					<div className="left-col">
						<div className="input">
							<input
								type="email"
								placeholder="Search"
								value={searchQuery}
								onInput={(e) => setSearchQuery(e.target.value)}
							/>
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
						{category && (
							<Chip
								label={category}
								onDelete={() => setCategory(null)}
								variant="outlined"
								size="large"
								sx={{
									fontSize: "1.1rem",
								}}
							></Chip>
						)}
					</div>
					<div
						className={`category ${menuOpen && "active"}`}
						onClick={handleMenuOpen}
					>
						Choose a Category
						<span className="material-icons">expand_more</span>
					</div>
					<CategoryMenu
						anchorEl={anchorEl}
						handleMenuClose={handleMenuClose}
						onSelect={(item) => setCategory(item)}
					></CategoryMenu>
				</div>
				<div className="content">
					{searchResults &&
						searchResults.map((blog) => (
							<BlogCard blog={blog} key={blog.id}></BlogCard>
						))}
				</div>
			</section>
		</div>
	);
};

export default Blogs;
