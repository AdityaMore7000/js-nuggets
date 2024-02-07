const aditya = {
    first:'Aditya',
    last:'Kumar',
    country:'India',
    siblings:{
        sister:'Anjali',
        brother:'Aman'
    }
}

const {siblings:{sister:favorite}} = aditya;
console.log(favorite)