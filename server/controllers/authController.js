import Users from "../models/userModel.js";


export const register = async(req, res, next) => {
    const { firstName, lastName, email, password } = req.body;


    if(!(firstName || lastName || email || password)){
        next("Provide Required Fields!");
        return;
    }

    try {
        const userExist = await Users.findOne({ email });

        if (userExist) {
            next("Email Address already exists");
            return;
        }

        const hashedPassword = await hashPassword(password);



    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}