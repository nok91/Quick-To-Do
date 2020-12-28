import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// Styles
import styles from './styles/skeleton.module.scss';

function Skeleton({ children, className, ...rest }) {
  const classNames = cx({
    [styles.skeleton]: true,
    [className]: true
  });
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}

Skeleton.displayName = 'Skeleton';
Skeleton.prototype = {
  children: PropTypes.node,
  className: PropTypes.string
};

function Head({ children, className, ...rest }) {
  const classNames = cx({
    [styles.head]: true,
    [className]: true
  });
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}
Head.displayName = 'Skeleton.Head';
Head.prototype = {
  children: PropTypes.node,
  className: PropTypes.string
};

function Body({ children, className, ...rest }) {
  const classNames = cx({
    [styles.body]: true,
    [className]: Boolean(className)
  });
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}
Body.displayName = 'Skeleton.Body';
Body.prototype = {
  children: PropTypes.node,
  className: PropTypes.string
};

function Footer({ children, className, ...rest }) {
  const classNames = cx({
    [styles.footer]: true,
    [className]: true
  });
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}
Footer.displayName = 'Skeleton.Footer';
Footer.prototype = {
  children: PropTypes.node,
  className: PropTypes.string
};

Skeleton.Head = Head;
Skeleton.Body = Body;
Skeleton.Footer = Footer;

export default Skeleton;
