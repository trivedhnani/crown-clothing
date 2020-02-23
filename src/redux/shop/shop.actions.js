import ShopActionTypes from './shop.types';
export const updateCollectons=(collectionsMap)=>(
    { type:ShopActionTypes.UPDATE_COLLECTION,
     payload:collectionsMap
    }
)