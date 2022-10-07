import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '../components/common/checkbox';
import { BlockContainer } from '../components/containers/container';
import { Text } from '../components/common/typography';
import { Image } from '../components/common/image';

import UpArrowImg from '../assets/images/up.png';
import DownArrowImg from '../assets/images/down.png';

const Table = styled.table`
    width: 100%;
    margin-bottom: 50px;
`;

const Th = styled.th`
    padding: 10px;
    width: ${props => props.width || 'auto'};
    ${BlockContainer} {
        width: 100%;
        padding: 25px;
        background: rgba(255, 127, 9, 0.25);
    }
`;

const Td = styled.td`
    padding: 5px 15px;
`;

const AmountLimit = styled(BlockContainer)`
    padding: 0 20px;
    background-color: rgba(255, 186, 9, 0.25);
    width: fit-content;
`;

const ControlContainer = styled(BlockContainer)`
    background-color: #D9D9D9;
    padding: 9px 20px;
    display: flex;
`;

const tableData = [
    { description: 'Courtesy Check', allowed: true, uses: true, limit: '999,999,999' },
    { description: 'CFT Updates', allowed: true, uses: true, limit: '' },
    { description: 'Electornic Bill Pay Access', allowed: true, uses: true, limit: '' },
    { description: 'Estatment Viewing ', allowed: true, uses: false, limit: '' },
    { description: 'Inter (Other) member transfer', allowed: true, uses: true, limit: '' },
    { description: 'Intra (within) member transfer', allowed: true, uses: true, limit: '999,999,999' },
    { description: 'Open New Wallet Accounts', allowed: true, uses: true, limit: '999,999,999' },
    { description: 'Personal Information Changes', allowed: true, uses: true, limit: '' },
    { description: 'Quickbooks download', allowed: true, uses: false, limit: '' },
    { description: 'Stop Payments ', allowed: true, uses: false, limit: '' },
    { description: 'Purchase Certificates ', allowed: true, uses: true, limit: '' },
    { description: 'View Secure Message Center', allowed: true, uses: false, limit: '' },
]

const AdminTable = () => {
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <Th width="40%">
                            <BlockContainer>
                                Service Description
                            </BlockContainer>
                        </Th>
                        <Th width="20%">
                            <BlockContainer>
                                Allowed Service                           
                            </BlockContainer>
                        </Th>
                        <Th width="20%">
                            <BlockContainer>
                                Uses Confirmation Code
                            </BlockContainer>
                        </Th>
                        <Th width="20%">
                            <BlockContainer>
                                Uses An Amount Limit 
                            </BlockContainer>
                        </Th>
                    </tr>
                </thead>
                <tbody>
                    { tableData.map((ele, index) => (
                        <tr key={index}>
                            <Td>{ele.description}</Td>
                            <Td>
                                { ele.allowed &&
                                    <Checkbox label="" size="30" />
                                }
                            </Td>
                            <Td>
                                { ele.uses &&
                                    <Checkbox label="" size="30" />
                                }
                            </Td>
                            <Td>
                                <BlockContainer display="flex" justify="center">
                                    <AmountLimit>
                                        <Text>
                                            {ele.limit}
                                        </Text>
                                    </AmountLimit>
                                </BlockContainer>
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <BlockContainer display="flex" justify="space-between">
                <ControlContainer>
                    <BlockContainer margin="auto 0">
                        Admin Update Controls
                    </BlockContainer>
                </ControlContainer>
                <BlockContainer margin="0 50px 0 0">
                    <Image src={UpArrowImg} margin="0 20px 0 0" cursor="pointer" />
                    <Image src={DownArrowImg} cursor="pointer" />
                </BlockContainer>
            </BlockContainer>
        </>
    )
}

export default AdminTable;