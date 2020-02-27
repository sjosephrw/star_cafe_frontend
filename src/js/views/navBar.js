import { elements } from './base';

export const navBar = (submenu) => {
    const markup = `<header>
    <nav>
        <a href="index.html" class="logo">
            <i class="far fa-clock"></i>
        </a>

        <ul class="links-navi">
            <li>
                <a href="#" id="toggle-submenu">MENU</a>

                <ul class="submenu">
                    ${submenu}
                    <div class="clearfix"></div>
                </ul>
            </li>
            <li>
                <a href="my_account.html">
                    MY ACCOUNT
                </a>
            </li>
            <li>
                <a href="search.html">
                    SEARCH
                </a>
            </li>                            
        </ul>

        <a href="#" class="resp-menu-close">
            <i class="fas fa-times"></i>
        </a>
        <a href="#" class="resp-menu-open">
            <i class="fas fa-bars"></i>
        </a>            

        <div class="clearfix"></div>
    </nav>
</header>`;

document.getElementsByTagName("BODY")[0].insertAdjacentHTML('beforeend', markup);
document.querySelector('.submenu').classList.remove("show");
document.querySelector('.submenu').classList.add("hide");

document.getElementById('toggle-submenu').addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('.submenu').classList.contains('show')){
        document.querySelector('.submenu').classList.remove("show");
        document.querySelector('.submenu').classList.add("hide");
    } else {
        document.querySelector('.submenu').classList.remove("hide");
        document.querySelector('.submenu').classList.add("show");        
    }
  });

  var x = window.matchMedia("(max-width: 600px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


  function myFunction(x) {
      if (x.matches) { // If media query matches
          document.querySelector('.links-navi').classList.remove("show");
          document.querySelector('.links-navi').classList.add("hide");
          
          document.querySelector('.resp-menu-open').classList.remove("hide");
          document.querySelector('.resp-menu-open').classList.add("show");    
      
          document.querySelector('.resp-menu-close').classList.remove("show");
          document.querySelector('.resp-menu-close').classList.add("hide");         
          
  
      } else {
          document.querySelector('.links-navi').classList.remove("hide");
          document.querySelector('.links-navi').classList.add("show"); 
  
          document.querySelector('.resp-menu-open').classList.remove("show");
          document.querySelector('.resp-menu-open').classList.add("hide"); 
          
          document.querySelector('.resp-menu-close').classList.remove("show");
          document.querySelector('.resp-menu-close').classList.add("hide");         
  
      }
    }

  document.querySelector('.resp-menu-open').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.links-navi').classList.remove("hide");
      document.querySelector('.links-navi').classList.add("show"); 
  
      document.querySelector('.resp-menu-open').classList.remove("show");
      document.querySelector('.resp-menu-open').classList.add("hide");    
  
      document.querySelector('.resp-menu-close').classList.remove("hide");
      document.querySelector('.resp-menu-close').classList.add("show");     
      
    });
  
  
    document.querySelector('.resp-menu-close').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.links-navi').classList.remove("show");
      document.querySelector('.links-navi').classList.add("hide"); 
  
      document.querySelector('.resp-menu-open').classList.remove("hide");
      document.querySelector('.resp-menu-open').classList.add("show");    
  
      document.querySelector('.resp-menu-close').classList.remove("show");
      document.querySelector('.resp-menu-close').classList.add("hide");     
      
    });

}

const subMenu = (_id, name) => {
    const markup =`<li><a href="/menu/${_id}">${name}</a></li>`;
    return markup;
}

export const generateMenu = (menus) => {
    let markup = '';
    console.log(menus)
    
    let ids = menus.map(el => {
        return el._id;
    });

    let names = menus.map(el => {
        return el.name;
    });

    
    const menuString = [];

    for(let x = 0; x < ids.length; x++){
        
        menuString.push(subMenu(ids[x], names[x]));
    }

    let string = '';
    string = menuString.toString();
    string = string.replace(/,/g, ""); 
    return string;
}

