import React from 'react';
import styled from 'styled-components';

export const Spinner = () => (
    <StyledSpinner viewBox="0 0 50 50">
        <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
        />
    </StyledSpinner>
);

const StyledSpinner = styled.svg`
    animation: rotate 2s linear infinite;
    display:inline-block;
    width: 1.5rem;
    height: 1.5rem;
    vertical-align:text-bottom;
    border:.25em solid currentColor;
    border-right-color:
    transparent;
    border-radius: 50%;
  
    & .path {
        stroke: #5652BF;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }
    
    @keyframes rotate {
        100% {
        transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
  }`;