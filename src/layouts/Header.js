import React from 'react';
import { BlockContainer } from '../components/containers/container';
import { Grid } from '../components/containers/grid';
import { Paragraph } from '../components/common/typography';
import { Hr } from '../components/common/divider';
import { Image } from '../components/common/image';
import LogoImg from '../assets/images/logo.png';

const Header = () => {
    return (
        <BlockContainer width="100%" background="#D9D9D9" padding="10px 0">
            <Paragraph color="black" border="2px solid black">
                Session 0 CU Base Blocktec - Admin User
            </Paragraph>
            <Hr />
            <Grid columns="1fr 1fr 1fr" xl_columns="1fr 1fr" md_columns="1fr">
                <BlockContainer padding="10px 0 0">
                    <Paragraph decoration="underline" margin="0 0 15px 0">
                        File, Edit, Tools, Help, View, Back
                    </Paragraph>
                    <Paragraph>
                        Company ID: OceanViewLLC
                    </Paragraph>
                </BlockContainer>
                <BlockContainer padding="10px 0 0">
                    <Paragraph>
                        Employee Admin ID: S543GFD678
                    </Paragraph>
                </BlockContainer>
                <BlockContainer>
                    <Grid columns="1fr 1fr" sm_columns="1fr">
                        <BlockContainer>
                            <Paragraph margin="0 0 15px 0" padding="10px 0 0">
                                Admin Blockpay Screen
                            </Paragraph>
                            <Paragraph>
                                Account: Adminstrator (S543GFD678)
                            </Paragraph>
                        </BlockContainer>
                        <BlockContainer padding="10px">
                            <Image src={LogoImg} width="100%" />
                        </BlockContainer>
                    </Grid>
                </BlockContainer>
            </Grid>
        </BlockContainer>
    )
}

export default Header;
