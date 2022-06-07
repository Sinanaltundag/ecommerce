import {css} from "styled-components"


const breakpoints = {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px',
  };

    const media = Object.keys(breakpoints).reduce((acc, label) => {
        acc[label] = (...args) => css`
            @media (max-width: ${breakpoints[label]}) {
                ${css(...args)}
            }
        `;
        return acc;
    }
    , {});
    export default media;


export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px){
            ${props.children}
        }`;
}

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 768px){
            ${props.children}
        }`;
}