import User from "../models/User.js"

// update user cartdata :/api/cart/update



// export const updateCart = async (req, res)=>{
//     try {
//          // grab from middleware
//         const { userId, cartItems} = req.body

//         await User.findByIdAndUpdate(userId, {cartItems})
//         res.json({success: true, message: " cart updated"})

//     } catch (error) {

//         console.log(error.message);
//         res.json({success: false, message: error.message}); 
//     }
// }

export const updateCart = async (req, res) => {
    try {
        // Get userId from middleware (req.userId) not from req.body
        const userId = req.userId;
        const { cartItems } = req.body;

        if (!userId || !cartItems) {
            return res.json({ success: false, message: "User ID and cart items are required" });
        }

        await User.findByIdAndUpdate(userId, { cartItems }, { new: true });
        res.json({ success: true, message: "Cart updated" });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message }); 
    }
}