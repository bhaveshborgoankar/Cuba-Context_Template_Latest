import { Breadcrumbs } from '../../../../AbstractElements';
import FilterContext from '../../../../_helper/Ecommerce/Filter';
import ProductFeatures from './ProductFeatures';
import ProductGrid from './ProductGrid';
import React, { useContext } from 'react';
import { Fragment } from 'react';
import { Container } from 'reactstrap';

const ProductContain = () => {
  const { sideBarOn } = useContext(FilterContext);

    return (
        <Fragment>
            <Breadcrumbs parent="Ecommerce" title="Products" mainTitle="Products" />
            <Container fluid={true}         className={`product-wrapper ${sideBarOn ? "sidebaron" : ""}`} id="product-wrapper">
                <div className="product-grid">
                    <ProductFeatures />
                    <ProductGrid />
                </div>
            </Container>
        </Fragment>
    );
};
export default ProductContain;