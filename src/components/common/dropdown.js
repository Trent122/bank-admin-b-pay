import React from "react";
import styled from "styled-components";
import { BlockContainer } from "../containers/container";

export const DropdownContainer = styled(BlockContainer)`
    width: fit-content;
`;

export const DropdownHeader = styled(BlockContainer)`
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
`;

export const DropdownBody = styled(BlockContainer)`

`;

export const Dropdown = props => {
    const { children } = props;

    return (
        <DropdownContainer {...props}>
            {children}
        </DropdownContainer>
    )
}