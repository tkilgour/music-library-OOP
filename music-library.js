function Library(name, creator) {
  this.name      = name;
  this.creator   = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name   = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title  = title;
  this.rating = rating;
  this.length = length;
}

function starCountGenerator(rating) {
  let starString = '';

  for (i = 0; i < rating; i++) {
    starString += '★ ';
  }
  for (i = rating; i < 5; i++) {
    starString += '☆ ';
  }
  return starString;
}

function convertSecs(secs) {
  const stringMins = String(Math.floor(secs / 60));
  let stringSecs = String(secs - stringMins * 60);
  if (stringSecs.length < 2) {
    stringSecs = '0' + stringSecs;
  }

  return `${stringMins}:${stringSecs}`
}



Playlist.prototype.overallRating = function() {
  let ratingSum = 0;

  for (let track of this.tracks) {
    ratingSum += track.rating;
  }

  const avg = ratingSum / this.tracks.length;
  const roundAvg = Math.round(avg * 10) / 10;

  console.log(roundAvg);
  return roundAvg;
};

Playlist.prototype.totalDuration = function() {
  let lengthSum = 0;

  for (let track of this.tracks) {
    lengthSum += track.length;
  }

  const readableLength = convertSecs(lengthSum);

  console.log(readableLength);
  return readableLength;
}


Library.prototype.log = function() {
  console.log(`${this.creator}'s Library: ${this.name}`);
  for (let playlist of this.playlists) {
    console.log(`\t ${playlist.name}`);
    for (let track of playlist.tracks) {
      console.log(`\t\t ${track.title} – ${convertSecs(track.length)} – ${starCountGenerator(track.rating)}`);
    }
  }
}





let myLibrary = new Library('My Tunez', 'Thomas');
myLibrary.playlists.push(new Playlist('Coding Music'));
myLibrary.playlists.push(new Playlist('Party'));

myLibrary.playlists[0].tracks.push(new Track('Lay in a Shimmer', 4, 397));
myLibrary.playlists[0].tracks.push(new Track('Polymorphing', 5, 283));
myLibrary.playlists[0].tracks.push(new Track('Arcadia', 0, 218));
myLibrary.playlists[0].tracks.push(new Track('Chrome Country', 4, 305));

myLibrary.playlists[1].tracks.push(new Track('Shitty Generic Song', 0, 1000));
myLibrary.playlists[1].tracks.push(new Track('Slightly Less Shitty Song', 3, 500));


myLibrary.playlists[0].overallRating();
myLibrary.playlists[0].totalDuration();
myLibrary.playlists[1].overallRating();
myLibrary.playlists[1].totalDuration();
myLibrary.log();



// console.log(myLibrary);
// console.log(myLibrary.playlists[0]);
