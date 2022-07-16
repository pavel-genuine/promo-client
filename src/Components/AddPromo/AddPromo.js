import React from 'react';
import { Form, Checkbox, Button, Modal, Header } from 'semantic-ui-react';


const AddPromo = () => {
    return (
        <div>
            <div style={{ width: '50%', margin: 'auto', marginTop: '5%', marginBottom: '2%' }}>

                <Form>
                    <Form.Field>
                        <label>Image URL</label>
                        <input placeholder='Image' />
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Description' />
                    </Form.Field>

                    <Button primary type='submit'>Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddPromo;