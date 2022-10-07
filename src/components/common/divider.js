import styled from 'styled-components';

export const Hr = styled.hr`
    width: ${props => props.width || '100%'};
    margin: ${props => props.margin || '0'};
    border: none;
    border-top: ${props => props.border || `1px solid black`};
`;

export const Vr = styled.hr`
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0'};
    border: none;
    border-right: ${props => props.border || `1px solid black`};
`;