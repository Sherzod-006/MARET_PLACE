import User  from "../models/userModel.js";
import jwt from "jsonwebtoken";

// GENERATING TOKEN
const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
}

// REGISTER USER
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        };

        const user = await User.create({
            username,
            email,
            password
        });

        if (user){
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id),
            });
        } else{
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// LOGIN USER
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email});
        if (user && (await user.matchPassword(password))){
            res.status(200).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE USER
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
          { $set: req.body },
          { new: true }
        );
    res.json(updatedUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//DELETE USER
const deleteUser = async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
    }
    res.json({ message: "Profil muvaffaqiyatli o‘chirildi" });
    } catch (err) {
      res.status(500).json({ message: "Xatolik yuz berdi: " + err.message });
    }

}

export {
    registerUser,
    loginUser,
    updateUser,
    deleteUser
};