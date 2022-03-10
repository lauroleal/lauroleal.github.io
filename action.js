let colorir = () => {

    // Salva o body em uma variável
    let body = document.querySelector('body');

    // Faz o corpo mudar para o modo claro/escuro
    body.classList.toggle('colorir');
    
    
    // Altera o ícone de acordo com o modo
    if(body.classList.contains('colorir')) {
    document.querySelector('.botao__colorir').innerHTML = 'Modo Serio';
  
    let p = document.querySelector('.p__texto');
    p.classList.remove('p__texto');
    p.classList.toggle('colorir__p');

    let titulo = document.querySelector('.p__titulo');
    titulo.classList.remove('p__titulo');
    titulo.classList.toggle('colorir__titulo');

    let titulo2 = document.querySelector('.p__titulo__2');
    titulo2.classList.remove('p__titulo__2');
    titulo2.classList.toggle('colorir__titulo');

    let titulo3 = document.querySelector('.p__titulo__3');
    titulo3.classList.remove('p__titulo__3');
    titulo3.classList.toggle('colorir__titulo');

    let h1 = document.querySelector('.h1');
    h1.classList.remove('h1');
    h1.classList.toggle('colorir__color');

    let h5 = document.querySelector('.h5');
    h5.classList.remove('h5');
    h5.classList.toggle('colorir__color');

    let imgLogo = document.querySelector('#img__logo');
    imgLogo.setAttribute('src', 'logo__Lauro__colorido.png');
    document.getElementById('img__logo').style.width = "210px";

    let imgCarre = document.querySelector('#img__carregando');
    imgCarre.setAttribute('src', 'carregando__colorido.gif');
    
    let imgPer = document.querySelector('#img__perfil');
    imgPer.setAttribute('src', 'img__perfil__colorir.png');

    let facebook = document.querySelector('#facebook');
    facebook.setAttribute('src', 'facebook_logo_dark__2.png');

    let instagram = document.querySelector('#instagram');
    instagram.setAttribute('src', 'instagram_logo-dark__2.png');

    let twitter = document.querySelector('#twitter');
    twitter.setAttribute('src', 'twitter_logo_dark__2.png');

    let linkedin = document.querySelector('#linkedin');
    linkedin.setAttribute('src', 'linkedin_logo_dark__2.png');

    let gitHub = document.querySelector('#github');
    gitHub.setAttribute('src', 'GitHub_logo_da__2.png');

    let whatsapp = document.querySelector('#whatsapp');
    whatsapp.setAttribute('src', 'Whatsapp_logo_dark__2.png');
    
    let butt = document.querySelector('.button').style;
    butt.backgroundColor = "#F22558";

 


    } else {
    document.querySelector('.botao__colorir').innerHTML = 'Modo Good Vibes';
    
    let p = document.querySelector('.colorir__p');
    p.classList.remove('colorir__p');
    p.classList.toggle('p__texto');

    let titulo = document.querySelector('.colorir__titulo');
    titulo.classList.remove('colorir__titulo');
    titulo.classList.toggle('p__titulo');

    let h1 = document.querySelector('.colorir__color');
    h1.classList.remove('colorir__color');
    h1.classList.toggle('h1');

    let h5 = document.querySelector('.colorir__color');
    h5.classList.remove('colorir__color');
    h5.classList.toggle('h5');

    let imgLogo = document.querySelector('#img__logo');
    imgLogo.setAttribute('src', 'logo__Lauro.png');
    document.getElementById('img__logo').style.width = "170px";

    let imgCarre = document.querySelector('#img__carregando');
    imgCarre.setAttribute('src', 'carregando.gif');

    let imgPer = document.querySelector('#img__perfil');
    imgPer.setAttribute('src', 'img__perfil.png');

    let facebook = document.querySelector('#facebook');
    facebook.setAttribute('src', 'facebook_logo_dark__1.png');

    let instagram = document.querySelector('#instagram');
    instagram.setAttribute('src', 'instagram_logo-dark__1.png');

    let twitter = document.querySelector('#twitter');
    twitter.setAttribute('src', 'twitter_logo_dark__1.png');

    let linkedin = document.querySelector('#linkedin');
    linkedin.setAttribute('src', 'linkedin_logo_dark__1.png');

    let gitHub = document.querySelector('#github');
    gitHub.setAttribute('src', 'GitHub_logo_da__1.png');

    let whatsapp = document.querySelector('#whatsapp');
    whatsapp.setAttribute('src', 'Whatsapp_logo_dark__1.png');

    let titulo2 = document.querySelector('.colorir__titulo');
    titulo2.classList.remove('colorir__titulo');
    titulo2.classList.toggle('p__titulo__2');

    let titulo3 = document.querySelector('.colorir__titulo');
    titulo3.classList.remove('colorir__titulo');
    titulo3.classList.toggle('p__titulo__3');
    
    let butt = document.querySelector('.button').style;
    butt.backgroundColor = "#000";

    }
    
}