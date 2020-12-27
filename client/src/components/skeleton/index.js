import React from 'react';
// Styles
import styles from './styles/skeleton.module.scss'

const propTypes = {};
const defaultProps = {};

function skeleton({ children, ...rest }) {
    return (
        <div className={styles.skeleton} {...rest}>
           {children}
        </div>
    );
};

function head({ children, ...rest }) {
    return (
        <div className={styles.head} {...rest}>
           {children}
        </div>
    );
};

function body({ children, ...rest }) {
    return (
        <div className={styles.body} {...rest}>
           {children}
        </div>
    );
};

function footer({ children, ...rest }) {
    return (
        <div className={styles.footer} {...rest}>
           {children}
        </div>
    );
};

skeleton.displayName = 'skeleton';
skeleton.propTypes = propTypes;
skeleton.defaultProps = defaultProps;

skeleton.Head = head;
skeleton.Body = body;
skeleton.Footer = footer;

export default skeleton;
