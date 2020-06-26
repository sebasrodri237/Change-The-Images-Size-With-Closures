const buttonFacebook = document.getElementById('button-facebook');
const buttonTwitter = document.getElementById('button-twitter');
const buttonInstagram = document.getElementById('button-instagram');
const imageToChange = document.getElementById('image');

const initializeFunction = (size) => {

    let newSize = size;
    const newImageSize = () => {

        console.log(`${newSize}px`)
        imageToChange.style.width = `${newSize}px`;
        imageToChange.style.height = `${newSize}px`;
        
    }
    return newImageSize;
}

let changeSizeFacebook = initializeFunction(180);
let changeSizeTwitter = initializeFunction(400);
let changeSizeInstagram = initializeFunction(560);

buttonFacebook.addEventListener('click', changeSizeFacebook);
buttonTwitter.addEventListener('click', changeSizeTwitter);
buttonInstagram.addEventListener('click', changeSizeInstagram);

