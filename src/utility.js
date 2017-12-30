import styled from 'styled-components';

export const EzFrame = styled.div`
    position: relative;
    // top: 50%;
    // left: 50%;
    // width: ${props => props.big ? '600px' : '400px'};
    width:100%;
    height: 73px;
    // margin-top: -200px;
    // margin-left: -200px;
    border-radius: 2px;
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    background: #1abc9c;
    color: #fff;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
`;
export const EzCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const EzInput = styled.input`
    display: none;
`;

export const EzButton = styled.label`
position: relative;
box-sizing: border-box;
display: inline-block;
width: 30px;
height: 30px;
border-radius: 50px;
margin: 5px;
background: none;
border: 1px solid #fff;
cursor: pointer;
text-align: center;
font-size: 16px;
font-weight: 400;
line-height: 27px;
transition: all .5s ease-in-out;
&:hover {
    background: #16a085;
    transition: all .3s ease-in-out; };
&:before {
    display: block;
    content: '';
    position: absolute;
    z-index: -1;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 50%;
    background: #fff;
    transition: all .5s ease-in-out;
    ${props => props.forChecked ? 'transform: scale(1);' : 'transform: scale(0);'} };
    ${props => props.forChecked ? `
    color: #1abc9c; background: none!important` : `color: #fff;`}
`;
export const EzPrevious = styled.span`
margin-right:20px`;