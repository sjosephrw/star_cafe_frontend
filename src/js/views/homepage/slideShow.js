export const slideShow = (slides) => {
    const markup = `<section class="section-slideshow">
    <a href="#" class="slide-navigation move-left"><i class="fas fa-chevron-left"></i></a>
        ${slides}
<a href="#" class="slide-navigation move-right"><i class="fas fa-chevron-right"></i></a>         
</section>`;

document.getElementsByTagName("BODY")[0].insertAdjacentHTML('beforeend', markup);
                
    const showFirstSlideOnPageLoad = () => {
        const slides = document.querySelectorAll('.slides');

        //hide all the slides
        for(let a = 0; a < slides.length; a++){
            slides[a].style.display = 'none';
        }                

        slides[0].style.display = 'block';

    }

    showFirstSlideOnPageLoad();

    const index = (i, y) =>{

    
        //select all the slides
        const slides = document.querySelectorAll('.slides');
    
        //hide all the slides
        for(let a = 0; a < slides.length; a++){
            slides[a].style.display = 'none';
        }
    
        slides[y].style.display = 'block';
    
        y = y + 1;
    
        if (y < 0){
            y = slides.length - 1;
        }
    
        if (y >= slides.length ){
            y = 0;
        }
        
        console.log(y);
    }

    let y = 0;

    document.querySelector('.move-left').addEventListener('click', (e) => {
        e.preventDefault();
        index(-1, y);
    })


    document.querySelector('.move-right').addEventListener('click', (e) => {
        e.preventDefault();

        let y = 0;
        index(+1, y);
    })



}


const slide = (name, summary, image) => {
    const markup =`<div class="slides" style="background-image: url(${image});">
    <div class="hero-text">
            <h2>${name}</h2>
            <p>${summary} 1</p>
    </div>
</div>`;
    return markup;
}

export const generateSlides = (slides) => {
    let markup = '';
    console.log(slides)
    
    let names = slides.map(el => {
        return el.name;
    });

    let summary = slides.map(el => {
        return el.summary;
    });

    let images = slides.map(el => {
        return el.image;
    });    

    const slideString = [];

    for(let x = 0; x < names.length; x++){
        
        slideString.push(slide(names[x], summary[x], images[x]));
    }

    let string = '';
    string = slideString.toString();
    string = string.replace(/,/g, ""); 
    return string;
}
