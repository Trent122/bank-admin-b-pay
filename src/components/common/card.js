import styled from 'styled-components';
import { BlockContainer } from '../containers/container';

export const Card = styled(BlockContainer)`
    max-width: ${props => props.max_width || 'auto'};
    min-width: ${props => props.min_width || 'auto'};
    border-radius: ${props => props.radius || '3rem'};
    box-shadow: ${props => props.shadow || '0 3rem 4rem var(--color-black-10)'};
    background: ${props => props.background || props.theme.colors.bg_card};
`;