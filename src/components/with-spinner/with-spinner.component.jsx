import React from 'react';
import{SpinnerContainer,SpinnerOverlay} from './with-spinner.styles';
// Takes a component as input and returns another component(HOC)
const WithSpinner=WrappedComponent=>({isLoading,...otherProps})=>{
    return isLoading?(
        <SpinnerOverlay><SpinnerContainer/></SpinnerOverlay>
    ):
    (
        <WrappedComponent {...otherProps}/>
    )
};
export default WithSpinner;
