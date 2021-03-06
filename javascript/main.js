// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// BONUS aggiungere un'immagine presa anch'essa da un data (url dell'immagine)


const app = new Vue ({

el: '#app',

data: {

    indexPhoto: 0,

    photos: [
      './images/image1.jpg',
      './images/image2.jpg',
      './images/image3.jpg',
      './images/image4.jpg',
    ],

    intervalID: 0,

},

// è norma mettere la funzione created tra data e methods, viene chiamata insieme all'istanza Vue

created() {

  this.startLoop(); 

},

methods: {

  nextPhoto() {
    this.indexPhoto += 1;

    if (this.indexPhoto > (this.photos.length - 1)) {
      this.indexPhoto = 0;
    } 
  },

  prevPhoto() {
    
    this.indexPhoto -= 1;

    if (this.indexPhoto < 0) {
      this.indexPhoto = (this.photos.length -1)
    }


  },

  setPhoto(index) {
    
    this.indexPhoto = index

  },

  startLoop() { 
    this.intervalID = setInterval(() => {
      this.nextPhoto()
    },
    3000) 
   },

   stopLoop() {
     clearInterval(this.intervalID)
   }

}


})