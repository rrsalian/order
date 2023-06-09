import { useState } from "react";
import { ReactNode } from "react";
import { Item } from "../models/Item";
import { OrderContext } from "./OrderContext";

interface Props { 
    children: ReactNode 
}

export default function OrderContextProvider({children}: Props) {
    const [order, setOrder] = useState<Item[]>([]);

    return (
        <OrderContext.Provider value={{
            order : order,
            addItem: (item: Item) => setOrder([...order, item]), 
            removeItem: (id: string) => {
                const index = order.findIndex(item => item.id === id);
                if(index !== -1) {
                    order.splice(index,1);
                    setOrder([...order]);
                }        
            }
        }}>
            {children}
        </OrderContext.Provider>
    )

}
