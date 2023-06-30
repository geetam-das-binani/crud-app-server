import mongoose from "mongoose";
export const connection = (username, passoword) => {
	mongoose
		.connect(
			`mongodb+srv://${username}:${passoword}@learnmongo.6pho3we.mongodb.net/`
		)
		.then(() => console.log("Successfully connected"))
		.catch((e) => console.log(e.message));
};
