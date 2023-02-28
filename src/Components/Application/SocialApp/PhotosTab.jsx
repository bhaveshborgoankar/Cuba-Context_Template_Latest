import  { Fragment, useState, useEffect } from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap'
import axios from 'axios'
import { PortfolioTitle } from "../../../Constant";
import { BigImageApi } from '../../../api';
import { H4, Image, P } from '../../../AbstractElements';
import { Gallery, Item } from "react-photoswipe-gallery";



const PhotosTab = () => {
    const description = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.';
    const [smallImages, setsmallImages] = useState([])

    useEffect(() => {
        axios.get(BigImageApi).then((response) => {
            setsmallImages(response.data.src);
        })

    }, [])

    const imagesdy = require.context("../../../assets/images", true);
    const dynamicImage = (image) => {
      return imagesdy(`./${image}`);
    };

    return (
        <Fragment>
            <Row>
                {smallImages ?
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <div className="my-gallery row gallery-with-description">
                                <Gallery>
                                {
                                    smallImages ? smallImages.map((item, i) => {
                                        return (
                                            <Item key={i} original={dynamicImage(item)} thumbnail={dynamicImage(item)}  id={item+20}>
                                            {({ ref, open }) => (
                                            <figure className="col-xl-3 col-sm-6" key={i}><a href="#javascript" data-size="1600x950">
                                                <img
                                                        ref= { ref }
                                                        onClick= { open }
                                                        src= {require(`../../../assets/images/${item}`)}
                                                        alt= 'Gallery'
                                                        className= 'img-thumbnail'
                                                        
                                                />
                                                <div className="caption">
                                                    <H4>{PortfolioTitle}</H4><P>{description}</P></div></a>
                                            </figure>)}
                                            </Item>
                                        );
                                    })
                                        : ''}

                                </Gallery>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    : ''}
            </Row>
        </Fragment>
    );
};

export default PhotosTab;