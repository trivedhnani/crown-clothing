export const addItemToCart=(cartItems,cartItemToAdd)=>{
        const exisistingItem=cartItems.find((item)=>{
            return(item.id===cartItemToAdd.id);
        });
        if(exisistingItem){
            return (
                cartItems.map((item)=>(
                    (item.id===cartItemToAdd.id)?{...item,qunatity:item.qunatity+1}:item
                ))
            )
        }
        else{
            return [...cartItems,{...cartItemToAdd,qunatity:1}];
        }
};