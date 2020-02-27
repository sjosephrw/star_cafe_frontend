export const welcomeAndFeatures = () => {
    const markup = `<section class="section-welcome">
    <div class="container">
        
        <h2 class="title">WELCOME.</h2>
        <p class="p-welcome">
            Living valley had silent eat merits esteem bed. In last an or went wise as left. Visited civilly am demesne so colonel he calling. So unreserved do interested increasing sentiments. Vanity day giving points within six not law. Few impression difficulty his use has comparison decisively. 
        </p>
        
    </div>

</section> 
<section class="section-features">

        <div class="container">
            <h2 class="title">FEATURES.</h2>
        </div>

    <div class="container flex">

        <div class="col-3 padding-tb-40px">
            <i class="fab fa-node"></i>
            <p>
                Award winning Site.
            </p>
        </div>
        <div class="col-3 padding-tb-40px">
            <i class="fab fa-react"></i>
            <p>
                Node JS project.
            </p>
        </div>
        <div class="col-3 padding-tb-40px">
            <i class="fab fa-js"></i>
            <p>Javascript Revolution.</p>
        </div>
    </div>
</section> `; 

document.getElementsByTagName("BODY")[0].insertAdjacentHTML('beforeend', markup);

}