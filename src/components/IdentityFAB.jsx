import React from 'react';
import { Link } from 'react-router-dom';

const IdentityFAB = () => {
    return (
        <Link
            to="/wipdev"
            className="identity-fab"
            aria-label="wipdev info"
            style={{
                position: 'fixed',
                bottom: '12px',
                right: '12px',
                fontSize: '14px',
                opacity: 0.25,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                zIndex: 9999,
                transition: 'opacity 0.3s ease',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.25'}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
        </Link>
    );
};

export default IdentityFAB;
