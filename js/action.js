let colorir = () => {

    // Salva o body em uma variável
    let body = document.querySelector('body');

    // Faz o corpo mudar para o modo Good Vibes
    body.classList.toggle('colorir');

    // outrea hora otimizo essa parte aqui
    if (body.classList.contains('colorir')) {
        document.querySelector('.botao__colorir').innerHTML = 'Modo Serio';




        function GFG_Fun() {
            var icon = document.getElementById('#icon');
            icon.setAttribute('href', '../img/lauro__cor__icon.png');

        }




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
        imgLogo.setAttribute('src', '../img/logo__novo__colorido.png');
        document.getElementById('img__logo').style.width = "180px";

        let imgCarre = document.querySelector('#img__carregando');
        imgCarre.setAttribute('src', '../img/carregando__colorido.gif');

        let imgPer = document.querySelector('#img__perfil');
        imgPer.setAttribute('src', '../img/img__perfil__colorir.png');

        let facebook = document.querySelector('#facebook');
        facebook.setAttribute('src', '../img/facebook_logo_dark__2.png');

        let instagram = document.querySelector('#instagram');
        instagram.setAttribute('src', '../img/instagram_logo-dark__2.png');

        let twitter = document.querySelector('#twitter');
        twitter.setAttribute('src', '../img/twitter_logo_dark__2.png');

        let linkedin = document.querySelector('#linkedin');
        linkedin.setAttribute('src', '../img/linkedin_logo_dark__2.png');

        let gitHub = document.querySelector('#github');
        gitHub.setAttribute('src', '../img/GitHub_logo_da__2.png');

        let whatsapp = document.querySelector('#whatsapp');
        whatsapp.setAttribute('src', '../img/Whatsapp_logo_dark__2.png');

        let fivicon = document.querySelector('#icon');
        fivicon.setAttribute('src', '../img/color__icon.png');

        // let butt = document.querySelector('.button').style;
        // butt.backgroundColor = "#F22558";

        let a = document.querySelector('.button');
        a.classList.remove('button');
        a.classList.toggle('button2');


    } else {
        document.querySelector('.botao__colorir').innerHTML = 'Good Vibes';

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
        imgLogo.setAttribute('src', '../img/logo__novo.png');
        document.getElementById('img__logo').style.width = "112px";

        let imgCarre = document.querySelector('#img__carregando');
        imgCarre.setAttribute('src', '../img/carregando.gif');

        let imgPer = document.querySelector('#img__perfil');
        imgPer.setAttribute('src', '../img/img__perfil.png');

        let facebook = document.querySelector('#facebook');
        facebook.setAttribute('src', '../img/facebook_logo_dark__1.png');

        let instagram = document.querySelector('#instagram');
        instagram.setAttribute('src', '../img/instagram_logo-dark__1.png');

        let twitter = document.querySelector('#twitter');
        twitter.setAttribute('src', '../img/twitter_logo_dark__1.png');

        let linkedin = document.querySelector('#linkedin');
        linkedin.setAttribute('src', '../img/linkedin_logo_dark__1.png');

        let gitHub = document.querySelector('#github');
        gitHub.setAttribute('src', '../img/GitHub_logo_da__1.png');

        let whatsapp = document.querySelector('#whatsapp');
        whatsapp.setAttribute('src', '../img/Whatsapp_logo_dark__1.png');

        let titulo2 = document.querySelector('.colorir__titulo');
        titulo2.classList.remove('colorir__titulo');
        titulo2.classList.toggle('p__titulo__2');

        let titulo3 = document.querySelector('.colorir__titulo');
        titulo3.classList.remove('colorir__titulo');
        titulo3.classList.toggle('p__titulo__3');

        // let butt = document.querySelector('.button').style;
        // butt.backgroundColor = "#000";

        let a = document.querySelector('.button2');
        a.classList.remove('button2');
        a.classList.toggle('button');

    }

}