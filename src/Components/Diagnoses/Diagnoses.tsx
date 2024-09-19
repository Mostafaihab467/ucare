import React from 'react';
import { Container, Card, Header, Input, Grid, Tab, TabPane, Divider, Menu, Button } from 'semantic-ui-react';
import { Col, Row } from 'react-bootstrap';
import { FaMicroscope, FaNotesMedical, FaSearch, FaStethoscope } from 'react-icons/fa';
import NoteTap from './Tabs/NoteTap';

export default function Diagnoses() {

    const panes = [
        {
            menuItem: (
                <Menu.Item>
                    <FaNotesMedical className='tapIcons' style={{ marginRight: '8px' }} /> Notes
                </Menu.Item>
            ),
            render: () => (
                <Tab.Pane>
                    {/* Tab 1 Content */}
                    <NoteTap />
                </Tab.Pane>
            ),
        },
        {
            menuItem: (
                <Menu.Item>
                    <FaStethoscope className='tapIcons' style={{ marginRight: '8px' }} /> Treatments
                </Menu.Item>
            ),
            render: () => (
                <Tab.Pane>
                    {/* Tab 2 Content */}
                    Tab 2 Content
                </Tab.Pane>
            ),
        },
        {
            menuItem: (
                <Menu.Item>
                    <FaMicroscope className='tapIcons' style={{ marginRight: '8px' }} /> Investigations
                </Menu.Item>
            ),
            render: () => (
                <Tab.Pane>
                    {/* Tab 3 Content */}
                    Tab 3 Content
                </Tab.Pane>
            ),
        },
        {
            menuItem: (
                <Menu.Item>
                    <FaSearch className='tapIcons' style={{ marginRight: '8px' }} /> Examinations
                </Menu.Item>
            ),
            render: () => (
                <Tab.Pane>
                    {/* Tab 4 Content */}
                    Tab 4 Content
                </Tab.Pane>
            ),
        },
    ];

    const TabExampleBorderless = () => (
        <Tab
            menu={{ borderless: true, attached: false, tabular: false }}
            panes={panes}
        />
    )



    return (
        <Col md={8}>
            <Row>
                <Col md={2}>

                    <h3>Visit</h3>
                </Col>
                <Col md={7}>

                    <span>Today Oct 15 2022</span>
                </Col>
                <Col md={3}>

                    <Button color='teal'>Done</Button>
                </Col>
            </Row>
            <Card fluid>
                <Card.Content>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <h2>Diagnosis</h2>
                            </Grid.Column>
                            <Grid.Column>
                                <Input fluid placeholder='Add Diagnosis' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider />
                    <TabExampleBorderless />
                </Card.Content>
            </Card>
        </Col>
    )
}
