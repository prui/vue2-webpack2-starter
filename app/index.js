/* 重置css */
import 'reset-css/reset.css';
/* 重置css */

import Vue from 'vue';
import YDUI from 'vue-ydui';
import store from './stores';
import Config from './config';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import Components from './components';
import router from './pages/AppRouter';

import { plugin as EventBusPlugin } from 'EventBus';
import { plugin as PlatformPlugin } from 'Platform';
import { plugin as $q } from '$q';


/* css */

import './scss/app.scss';
import 'vue-ydui/dist/ydui.px.css';
import 'flex.css/dist/flex.css';

Vue.use($q);
Vue.use(YDUI);
Vue.use(Config);
Vue.use(VueRouter);
Vue.use(Components);
Vue.use(EventBusPlugin);
Vue.use(PlatformPlugin);

/* 添加FastClick到body */
FastClick.attach(document.body);


new Vue({ store, router }).$mount("router-app");