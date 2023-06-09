import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";
import "./Header.css"

export function Header() {
    const { order } = useContext(OrderContext);


    return (
        <div className="header">
            <h1>Sunny Side Up</h1>
            <b>Order Count: {order.length}</b>
        </div>
    );
}