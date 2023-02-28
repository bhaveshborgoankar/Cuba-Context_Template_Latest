import React, { Fragment, useState, useContext, useCallback } from 'react';
import { Container, Row } from 'reactstrap'
import { Breadcrumbs } from '../../../AbstractElements';
import GalleryContext from '../../../_helper/Gallery';
import ListOfImage from './ListOfImages';

const ImageGallery = () => {

    const { images, smallImages } = useContext(GalleryContext);
    

    return (
        <Fragment>
            <Breadcrumbs mainTitle="Gallery Grid" parent="Gallery" title="Gallery Grid" />
            <Container fluid={true}>
                <Row>
                    <ListOfImage smallImages={smallImages}  />
                </Row>
            </Container>
        </Fragment>
    );
}


export default ImageGallery;