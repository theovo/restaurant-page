import imagePath from './img/restaurant.png';

function loadTabHello() {
    const main = document.querySelector('main');

    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    const buttons = document.querySelectorAll('button');

    for (let b of buttons) {
        b.removeAttribute('class');
    }

    const button = document.querySelector('#hello');
    button.className = 'active';

    const heading = document.createElement('h1');
    heading.textContent = 'Theo\'s Restaurant';
    main.append(heading);

    const image = document.createElement('img');
    image.src = imagePath;
    image.className = 'restaurant';
    image.alt = 'front of restaurant';
    // image.setAttribute('alt', 'front of restaurant');
    main.append(image);

    const para = document.createElement('p');
    para.className = 'intro';
    para.textContent =
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt asperiores consequatur illum et at, dolores nisi, ad temporibus nihil error suscipit aperiam officia quisquam! Reiciendis ab dignissimos iusto a velit.';
    main.append(para);
}

export default loadTabHello;