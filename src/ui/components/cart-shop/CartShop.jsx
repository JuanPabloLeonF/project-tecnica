import "./CartShop.css"
import cartShopVacio from "/imgs/cart-shop-vacio.svg"
import { useContext } from "react"
import { contextAppCreate } from "../../../domain/context/app/ProviderApp"
import { Item } from "../item/Item"

export const CartShop = () => {

    const {
        dispatch,
        cartShopData
    } = useContext(contextAppCreate);

    const handlerCloseCartShop = () => {
        dispatch({ type: "SET_ACTIVATE_CART", payload: false });
    }

    return (
        <>
            <div className="container-cart-shop">
                <i onClick={handlerCloseCartShop} className="fa-solid fa-xmark"></i>
                
                {cartShopData.productsList.length > 0 ? (
                    <>
                        <div className="container-p">
                            <p>{cartShopData.productsList.length}</p>
                            <p>Mis compras</p>
                        </div>
                        <div className="container-list-items">
                        {cartShopData.productsList.map((product) => {
                            return (
                                <Item product={product} key={product.id}/>
                            )
                        })}
                        </div>
                        <div className="container-button">
                            <div className="container-total">
                                <p>Total:</p>
                                <p>$ {cartShopData.totalPrice}</p>
                            </div>
                            <button type="button">Realizar compra</button>
                        </div>
                    </>
                ) : (
                    <>
                        <img src={cartShopVacio} alt="cart-shop-vacio" />
                    </>
                )}
            </div>
        </>
    )
}