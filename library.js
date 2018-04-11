var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
             // prints a list of all playlists, in the form:
             // p01: Coding Music - 2 tracks
             // p02: Other Playlist - 1 tracks
              printPlaylists : function () {
                 for(var key in this.playlists){
                   console.log(`${this.playlists[key].id}: ${this.playlists[key].name} - ${this.playlists[key].tracks.length} tracks`)
                 }
             },
             // prints a list of all tracks, in the form:
             // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
             // t02: Model View Controller by James Dempsey (WWDC 2003)
             // t03: Four Thirty-Three by John Cage (Woodstock 1952)
              printTracks : function () {
               for(var key in library.tracks){
                 console.log(`${this.tracks[key].id}: ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`)
               }

             },
             // prints a list of tracks for a given playlist, in the form:
             // p01: Coding Music - 2 tracks
             // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
             // t02: Model View Controller by James Dempsey (WWDC 2003)
              printPlaylist : function (playlistId) {
                    console.log(`${this.playlists[playlistId].id}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`)

                    for(var key of this.playlists[playlistId].tracks){
                        console.log(`${this.tracks[key].id}: ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`)

                    }
             },
             // adds an existing track to an existing playlist
              addTrackToPlaylist : function (trackId, playlistId) {
                 this.playlists[playlistId].tracks.push(trackId)
                 console.log(this.playlists[playlistId].tracks)

             },
             // generates a unique id
             // (use this for addTrack and addPlaylist)
              uid : function() {
               return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
             },
              addTrack : function (name, artist, album) {
               var newName = uid()
               this.tracks[newName] = {}
               this.tracks[newName]['id'] = newName
               this.tracks[newName]['name'] = name
               this.tracks[newName]['artist'] = artist
               this.tracks[newName]['album'] = album

             },
             // adds a playlist to the this
              addPlaylist : function (name) {

                newPlaylist = this.uid();
               this.playlists[newPlaylist] = {}
               this.playlists[newPlaylist]['id'] = newPlaylist
               this.playlists[newPlaylist]['name'] = name
               this.playlists[newPlaylist]['tracks'] = []
             },
             // given a query string string, prints a list of tracks
             // where the name, artist or album contains the query string (case insensitive)
             // tip: use "string".search("tri")
              printSearchResults : function(query) {

               for (var key in this.tracks){
                   var searchTerm = new RegExp(query,"gi");
                   var stringedObj = `${this.tracks[key].id} ${this.tracks[key].name} ${this.tracks[key].artist} ${this.tracks[key].album}`
                 //  console.log(stringedObj)

                 if(stringedObj.search(searchTerm) != -1){
                     console.log(` You were looking for : ${this.tracks[key].name} by ${this.tracks[key].artist}`)

                 }
               }

             }

}



          library.printPlaylists()

          library.printTracks()

          library.printPlaylist("p01")

          library.addTrackToPlaylist('t01',"p02")

          library.addPlaylist('TTC Rage')

          library.printPlaylists()

          library.printSearchResults('co')
