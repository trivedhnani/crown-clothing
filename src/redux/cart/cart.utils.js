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