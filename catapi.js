const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catbtn = document.getElementById('change-cat');


const getCats = async () =>{

    try{
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
    }

    catch(e){
        console.log(e.message);
    }

}

const loadImg = async () => {
    const catIMG = document.getElementById('cat');
    catIMG.src = await getCats();
}

catbtn.addEventListener('click', loadImg);

loadImg();