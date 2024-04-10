const Cart = require('../../models/cartSchema');

const increaseQuantity = async (req, res) => {
    try {
        const { _id, username } = req.params;
        const cart = await Cart.findOne({ username: username });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for user' });
        }

        let item = cart.items.find(item => item.perfume === _id);

        if (!item) {
            cart.items.push({ perfume: _id, quantity: 1 });
            await cart.save();
            item = cart.items.find(item => item.perfume === _id);
        } else {
            item.quantity += 1;
            await cart.save();
        }

        res.status(200).json(1);
    } catch(error) {
        console.log('Error incrementing quantity', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = increaseQuantity;