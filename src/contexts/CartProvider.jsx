import { createContext } from "react";
import useCart from "../Hooks/useCart";
import { toast } from "react-toastify";
import { toastConfig } from "../Utils/ConstantData";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart] = useCart()
    // console.log(data.data)

    const totalPrice = cart?.data?.reduce((total, item) => total + item.total, 0);
    const totalQuantityOrder = cart?.data?.reduce((total, item) => total + item.quantityOrder, 0);

    const increaseQuantity = (quantityOrder, setQuantityOrder, id, price, refetch) => {
        const updatedQuantity = quantityOrder + 1;
        // console.log("updatedQuantity", updatedQuantity)
        fetch(`https://test-server-ten-psi.vercel.app/api/v1/addCart/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantityOrder: updatedQuantity, price: price }),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // console.log(data?.data?.quantityOrder)
                if (data?.status === 'success') {
                    setQuantityOrder(data?.data?.quantityOrder)
                    refetch()
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
    }
    const decreaseQuantity = async (quantityOrder, setQuantityOrder, id, price, refetch) => {
        const updatedQuantity = quantityOrder - 1;
        // console.log("updatedQuantity", updatedQuantity)
        fetch(`https://test-server-ten-psi.vercel.app/api/v1/addCart/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantityOrder: updatedQuantity, price: price }),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // console.log(data?.data?.quantityOrder)
                if (data?.status === 'success') {
                    setQuantityOrder(data?.data?.quantityOrder)
                    refetch()
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
    }
    const deleteCartProduct = (id, refetch) => {
        // console.log(id)
        fetch(`https://test-server-ten-psi.vercel.app/api/v1/addCart/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log("data.acknowledged", data.data.acknowledged);
                if (data?.data?.acknowledged) {
                    toast.success('Cart product cancelled successfully', toastConfig)
                    refetch()
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
    }

    const cartInfo = {
        cart,
        totalPrice,
        totalQuantityOrder,
        increaseQuantity,
        decreaseQuantity,
        deleteCartProduct
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;