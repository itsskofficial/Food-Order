import classes from "./css/Cart.module.css"

const Cart = (props) => {
    const cartItems = <ul>
        {[{id:1 ,name:"Burger", amount: 2, price: "12.99"}].map((item)=><li>{item.name}</li>)}
    </ul>
    return (
        <div>

        </div>
    )
}