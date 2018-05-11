album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
        <td class='number-icon'>
        <button>
          <span class="song-number">${index + 1}</span>
          <span class="ion-play"></span>
          <span class="ion-pause"></span>
        </button>
      </td>
      <td class='song-title'>${song.title}</td>
      <td class='total-time'>${player.prettyTime(song.duration)}</td>
      </tr>
    `);

song.element.on('click', event => {
    player.playPause(song);
    $('button#play-pause').attr('playState', player.playState);
     $('#time-control .total-time').text( player.prettyTime(song.duration) );
        });

    $( '#song-list' ).append(song.element);
  });
