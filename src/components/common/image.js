import styled from 'styled-components';

export const Image = styled.img`
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    cursor: ${props => props.cursor || 'normal'};
`;

export const Avatar = styled(Image)`
    width: ${props => props.width || '4rem'};
    height: ${props => props.height || '4rem'};
    border-radius: ${props => props.radius || '50%'};
`;