import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true,
	},
	Username: {
		type: String,
		required: true,
	},
	Email: {
		type: String,
		required: true,
	},
	Phone: {
		type: String,
		required: true,
	},

	Date: {
		type: String,
		default: () => new Date().getTime(),
	},
});

const Users = mongoose.model("users", userSchema);
export default Users;
