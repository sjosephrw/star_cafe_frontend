export const footer = () => {
    const markup = `<footer>
    <div class="container">
        <ul class="navi-social">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
        <p class="copyright">&copy;NATOURS PROJECT 2019, All rights reserved, designed and developed by S. Joseph R. Wimalasuriya.</p>
    </div>
    
</footer> `; 

document.getElementsByTagName("BODY")[0].insertAdjacentHTML('beforeend', markup);

}