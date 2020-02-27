import SlideShow from './js/models/SlideShow';
import NavBar from './js/models/NavBar';

import { navBar, generateMenu } from './js/views/navBar';
import { slideShow, generateSlides } from './js/views/homepage/slideShow';
import { welcomeAndFeatures } from './js/views/homepage/welcome';
import { footer } from './js/views/footer';

const state = {};



state.slides = new SlideShow();
state.navbar = new NavBar();

const slides = async () => {

    await state.slides.getSlides(); 
    console.log(state.slides.res[0].summary);

    // index.runBoundFunc();

    slideShow(generateSlides(state.slides.res));
    // object.runBoundTimer();
}

const navbar = async () => {

    await state.navbar.getMenus(); 
    //console.log(state.navbar.res[0].name);
    navBar(generateMenu(state.navbar.res));

}

window.addEventListener('load', async () => {
    await navbar();
    await slides();
    welcomeAndFeatures();
    footer();
//https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript
    // document.addEventListener('click',function(e){
    //     if(e.target && e.target.id== 'toggle-submenu'){
    //         //do something
    //         e.preventDefault();
    //         if (document.querySelector('.submenu').classList.contains('show')){
    //             document.querySelector('.submenu').classList.remove("show");
    //             document.querySelector('.submenu').classList.add("hide");
    //         } else {
    //             document.querySelector('.submenu').classList.remove("hide");
    //             document.querySelector('.submenu').classList.add("show");        
    //         }              
    //      }
    //  });

})

//https://stackoverflow.com/questions/7056669/how-to-prevent-default-event-handling-in-an-onclick-method

