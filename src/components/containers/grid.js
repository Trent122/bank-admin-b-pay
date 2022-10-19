import styled from 'styled-components'
import screen from '../../themes/screens'

export const Grid = styled.div`
    display: grid;
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    height: ${props => props.height || 'unset'};
    grid-template-columns: ${props => props.columns || 'auto'};
    column-gap: ${props => props.column_gap || '1rem'};
    row-gap: ${props => props.row_gap || '1rem'};
    align-items: ${props => props.align || 'start'};
    justify-items: ${props => props.justify || 'start'};
    background-color: ${props => props.bg_color || 'unset'};

    @media ${screen.xxl} {
        grid-template-columns: ${props => props.xxl_columns || ''};
        row-gap: ${props => props.xxl_row_gap || ''};
        column-gap: ${props => props.xxl_column_gap || ''};
    }

    @media ${screen.xl} {
        grid-template-columns: ${props => props.xl_columns || ''};
        row-gap: ${props => props.xl_row_gap || ''};
        column-gap: ${props => props.xl_column_gap || ''};
    }


    @media ${screen.lg} {
        grid-template-columns: ${props => props.lg_columns || ''};
        row-gap: ${props => props.lg_row_gap || ''};
        column-gap: ${props => props.lg_column_gap || ''};
    }


    @media ${screen.md} {
        grid-template-columns: ${props => props.md_columns || ''};
        row-gap: ${props => props.md_row_gap || ''};
        column-gap: ${props => props.md_column_gap || ''};
    }

    @media ${screen.sm} {
        grid-template-columns: ${props => props.sm_columns || ''};
        row-gap: ${props => props.sm_row_gap || ''};
        column-gap: ${props => props.sm_column_gap || ''};
    }

    @media ${screen.xs} {
        grid-template-columns: ${props => props.xs_columns || ''};
        row-gap: ${props => props.xs_row_gap || ''};
        column-gap: ${props => props.xs_column_gap || ''};
    }
`;

export const LiquidGrid = styled.div`
    display: grid;
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    column-gap: ${props => props.column_gap || '0'};
    row-gap: ${props => props.row_gap || '0'};
    background-color: ${props => props.bg_color || 'none'};
    align-items: center;
    align-content; center;
    justify-content: center;
    border: 1px solid red;
`;