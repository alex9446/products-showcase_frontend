import { mdiAccount, mdiLogoutVariant } from '@mdi/js';
import { PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { FAKE_BOXES } from '../utils/fake-data';
import { getProductIdFromSearch, sortAscByPosition } from '../utils/mixed';

import BoxList from '../components/box-list/box-list';
import { checkLogin } from '../utils/auth';
import Head from '../components/head';
import LinkIcon from '../components/icon/link-icon';
import PageHeading from '../components/page-heading';
import ProductModal from '../components/product-modal/product-modal';

export default function Index(props: PageProps) {
    const [products, setProducts] = useState(() => sortAscByPosition(FAKE_BOXES.slice(0,6)));
    const [showLogout, setShowLogout] = useState(true);

    // Check if the user is not logged
    useEffect(() => {
        checkLogin()
        .catch(() => setShowLogout(false));
    }, []);

    const searchedProductId = getProductIdFromSearch(props.location.search);
    const selectedProduct = products.find(product => product.id === searchedProductId);
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
                {showLogout && 
                    <LinkIcon
                        to="/logout"
                        path={mdiLogoutVariant}
                        class="logout-icon corner-icon"
                    />
                }
                <PageHeading>Products Showcase</PageHeading>
                <BoxList>{products}</BoxList>
            </div>
            {selectedProduct && <ProductModal>{selectedProduct}</ProductModal>}
        </>
    );
}
