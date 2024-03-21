import axios from "axios";
axios.defaults.withCredentials = true;

const api = axios.create({
	// baseURL: "http://localhost:1337/api/",
	baseURL: "https://api.skelptor.com/api/",
	withCredentials: true,
});
const apiNoCredentials = axios.create({
	// baseURL: "http://localhost:1337/api/",
	baseURL: "https://api.skelptor.com/api/",
});

api.interceptors.request.use((config) => {
	// Retrieve the access token from React state or a state management system
	const accessToken = JSON.parse(localStorage.getItem("jwt"));

	// Add the access token to the Authorization header
	config.headers.Authorization = `Bearer ${accessToken}`;

	return config;
});

export const getUserData = () => api.get("/user/");
export const updateUserData = (payload, headers) =>
	api.patch("/user/", payload, headers);

export const googleAuth = (code) => api.get(`/auth/google?code=${code}`);
export const loginAuth = (payload) =>
	apiNoCredentials.post("./auth/local/", payload);
export const signupAuth = (payload) =>
	apiNoCredentials.post("./auth/local/register", payload);
export const logoutAuth = () => api.get("./auth/local/logout");
export const sendOTP = (medium) => api.get(`./auth/sendOTP?medium=${medium}`);
export const verifyOTP = (otp, medium) =>
	api.get(`./auth/verifyOTP?medium=${medium}&otp=${otp}`);

export const forgotPassword = (payload) =>
	api.post("./auth/forgotPassword/", payload);
export const resetPassword = (payload, token) =>
	api.patch("./auth/resetPassword/" + token, payload);
export const updatePassword = (payload) =>
	api.post("./auth/updatePassword", payload);

export const getBlogs = () => apiNoCredentials.get(`./blogs?populate=category`);
export const getBlog = (blogId) =>
	apiNoCredentials.get(`./blogs/${blogId}?populate=*`);
export const createBlog = (payload) => api.post("./blogs", payload);
export const uploadImages = (payload) =>
	api.post("./upload", payload, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
