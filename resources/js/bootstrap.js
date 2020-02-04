window._ = require('lodash');



window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import "jquery";
import "popper.js";
import "bootstrap";


import Vue from 'vue';
window.Vue = Vue;


import VueRouter from 'vue-router';
window.VueRouter = VueRouter;