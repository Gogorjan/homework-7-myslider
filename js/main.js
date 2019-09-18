const res = document.getElementById( 'Image' ) ;
const images = ['img/1.jpg' , 'img/2.jpg' , 'img/3.jpg' , 'img/4.jpg' , 'img/5.jpg' ] ;

let index = 0 ;

function next() {
    if ( index === images.length ) {
        index = 0 ;
    }
    if ( index === 0 ) {
        res.src = images[index % images.length] ;
    }
    index++ ;
    res.src = images[index % images.length] ;
}

function previous() {
    if ( index === 0 ) {
        index = images.length ;
    }
    index-- ;
    res.src = images[index % images.length] ;
}

let interval = null ;
function startInterval(  ) {
    if ( !interval ) {
        interval = setInterval( () => next() , 1000 ) ;
    }
}
function pouseInterval(  ) {
    interval && clearInterval( interval ) ;
    interval = null ;
}


