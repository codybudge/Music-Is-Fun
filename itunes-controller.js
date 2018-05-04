function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(results){
    var template = '';
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var custImg = result.albumArt.replace('60x60','350x350')
      template += `
      
      <div class="card d-flex justify-content-center">
            <img class="card-img-top" src="${custImg}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${result.title}</h5>
              <p class="card-text">${result.artist}</p>
              <p class="card-text">${result.collection}</p>
              <p class="card-text">${result.price}</p>
              <audio class="audioBar" controls="controls">
                <source src="${result.preview}" type="audio/wav">
              <a href="#" class="btn btn-primary">Play</a>
            </div>
          </div>        
      `
    }
    var songElm = document.getElementById('songs');
    songElm.innerHTML = template;
    console.log(results)
  }




  
}
