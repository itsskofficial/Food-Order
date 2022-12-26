import classes from "./css/Cart.module.css"

const Cart = (props) => {
    const cartItems = <ul className={classes['cartItems']}>
        {[{id:1 ,name:"Burger", amount: 2, price: "12.99"}].map((item)=><li>{item.name}</li>)}
    </ul>
    return (
        <div>
            {cartItems}
            <div>
                <span>
                    Total Amount
                </span>
                <sp
            </div>
            <div></div>
        </div>
        
    )
}