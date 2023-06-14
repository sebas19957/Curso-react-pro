import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../lazyload/pages";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LaxyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../lazyload/layouts/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    component: LaxyLayout,
    name: "LazyLayout - Dashboard",
  },
  {
    path: "NoLazy",
    to: "/NoLazy",
    component: NoLazy,
    name: "No Lazy",
  },
];
