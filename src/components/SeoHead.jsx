import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoHead = ({ title, description, canonical, ogType = 'website' }) => {
    const fullCanonical = canonical.startsWith('http') ? canonical : `https://wipdev.com.tr${canonical}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:type" content={ogType} />

            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SeoHead;
