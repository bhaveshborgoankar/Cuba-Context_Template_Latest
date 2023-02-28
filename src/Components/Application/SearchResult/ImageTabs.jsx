import { PortfolioTitle } from "../../../Constant";
import { H4, P } from "../../../AbstractElements";
import PagesSort from "./Pages";
import React, { Fragment, useState, useEffect } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import axios from "axios";
import { BigImageApi } from "../../../api";
import { Gallery, Item } from "react-photoswipe-gallery";

const PhotosTab = () => {
  const description =
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.";
  const [smallImages, setsmallImages] = useState([]);

  useEffect(() => {
    axios.get(BigImageApi).then((response) => {
      setsmallImages(response.data.src);
    });
  }, []);
  var images = require.context("../../../assets/images", true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Row>
        {smallImages && (
          <Col sm="12">
            <Card>
              <CardBody className="my-gallery row gallery-with-description">
                <Gallery>
                  {smallImages &&
                    smallImages.map((item, i) => {
                      return (
                        <Item key={i} original={`${dynamicImage(item)}`} thumbnail={`${dynamicImage(item)}`} width="700" height="700" id={item}>
                          {({ ref, open }) => (
                            <figure className="col-xl-3 col-sm-6" >
                              <a href="#javascript" data-size="1600x950">
                                <img
                                    ref= { ref }
                                    onClick= { open }
                                    src= {`${dynamicImage(item)}`}
                                    alt= "Gallery"
                                    className= "img-thumbnail"
                                />
                                <div className="caption">
                                  <H4>{PortfolioTitle}</H4>
                                  <P>{description}</P>
                                </div>
                              </a>
                            </figure>
                          )}
                        </Item>
                      );
                    })}
                </Gallery>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
      <PagesSort />
    </Fragment>
  );
};

export default PhotosTab;