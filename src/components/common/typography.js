import React from 'react';
import styled, { css } from 'styled-components';
import screen from '../../themes/screens';

const createElement = React.createElement;

const BaseElement = css`
    text-align: ${props => props.align || 'left'};
    color: ${props => props.color || 'black'};
    letter-spacing: ${props => props.spacing || '0'};
    text-decoration: ${props => props.decoration || 'none'};
`;

const BodyTextBaseElement = css`
    ${BaseElement}
    @media screen and ${screen.md} {
        font-size: ${props => props.md_size || '1.4rem'};
    }
`;

export const Paragraph = styled.p`
    font-weight: ${props => props.weight || '400'};
    font-size: ${props => props.size || '1.6rem'};
    line-height: ${props => props.line_height || '1.5'};
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    width: ${props => props.width || 'unset'};
    ${BodyTextBaseElement}
`;

export const Text = styled.span`
    font-size: ${props => props.size || '1.6rem'};
    font-weight: ${props => props.weight || '400'};
    line-height: ${props => props.line_height || '1.2'};
    white-space: ${props => props.white_space || 'normal'};
    ${BodyTextBaseElement}
`;

export const LinkText = styled.a`
    color: ${props => props.color || '#ffffff'});
    font-size: ${props => props.size || '1.6rem'};
    line-height: ${props => props.line_height || '1.5'};
    ${BodyTextBaseElement}

    &:hover {
        text-decoration: ${props => props.decoration || 'underline'};
        cursor: pointer;
    }
`;

export const Header = styled(({ tag = 'h1', children, ...props }) =>
    createElement(tag, props, children),
)`
    font-weight: ${props => props.weight || '600'};
    line-height: ${props => props.line_height || '1.25'};
    margin: ${props => props.margin || '0'};
    width: ${props => props.width || 'unset'};
    ${BaseElement}

    font-size: ${props => {
        if (props.tag === 'h1') return 'var(--text-size-xxl)';
        if (props.tag === 'h2') return 'var(--text-size-xl)';
        if (props.tag === 'h3') return 'var(--text-size-lg)';
        if (props.tag === 'h4') return 'var(--text-size-md)';
        if (props.tag === 'h5') return 'var(--text-size-sm)';
        if (props.tag === 'h6') return 'var(--text-size-xs)';
        if (props.size) return props.size;
    }};

    @media ${screen.md} {
        font-size: ${props => {
            if (props.tag === 'h1') return '3rem';
            if (props.tag === 'h2') return '2.6rem';
            if (props.tag === 'h3') return '2.2rem';
            if (props.tag === 'h4') return '2rem';
            if (props.tag === 'h5') return '1.8rem';
            if (props.tag === 'h6') return '1.4rem';
            if (props.md_size) return props.md_size;
        }};
    }

    @media ${screen.sm} {
        text-align: ${props => props.sm_align || ''};
    }

    @media ${screen.xs} {
        font-size: ${props => {
            if (props.tag === 'h1') return '2.5rem';
            if (props.tag === 'h2') return '2.3rem';
            if (props.tag === 'h3') return '2rem';
            if (props.tag === 'h4') return '1.8rem';
            if (props.tag === 'h5') return '1.4rem';
            if (props.tag === 'h6') return '1.2rem';
            if (props.md_size) return props.md_size;
        }};
    }
`
