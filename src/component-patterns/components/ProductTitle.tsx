import { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface ProductTitleProps {
  className?: string;
  style?: CSSProperties;
  title?: string;
}

export const ProductTitle = ({
  className,
  style,
  title,
}: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
