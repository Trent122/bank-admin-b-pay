import styled from "styled-components";
import { BlockContainer } from "../containers/container";

const ICheckboxContainer = styled(BlockContainer)`
    display: flex;
    align-items: center;
    justify-content: center;
    input, label {
        cursor: pointer;
    }

    input[type=checkbox] {
        width: ${props => props.size ? `${props.size}px` : '20px'};
        height: ${props => props.size ? `${props.size}px` : '20px'};
        -webkit-appearance: none;
        -moz-appearance: none;
        border: 1px solid rgb(121, 121, 121);
        border-radius: 5px;
        background-color: white;
        position: relative;
        margin-right: ${props => props.gap || '5px'};
    }
    
    input[type=checkbox]:checked {
        background-color: blue;
    }
    
    input[type=checkbox]:checked:after {
        position: absolute;
        left: ${props => props.size ? `${props.size*0.35/1.4142}px` : '4px'};
        top: 0;
        width: ${props => props.size ? `${props.size/2}px` : '10px'};
        height: ${props => props.size ? `${props.size*0.8}px` : '16px'};
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        content: "";
        display: inline-block;
    }
`;


export const Checkbox = props => {
    const { label } = props;
    const id = `checkbox_${Math.round(Math.random() * 10000000)}`;

    return (
        <ICheckboxContainer {...props}>
            <input type="checkbox" id={id} {...props} />
            <label htmlFor={id}>{label}</label>
        </ICheckboxContainer>
    )
}