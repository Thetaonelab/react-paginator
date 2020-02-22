import styled from "styled-components";

export const EzFrame = styled.div`
  position: relative;
  width: 100%;
  height: 73px;
  border-radius: 2px;
  overflow: hidden;
  background: "transparent";
  color: ${props => (props && props.textColor) || "black"};
  font-family: "Open Sans", Helvetica, sans-serif;
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
  margin-right: -1px;
  width: 30px;
  height: 30px;
  line-height: 28px;
  text-align: center;
  border: 1px solid #aaa;
  cursor: pointer;
  font-size: 16px;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  &:hover {
    text-transform: underline;
    opacity: 0.7;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  &:before {
    display: block;
    content: "";
    position: absolute;
    z-index: -1;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    transition: all 0.5s ease-in-out;
    ${props =>
      props.forChecked ? "transform: scale(1);" : "transform: scale(0);"}
  }
  ${props =>
    props.forChecked
      ? `
    color: ${props.textColor || "black"}; background: #ddd; font-weight:700;`
      : `color:  #333;`}
`;
export const EzPrevious = styled.span`
  margin-right: 20px;
`;
