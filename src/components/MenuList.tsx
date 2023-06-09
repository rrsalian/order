import { useState } from "react";
import { menuItems } from "../models/Item";
import { MenuItem } from "./MenuItem";

export function MenuList() {

    return (
        <div>
            {
                menuItems.map(item => <MenuItem key={item.id} item={item} ></MenuItem>)
            };
 
        </div>
    );
}