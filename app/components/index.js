import Drawer from './Drawer';
import RouterApp from './RouterApp';
import ScrollContent from './ScrollContent';
import DrawerContent from './DrawerContent';

let plugin = function(Vue) {
  Vue.component(Drawer.name, Drawer);
  Vue.component(RouterApp.name, RouterApp);
  Vue.component(ScrollContent.name, ScrollContent);
  Vue.component(DrawerContent.name, DrawerContent);
};

export {
  Drawer,
  RouterApp,
  ScrollContent,
  DrawerContent
};

export default plugin;
