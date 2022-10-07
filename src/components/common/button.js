import styled from 'styled-components';
import { Text } from './typography';
import screen from '../../themes/screens';

const IconButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width || 'fit-content'};
    height: ${props => props.height || 'fit-content'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '1rem'};
    border: ${props => props.border || 'none'};
    border-radius: ${props => props.radius || '1rem'};
    background: ${props => props.background || 'var(--color-white)'};
    color: ${props => props.color || 'var(--color-black)'};
    box-shadow: ${props => props.shadow || 'none'};
    letter-spacing: ${props => props.letter_spacing || 'normal'};
    font-weight: ${props => props.weight || 'nornam'};
    font-size: ${props => props.size || '1.6rem'};
    line-height: 1;
    cursor: pointer;

    span {
        margin-right: ${props => props.position === 'right' ? props.gap || '.5rem' : '0'};
        margin-left: ${props => props.position === 'left' ? props.gap || '.5rem' : '0'};
    }

    @media screen and ${screen.md} {
        font-size: ${props => props.md_size || '1.4rem'};
    }
`;

export const IconButton = props => {
    const { Icon, children, position, iconsize, iconColor } = props;

    return (
        <IconButtonContainer {...props}>
            { position === 'left' &&
                <Icon size={iconsize} color={iconColor} />
            }
            { position === 'top' &&
                <Icon size={iconsize} color={iconColor} />
            }
            <Text white_space="nowrap" {...props}>
                {children}
            </Text>
            { position === 'right' &&
                <Icon size={iconsize} />
            }
        </IconButtonContainer>
    )
}

const IconButtonVerticalContainer = styled(IconButtonContainer)`
    display: block;
    background: ${props => props.active ? 'var(--color-grad-blue)' : 'none'};
    span {
        display: block;
        margin-top: ${props => props.gap || '0.5rem'};
    }
`;

export const IconButtonVertical = props => {
    const { Icon, children, iconsize, iconColor, active } = props;

    return (
        <IconButtonVerticalContainer {...props}>
            <Icon size={iconsize} color={active ? 'var(--color-white)' : iconColor} />
            <Text white_space="nowrap" color={active ? 'var(--color-white)' : iconColor} size="1.1rem" md_size="1.1rem">
                {children}
            </Text>
        </IconButtonVerticalContainer>
    )
}