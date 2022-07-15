import { useState } from "react";
import React from 'react'
import ImageUploading from 'react-images-uploading';

import { Grid, Image, Button, Segment, Header, Icon } from 'semantic-ui-react';


const ImagesUploader = () => {

  const [images, setImages] = useState([]);
  const maxNumber = 69;//maximum image upload
  const onChange = (imageList) => {
    setImages(imageList)
  }


  return (<div style={{ width: '60%', margin: 'auto', marginTop: '10%' }}>
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (

        <div className="upload__image-wrapper">

          <div style={{ marginBottom: '5%' }}>
            <Segment style={isDragging ? { color: 'red' } : undefined}

              {...dragProps} placeholder>
              <Header icon>
                <Icon name='images outline' />
                Click or drag images to this area to upload
              </Header>
              <Button onClick={onImageUpload} primary>Add Images</Button>
            </Segment>
          </div>

          {
            imageList.length ? <Button negative onClick={onImageRemoveAll}><Icon name='trash' /> Remove All Iamges !</Button> : ''

          }
          <Grid columns={3} >
            <Grid.Row>

              {imageList.map((image, index) => (<Grid.Column >
                <div style={{ margin: '5%' }} key={index} className="image-item">
                  <Image bordered rounded style={{ marginBottom: '3%' }} src={image['data_url']} />
                  <div className="image-item__btn-wrapper">
                    <Button primary basic onClick={() => onImageUpdate(index)}><Icon name='pencil' /></Button>
                    <Button negative basic onClick={() => onImageRemove(index)}><Icon name='remove' /></Button>
                  </div>
                </div>
              </Grid.Column>
              ))}
            </Grid.Row>
          </Grid >

        </div>
      )}
    </ImageUploading>
  </div>
  );
}

export default ImagesUploader;