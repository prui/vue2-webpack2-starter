import Drawer from './Drawer';
import RouterApp from './RouterApp';
import DrawerContent from './DrawerContent';

let plugin = function(Vue) {
  Vue.component(Drawer.name, Drawer);
  Vue.component(RouterApp.name, RouterApp);
  Vue.component(DrawerContent.name, DrawerContent);
};

export {
  Drawer,
  RouterApp,
  DrawerContent
};

export default plugin;
