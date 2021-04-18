import { mdiAccount } from '@mdi/js';
import { PageProps } from 'gatsby';
import React from 'react';

import { FAKE_BOXES } from '../utils/fake-data';
import { getProductIdFromSearch } from '../utils/mixed';

import BoxList from '../components/box-list/box-list';
import Head from '../components/head';
import LinkIcon from '../components/icon/link-icon';
import PageHeading from '../components/page-heading';
import Product from '../components/product';

export default function Index(props: PageProps) {
    const productId = getProductIdFromSearch(props.location.search);

    return (
        <>
            <div id="index-page">
                <Head />
                <LinkIcon
                    to="/login"
                    path={mdiAccount}
                    class="profile-icon corner-icon"
                />
                <PageHeading>Products Showcase</PageHeading>
                <BoxList>{FAKE_BOXES}</BoxList>
            </div>
            {productId && <Product id={productId} />}
        </>
    );
}
