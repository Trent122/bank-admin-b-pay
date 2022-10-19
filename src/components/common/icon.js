import styled from 'styled-components';
import { BlockContainer } from '../containers/container';

export const Icon = styled.div`
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    line-height: 0;
    cursor: ${props => props.cursor || 'pointer'};
`;

export const IconWithBackground = styled(BlockContainer)`
    display: flex;
    background: ${props => props.background || 'var(--color-blue)'};
    border-radius: 50%;
    justify-contnetposition: relative;
    ${Icon} {
        color: ${props => props.color || 'var(--color-white)'};
        margin: auto;
    }
`;