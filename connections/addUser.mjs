import Users from "../schema/userSchema.mjs";

export const addUser = async (req, res) => {
	console.log(req.body)
	try {
		const newuser = await Users.create(req.body);
		res.status(200).json(newuser);
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};
export const getUsersData = async (req, res) => {
	try {
		const newusersData = await Users.find();
		res.status(200).json(newusersData);
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};
export const getUser = async (req, res) => {
	try {
		const getSingleUserData = await Users.findById(req.params.id);
		// or below method
		// const getSingleUserData = await Users.where("_id").equals(req.params.id)
		res.status(200).json(getSingleUserData);
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};

export const editUser = async (req, res) => {
	try {
		const editedUser = await Users.findOne({ _id: req.params.id });
		editedUser.Name = req.body.Name;
		editedUser.Email = req.body.Email;
		editedUser.Phone = req.body.Phone;
		editedUser.Username = req.body.Username;
		await editedUser.save();
		res.status(200).json(editedUser); 
		// or
        //  const editedUser=new Users(req.body)
		//   await Users.updateOne(
		// 	{ _id: req.params.id },
		// 	{
		// 		$set:
		// 			// Name: req.body.Name,
		// 			// Email: req.body.Email,
		// 			// Phone: req.body.Phone,
		// 			// Username: req.body.Username,
		// 			// or 
		// 			req.body,
		// 	}
		// );
		
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};
export const deleteUser= async(req,res)=>{
	try{
		
         await Users.deleteOne({_id:req.params.id})

		 res.status(200).json({message:`User with ${req.params.id} successgfllly deleted`})
	}
	catch (e) {
		res.status(404).json({ message: e.message });  
		
	} 
}  