

// export async function register(req, res) {

//     const auth = req.body // user send data in body from client side
//     if (!auth.phone || !auth.password || !auth.name) {
//         return res.status(400).json({ success: false, message: "Please provide all fields" })
//     }
//     const userId = uuidv4();
//     const hashedPassword = await bcrypt.hash(auth.password, saltRounds);
//     const token = await generateJwtToken(auth, userId)

//     const newUser = new UserAuth({
//         userId: userId,
//         phone: auth.phone,
//         password: hashedPassword,
//         name: auth.name,
//         token,
//         imageUrl: auth.imageUrl
//     })

//     try {
//         await newUser.save();
//         res.status(201).json({ success: true, data: newUser })
//     } catch (error) {
//         console.log('error:', error)
//         res.status(500).json({ success: false, message: "server error" })

//     }
// };
