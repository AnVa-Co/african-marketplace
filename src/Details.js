import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`;

const StyledDetails = styled.div`
  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;
background:#f7fcff;
  p {
    color: blue;
  }
  h2 {
      color: #4a150d;
      font-size: 3rem;
      font-family:Arial, Helvetica, sans-serif;
      text-shadow: 2px 2px 4px #67646b; 
  }

`;

const Image = styled.img`
        width: 30%;
        height: 30%;
        object-fit: cover;
    
        `;

export default function Details(props)
{
    const { item, close } = props;

    return (
        <StyledDetails className="body">
            <h2>DETAILS</h2>
            {
                <> <Image src={require(`${item.img}`).default} alt="product" />
                    <p>{item.item_name}</p>
                    <p>Gender: {item.gender}</p>
                    <p>Public price: {item.price} Pro price: {item.wholesale_price}</p>
                </>
            }
            <button onClick={close}>Add to basket</button>
        </StyledDetails>
    );
}
