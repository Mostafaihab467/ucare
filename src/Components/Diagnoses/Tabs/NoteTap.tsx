import React from 'react';
import { Grid, Header, Button, Segment } from 'semantic-ui-react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa'; // Example icons
import { GiNotebook } from "react-icons/gi";

import './NoteTap.scss'

export default function Notes() {
    return (
        <Grid columns={1} doubling>
               <Grid.Column>
                <Segment padded>
                    <div className='NoteTapItem'>
                        <div className='noteWrapper'>
                            <div className='noteHeader'>

                                <GiNotebook className='icon' size={23} />
                                <Header className='header' as='h3'>Note 1</Header>
                            </div>
                            <div className='note-content'>
                                How Are you Kido? Hope You Are Doing Well.
                            </div>
                        </div>
                        <div className='note-buttons'>
                            <Button size={'tiny'} primary icon labelPosition='left'>
                                <div className='button'>

                                    <FaEdit />
                                   
                                </div>

                            </Button>
                            <Button size={'tiny'} className='button' negative icon labelPosition='left'>
                                <div className='button'>
                                    <FaTrashAlt />
                                  
                                </div>
                            </Button>
                        </div>
                    </div>
                </Segment>


            </Grid.Column>
            <Grid.Column>
                <Segment padded>
                    <div className='NoteTapItem'>
                        <div className='noteWrapper'>
                            <div className='noteHeader'>

                                <GiNotebook className='icon' size={23} />
                                <Header className='header' as='h3'>Note 1</Header>
                            </div>
                            <div className='note-content'>
                                How Are you Kido? Hope You Are Doing Well.
                            </div>
                        </div>
                        <div className='note-buttons'>
                            <Button size={'tiny'} primary icon labelPosition='left'>
                                <div className='button'>

                                    <FaEdit />
                                   
                                </div>

                            </Button>
                            <Button size={'tiny'} className='button' negative icon labelPosition='left'>
                                <div className='button'>
                                    <FaTrashAlt />
                                  
                                </div>
                            </Button>
                        </div>
                    </div>
                </Segment>


            </Grid.Column>
            <Grid.Column>
                <Segment padded>
                    <div className='NoteTapItem'>
                        <div className='noteWrapper'>
                            <div className='noteHeader'>

                                <GiNotebook className='icon' size={23} />
                                <Header className='header' as='h3'>Note 1</Header>
                            </div>
                            <div className='note-content'>
                                How Are you Kido? Hope You Are Doing Well.
                            </div>
                        </div>
                        <div className='note-buttons'>
                            <Button size={'tiny'} primary icon labelPosition='left'>
                                <div className='button'>

                                    <FaEdit />
                                   
                                </div>

                            </Button>
                            <Button size={'tiny'} className='button' negative icon labelPosition='left'>
                                <div className='button'>
                                    <FaTrashAlt />
                                  
                                </div>
                            </Button>
                        </div>
                    </div>
                </Segment>


            </Grid.Column>
            {/* Add more Grid.Column items here if needed */}
        </Grid>
    );
}
