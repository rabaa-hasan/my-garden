'use atrict';

////global
let form = document.getElementById ( 'form' );
let table = document.getElementById( 'table' );

let arr=[];

/////functions
function Flower( name,image,season ){
  this.name=name;
  this.image='./img/${this.name}.jpeg';
  this.season=season;
  arr.push( this );
}

Flower.prototype.renderFlower = function(){
  let tableRow = document.createElement( 'tr' );

  let flowerNameTD = document.createElement( 'td' );
  flowerNameTD.textContent = this.name;


  let flowerImageTD = document.createElement( 'td' );
  flowerImageTD.textContent = this.image;


  let flowerSeasonTD = document.createElement( 'td' );
  flowerSeasonTD.textContent = this.season;

  tableRow.appendChild( flowerNameTD );
  tableRow.appendChild( flowerImageTD );
  tableRow.appendChild( flowerSeasonTD );

  table.appendChild( tableRow );
};

function renderFlowersItemes(){
  for( let i = 0 ; i< arr.length ; i++ ){
    console.log( i );
    let tableRow = document.createElement( 'tr' );

    let flowerNameTD = document.createElement( 'td' );
    flowerNameTD.textContent = this.name;


    let flowerImageTD = document.createElement( 'td' );
    flowerImageTD.textContent = this.image;


    let flowerSeasonTD = document.createElement( 'td' );
    flowerSeasonTD.textContent = this.season;

    tableRow.appendChild( flowerNameTD );
    tableRow.appendChild( flowerImageTD );
    tableRow.appendChild( flowerSeasonTD );

    table.appendChild( tableRow );
  }
}

function handleFormSubmission( event ){
  event.preventDefault();
  let flowerName=event.target.name.value;
  let flowerImage=event.target.image.value;
  let flowerSeason=event.target.season.value;

  let newFlower= new Flower( flowerName,flowerImage,flowerSeason );
  newFlower.renderFlower();
  localStorage.setItem( 'newFlower',JSON.stringify( arr ) );
}
function checkList (){
  if ( localStorage.getItem( 'newFlower' ) ){
    arr=JSON.parse( localStorage.getItem( 'arr' ) );
    renderFlowersItemes();
  }
}

//////invoking
form.addEventListener( 'submit',handleFormSubmission );
checkList();
