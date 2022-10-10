import React from 'react';
import styled from 'styled-components';
import { BlockContainer } from '../components/containers/container'
import { Image } from '../components/common/image';
import { Text } from '../components/common/typography';
import LeftImg from '../assets/images/left.png';
import RightImg from '../assets/images/right.png';
import UpImg from '../assets/images/up.png';
import PauseImg from '../assets/images/pause.png';
import PrinterImg from '../assets/images/printer.png';
import ChainImg from '../assets/images/chain.png';
import InfoImg from '../assets/images/info.png';
import HelpImg from '../assets/images/help.png';
import AmpImg from '../assets/images/amp.png';

const FooterContainer = styled(BlockContainer)`
    background-color: rgba(255, 127, 9, 0.35);
    display: flex;
    justify-content: space-between;
    flex: 1;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <BlockContainer padding="35px 10px">
            </BlockContainer>
            <BlockContainer display="flex" justify="end" padding="5px">
                <BlockContainer margin="auto 0 0">
                    <Text>
                        10/7/22
                    </Text>
                </BlockContainer>
            </BlockContainer>
        </FooterContainer>
    );
};

export default Footer;
