import React from 'react';
import styled from 'styled-components';
import bg_header from '../img/bg-header-mobile.svg';

const FlagsContainerDiv = styled.div`
    width:100%;    
    height:180px;
    margin:8px;    
    background-image:url(${bg_header}) cover;
    background-color: #ff80ff;
`;




const FlagsContainer = ()=>{
    return(
        <FlagsContainerDiv/>        
    )
}

export default FlagsContainer;
