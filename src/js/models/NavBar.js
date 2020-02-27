import axios from 'axios';
import { key, proxy } from '../../config';
import "regenerator-runtime/runtime";
//https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime
//https://github.com/babel/babel/issues/9849

export default class NavBar {
    constructor() {

    }

    async getMenus() {
        try {
            const res = await axios(`${proxy}https://starcafe.josephrominda.repl.co/api/v1/menu`);
            console.log(res.data.data.data[0].name);
            this.res = res.data.data.data;
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Something went wrong :(');
        }
    }
}