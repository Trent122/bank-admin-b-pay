import React from 'react';
import { BlockContainer } from '../components/containers/container';
import { Grid } from '../components/containers/grid';
import { Checkbox } from '../components/common/checkbox';
import { Text } from '../components/common/typography';
import { Image } from '../components/common/image';
import { Hr } from '../components/common/divider';

import AdminTable from './AdminTable';
import ZoomerImg from '../assets/images/zoomer.png';

function Home() {
    return (
        <BlockContainer background="rgb(183, 183, 183)" padding="5px 0 0">
            <Grid columns="1fr 1fr 1fr" xl_columns="1fr 1fr" md_columns="1fr" padding="5px">
                <BlockContainer display="flex">
                    <Grid columns="1fr 1fr" sm_columns="1fr">
                        <BlockContainer display="flex">
                            <Checkbox label="Adminstrator" margin="0 20px 0 0" />
                            <Text>Or</Text>
                        </BlockContainer>
                        <Checkbox label=" Can Reset Passwords" margin="0 0 0 20px" />
                    </Grid>
                </BlockContainer>
                <BlockContainer>
                    <Checkbox label="Require PC Registration" />
                </BlockContainer>
                <BlockContainer bBottom="1px solid black" width="100%" display="flex" justify="space-between" padding="10px 20px 20px">
                    <Text>
                        # of PC’s Allowed
                    </Text>
                    <Text>
                        9
                    </Text>
                    <Text>
                        (9 = No limit)
                    </Text>
                </BlockContainer>
            </Grid>
            <BlockContainer display="flex" align="center" bBottom="1px solid black" padding="5px 50px 5px 5px" width="fit-content">
                <BlockContainer margin="0 10px 0 0">
                    <Text>
                        Time offset Factor
                    </Text>
                </BlockContainer>
                <BlockContainer background="#D9D9D9" padding="3px 15px 3px 3px" margin="0 5px 0 0">
                    <Text>
                        5-
                    </Text>
                </BlockContainer >
                <Image src={ZoomerImg} margin="0 15px 0 0" />
                <BlockContainer>
                    <Text>
                        Eastern Standard (-5)
                    </Text>
                </BlockContainer>
            </BlockContainer>
            <Hr margin="30px 0" />
            <AdminTable />
        </BlockContainer>
    );
}

export default Home;
