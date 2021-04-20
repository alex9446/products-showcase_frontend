import { mdiAccount } from '@mdi/js';
import { PageProps } from 'gatsby';
import React from 'react';

import { FAKE_BOXES } from '../utils/fake-data';
import { getProductIdFromSearch } from '../utils/mixed';

import BoxList from '../components/box-list/box-list';
import Head from '../components/head';
import LinkIcon from '../components/icon/link-icon';
import PageHeading from '../components/page-heading';
import ProductModal from '../components/product-modal/product-modal';

export default function Index(props: PageProps) {
    const searchedProductId = getProductIdFromSearch(props.location.search);
    const selectedProduct = FAKE_BOXES.find(product => product.id === searchedProductId);
    const pageTitle = selectedProduct ? selectedProduct.name : '';

    return (
        <>
            <div id="index-page">
                <Head title={pageTitle} />
                <LinkIcon
                    to="/login"
                    path={mdiAccount}
                    class="profile-icon corner-icon"
                />
                <PageHeading>Products Showcase</PageHeading>
                <BoxList>{FAKE_BOXES}</BoxList>
            </div>
            {selectedProduct && <ProductModal>{selectedProduct}</ProductModal>}
        </>
    );
}
