let radio = {
    stations:[{
        name: '98.7fm',
        song: [
            {
                title:'Heat Waves',
                artist:'Glass Animals',
            },
            {
                title: 'Viva La Vida',
                artist: 'Coldplay',
            },
            {
                title: 'In the End',
                artist: 'Linkin Park',
            },

            
        ],   
      

            
    },
    {
        name: '103.5fm',
        song:[{

            title:'Are You That Somebody',
            artist: 'Aaliyah',
            
        },
        {
            title:'Temperature',
            artist: 'Sean Paul',
        },
        {
            title: 'Woman',
            artist: 'Doja Cat'
        }

            
    ]
    }

        
                
  ], //method function to easily access data , cannot use function prefix because not providing parameters
    // Math.floor rounds numeric values down to the nearest integer, Math.random gets a value between 1 and 0
    // must multiply by length of stations to expand range, same as currentStation.song
    // current song is referencing current station and trying to get a random song object from the array
    //console.log prints out title and artist 
    // .length providing the length of the array
    //  this. references the current object scope 
   stationSong: function() {                                                                //arrow function did not work because it will not be scoped to the object
        let currentStation= this.stations[Math.floor(Math.random() * this.stations.length)]; // is finding random station,
        let currentSong = currentStation.song[Math.floor(Math.random() * currentStation.song.length)]; // is finding current song within that station
        return console.log('Now Playing: ' , currentSong.title  , ' by ' , currentSong.artist); // "," over + when trying to print objects, console log is printing title, and artist of current song
       
    },
   
}
// radio.stationSong is calling(invoke)the function
radio.stationSong();
