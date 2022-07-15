import React from 'react';
import { Form, Checkbox, Button, Modal, Header } from 'semantic-ui-react';

const Update = () => {
    return (
        <div style={{ width: '80%', margin: 'auto', marginTop: '2%', marginBottom: '2%' }}>

            <Form>
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
    );
};

export default Update;