import React from 'react';
import styled from 'styled-components';

import { Paragraph } from './typography';
import { BlockContainer } from '../containers/container';

export const Input = styled.input`
    width: ${props => props.width || '100%'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '1rem'};
    border: ${props => props.border || '1px solid var(--color-black)'};
    border-radius: ${props => props.radius || '0.5rem'};
    color: ${props => props.color || 'var(--color-black)'};
    font-size: ${props => props.size || '1.6rem'};
    font-weight: ${props => props.weight || '600'};
    background: ${props => props.background || 'transparent'};
    letter-spacing: 0.5px;
    ::placeholder {
        color: var(--color-white-70);
    }

    :focus-visible {
        outline: none;
    }
`;

export const LabelInput = props => {
    const { label, gap } = props;

    return (
        <BlockContainer width="100%">
            <Paragraph size="1.2rem" weight="600" margin={`0 0 ${gap || '1rem'} 0`}>
                {label}
            </Paragraph>
            <Input {...props} />
        </BlockContainer>
    )
}