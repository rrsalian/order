import { useContext } from "react";
import { Item } from "../models/Item";
import { OrderContext } from "../contexts/OrderContext";

export function MenuItem( props : {item: Item}) {

    const { addItem, removeItem } = useContext(OrderContext);

    return (
        <div>
            <ul>
                <li>
                    <div>
                        Name: {props.item.name}
                    </div>
                    <div>
                        Description: {props.item.description}
                    </div>
                    <div>
                        Calories: {props.item.calories}
                    </div>
                    <div>
                        Price: {props.item.price}
                    </div>
                    <div>
                        {props.item.vegetarian ? "Vegetarian": "Not Vegetarian"}
                    </div>
                    <button onClick={() => addItem(props.item)}>Add To Order</button>
                    <button onClick={() => removeItem(props.item.id)}>Remove</button>                             
                </li>
            </ul>
        </div>
    );
}