import React from 'react';
import { Grid, Dropdown, Modal, Header, Item, Card, Image, Form, Checkbox, Button, Icon } from 'semantic-ui-react';


const SinglePromo = () => {
    return (
        <div style={{ width: '60%', margin: 'auto', marginTop: '10%' }}>


        <Card>

            <Image src='https://learn.sapienceinstitute.org/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-18-at-11.25.56-PM.jpeg'
                wrapped ui={false} />
            <Card.Content>

               

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