export const addItemToCart=(cartItems,cartItemToAdd)=>{
        const exisistingItem=cartItems.find((item)=>{
            return(item.id===cartItemToAdd.id);
        });
        if(exisistingItem){
            return (
                cartItems.map((item)=>(
                    (item.id===cartItemToAdd.id)?{...item,quantity:item.quantity+1}:item
                ))
            )
        }
        else{
            return [...cartItems,{...cartItemToAdd,quantity:1}];
        }
};
export const removeItemFromCart=(cartItems,cartItem)=>{
    const exisitingItem=cartItems.find(item=>cartItem.id===item.id);
        if(exisitingItem.quantity===1){
            return cartItems.filter(item=>cartItem.id!==item.id);
        }
        else{
            return cartItems.map(item=>(
                item.id===cartItem.id?{...item,quantity:item.quantity-1}:item
            ))
        }
};