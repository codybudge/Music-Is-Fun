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
      template += `
      <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${result.artworkUrl60}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${result.trackName}</h5>
              <p class="card-text">${result.artistName}</p>
              <p class="card-text">${result.collectionName}</p>
              <p class="card-text">${result.collectionPrice}</p>
              <audio controls="controls">
                <source src="${result.previewUrl}" type="audio/wav">
              <a href="#" class="btn btn-primary">Play</a>
            </div>
          </div>
      `
    }
    var songElm = document.getElementById('songs');
    songElm = innerHTML = template;
    console.log(results)
  }




  
}
