import classes from "./css/Cart.module.css"

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>
        {[{id:1 ,name:"Burger", amount: 2, price: "12.99"}].map((item)=><li>{item.name}</li>)}
    </ul>
    return (
        <div>
            {cartItems}
            <div className=>
                <span>
                    Total Amount
                </span>
                <span>
                    $12.22
                </span>
            </div>
            <div></div>
        </div>
        
    )
}