import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Image } from "../../../AbstractElements";
import { IMAGE_GALLERY } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import { Gallery, Item } from "react-photoswipe-gallery";

const ListOfImage = ({ smallImages }) => {
  var images = require.context("../../../assets/images", true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  }
  let imagesData = [0, 2, 1, 3, 8, 5, 4, 9, 6, 7, 11, 10];
  return (
    <Fragment>
      {smallImages.length > 0 ? (
        <Col sm="12">
          <Card>
            <HeaderCard title={IMAGE_GALLERY} />
            <CardBody>
              <div className="my-gallery row">
                <Gallery>
                  {imagesData.map((item, i) => {
                    return (
                      <Item
                        key={i}
                        original={`${dynamicImage(smallImages[item])}`}
                        thumbnail={`${dynamicImage(smallImages[item])}`}
                        width="700"
                        height="700"
                        id={item}
                      >
                        {({ ref, open }) => (
                          <figure className="col-xl-3 col-sm-6">
                            <img
                                ref= { ref }
                                onClick= { open }
                                src= {require(`../../../assets/images/${smallImages[item]}`)}
                                alt= "Gallery"
                                className= "img-thumbnail"
                            />
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

export default ListOfImage;
