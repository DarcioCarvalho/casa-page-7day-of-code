import { ReactNode, AnchorHTMLAttributes } from "react";
import { MenuSeparator } from "../MenuSeparator";

import styles from './menuItem.module.css';

interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  withSeparator?: boolean
}

export function MenuItem({ children, withSeparator = false, className, ...rest }: MenuItemProps) {
  return (
    <>
      <a
        className={`${styles.menuItem} ${className}`}
        {...rest}
      >
        {children}
      </a>

      {withSeparator &&
        <MenuSeparator />}
    </>
  );
}