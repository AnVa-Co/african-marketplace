import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;
  margin-left: 10%;
  color: #55595c;
  font-size: 1.5rem;

  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #c9c2cc;
  }

  &::before {
    content: "${pr => pr.gender === 'male' ? '😎' : '👠'}";
  }

  button {
    background-color:#d3ebeb;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default function Item(props)
{
    const { item, action } = props;


    return (
        <StyledItem gender={item.gender}>
            {item.category}
            <button onClick={() => action(item)}>
                Go To Category
            </button>
        </StyledItem>
    );
}