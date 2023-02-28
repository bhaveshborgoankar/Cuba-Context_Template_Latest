import React, { Fragment } from "react";
import { Card, CardBody, Col, Media } from "reactstrap";
import { Description, IMAGE_GALLERY, PortfolioTitle } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import { Gallery, Item } from "react-photoswipe-gallery";
import { H4, P } from "../../../AbstractElements";

const ListOfImageDesc = ({ smallImages, setPhotoIndex, photoIndex }) => {
  var images = require.context("../../../assets/images", true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  let ImagesData = [
    { index: 0 },
    { index: 0 },
    { index: 0 },
    { index: 0 },
    { index: 0 },
    { index: 0 },
    { index: 0 },
    { index: 0 },
    { index: 0 },
    { index: 0 },
    { index: 0 },
    { index: 0 },
  ];
  return (
    <Fragment>
      {smallImages.length > 0 ? (
        <Col sm="12">
          <Card>
            <HeaderCard title={IMAGE_GALLERY} />
            <CardBody>
              <div className="my-gallery row gallery-with-description">
                <Gallery>
                  {ImagesData.map((data, i) => {
                    return (
                      <Item
                        key={i}
                        original={`${dynamicImage(smallImages[i])}`}
                        thumbnail={`${dynamicImage(smallImages[i])}`}
                        width="700"
                        height="700"
                        id={i}
                      >
                        {({ ref, open }) => (
                          <figure className="col-xl-3 col-sm-6">
                            <a href="#javascript" data-size="1600x950">
                              <img
                                ref={ref}
                                onClick={open}
                                src={`${dynamicImage(smallImages[i])}`}
                                alt="Gallery"
                                className="img-thumbnail"
                              />
                              <div className="caption">
                                <H4>{PortfolioTitle}</H4>
                                <P>
                                  {
                                    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
                                  }
                                </P>
                              </div>
                            </a>
                          </figure>
                        )}
                      </Item>
                    );
                  })}
                </Gallery>
              </div>
            </CardBody>
          </Card>
        </Col>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ListOfImageDesc;
