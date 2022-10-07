import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
    width: 4rem;
    height: 2.5rem;
    border: 1px solid var(--color-bluek-dark);
    border-radius: 2.5rem;
    background-color: var(--color-white);
    position: relative;
    cursor: pointer;
    margin-right: 1rem;
`;

const ToggleCircle = styled.div`
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: ${props => props.checked ? 'var(--color-blue-dark)' : 'var(--color-gray)'};
    top: 0.5rem;
    left: ${props => props.checked ? '2rem' : '0.5rem'};
    transition: .2s;
`;

export const Toggle = props => {
    const { checked, setChecked } = props;

    const handleToggle = () => {
        setChecked(!checked);
    }

    return (
        <ToggleContainer onClick={handleToggle}>
            <ToggleCircle checked={checked} />
        </ToggleContainer>
    );
}