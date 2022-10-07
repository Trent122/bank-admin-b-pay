import styled from 'styled-components'
import screen, { minscreen } from '../../themes/screens'

export const Container = styled.div`
    width: 100%;
    height: ${props => props.height || '100%'};
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0 auto'};
    position: relative;

    @media ${screen.sm} {
        max-width: 100%;
        padding: ${props => props.sm_padding || '2rem'};
    }
    @media ${minscreen.sm} {
        max-width: 540px;
    }
    @media ${minscreen.md} {
        max-width: 720px;
    }
    @media ${minscreen.lg} {
        max-width: 960px;
    }
    @media ${minscreen.xl} {
        max-width: 1024px;
    }
    @media ${minscreen.xxl} {
        max-width: 1440px;
    }
    @media ${minscreen.xxxl} {
        max-width: 1800px;
    }
`

export const BlockContainer = styled.div`
    display: ${props => props.display || 'block'};
    justify-content: ${props => props.justify || 'start'};
    flex-direction: ${props => props.direction || ''};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    max-width: ${props => props.max_width || 'unset'};
    max-height: ${props => props.max_height || 'unset'};
    min-width: ${props => props.min_width || 'unset'};
    min-height: ${props => props.min_height || 'unset'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    position: ${props => props.position || 'relative'};
    top: ${props => props.top || 'unset'};
    right: ${props => props.right || 'unset'};
    bottom: ${props => props.bottom || 'unset'};
    left: ${props => props.left || 'unset'};
    z-index: ${props => props.z_index || 'auto'};
    transition: ${props => props.transition || 'none'};
    overflow: ${props => props.overflow || 'hidden'};
    background: ${props => props.background || 'none'};
    cursor: ${props => props.cursor || 'unset'};
    border: ${props => props.border || 'none'};
    border-bottom: ${props => props.bBottom || 'none'};

    @media ${screen.xxl} {
        width: ${props => props.xxl_width || ''};
        height: ${props => props.xxl_height || ''};
        margin: ${props => props.xxl_margin || ''};
        padding: ${props => props.xxl_padding || ''};
    }

    @media ${screen.xl} {
        width: ${props => props.xl_width || ''};
        height: ${props => props.xl_height || ''};
        margin: ${props => props.xl_margin || ''};
        padding: ${props => props.xl_padding || ''};
    }

    @media ${screen.lg} {
        width: ${props => props.lg_width || ''};
        height: ${props => props.lg_height || ''};
        margin: ${props => props.lg_margin || ''};
        padding: ${props => props.lg_padding || ''};
    }

    @media ${screen.md} {
        width: ${props => props.md_width || ''};
        height: ${props => props.md_height || ''};
        margin: ${props => props.md_margin || ''};
        padding: ${props => props.md_padding || ''};
    }

    @media ${screen.sm} {
        width: ${props => props.sm_width || ''};
        height: ${props => props.sm_height || ''};
        margin: ${props => props.sm_margin || ''};
        padding: ${props => props.sm_padding || ''};
    }

    @media ${screen.xs} {
        width: ${props => props.xs_width || ''};
        height: ${props => props.xs_height || ''};
        margin: ${props => props.xs_margin || ''};
        padding: ${props => props.xs_padding || ''};
    }
`;

export const PageConainer = styled(BlockContainer)`
    width: 100%;
    min-height: 100vh;
    background: ${props => props.background || props.theme.colors.bg_page};
    padding: 5rem 0;
    @media screen and ${screen.lg} {
        padding: 0 0 9rem;
    }
`;

export const ContentContainer = styled(BlockContainer)`
    width: 100%;
    min-height: 100vh;
    padding-left: ${props => {
        if (props.sidebar === 'max') return '36rem';
        else if (props.sidebar === 'min') return '14rem';
        return '0';
    }};
    @media screen and ${screen.lg} {
        padding-left: 0;
    }
`;