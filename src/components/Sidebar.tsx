import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";
import './Sidebar.css'

export function Sidebar() {

    const { order } = useContext(OrderContext);    
       
    function sum(): number {
        return order.reduce((n,{price}) => n + price,0);
    }

    return (

        <div>
            { order.map(item =>                
                <ul>
                    <li>{item.name} - {item.price}</li>
                </ul>        
                )
            }
            
            <span className= {order.length > 0 ? "total":"nototal"}>
               Total:            
                {
                sum()
                }
            </span>
        </div>
    );
}