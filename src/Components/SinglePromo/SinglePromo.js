import React, { useState } from 'react';
import { Grid, Dropdown, Modal, Header, Item, Card, Image, Form, Checkbox, Button, Icon } from 'semantic-ui-react';
import { io } from 'socket.io-client';
import Update from '../Update/Update';


const socket = io.connect("http://localhost:5000/")


const SinglePromo = () => {


    const [open, setOpen] = useState(false)

    const removeHandler = () => {
        setOpen(false)
    }

    const handleSubmit = (e) => {
        console.log(e);
        socket.emit()

        
    }

    return (
        <div style={{ width: '60%', margin: 'auto', marginTop: '10%' }}>


        <Card>

            <Image src='https://learn.sapienceinstitute.org/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-18-at-11.25.56-PM.jpeg'
                wrapped ui={false} />
            <Card.Content>

                <Grid  >
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <Card.Header>Matthew</Card.Header>
                        </Grid.Column>
                        <Grid.Column width={1}>

                            <Dropdown multiple icon='ellipsis vertical' size='large' >

                                <Dropdown.Menu  >
                                    <Dropdown.Item icon={<Modal
                                        as={Form}
                                        onSubmit={e => handleSubmit(e)}
                                        trigger={<Button color='primary' basic><Icon name='edit' text='edit' />Edit</Button>}
                                        header='Update Card!'
                                        content={<Update></Update>}
                                    />} />

                                    <Dropdown.Item

                                        icon={
                                            <Modal
                                                basic
                                                onClose={() => setOpen(false)}
                                                onOpen={() => setOpen(true)}
                                                open2={open}
                                                size='small'
                                                trigger={<Button color='red' basic><Icon name='delete' text='delete' />Delete</Button>}
                                            >
                                                <Header icon>
                                                    <Icon name='archive' />
                                                    Delete Messages
                                                </Header>
                                                <Modal.Content>
                                                    <p>
                                                        Wanna Delete ?
                                                    </p>
                                                </Modal.Content>
                                                <Modal.Actions>
                                                    <Button basic color='red' inverted onClick={() => setOpen(false)}>
                                                        <Icon name='remove' /> No
                                                    </Button>
                                                    <Button color='green' inverted onClick={removeHandler}>
                                                        <Icon name='checkmark' /> Yes
                                                    </Button>
                                                </Modal.Actions>
                                            </Modal>
                                        } />

                                </Dropdown.Menu>
                            </Dropdown>



                        </Grid.Column>

                    </Grid.Row>
                </Grid>


                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
            </Card.Content>
        </Card>
    </div>
    );
};

export default SinglePromo;