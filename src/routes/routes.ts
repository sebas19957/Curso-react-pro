import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1" */ "../lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ "../lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ "../lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    component: Lazy1,
    name: "Lazy Page 1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    component: Lazy2,
    name: "Lazy Page 2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    component: Lazy3,
    name: "Lazy Page 3",
  },
];
