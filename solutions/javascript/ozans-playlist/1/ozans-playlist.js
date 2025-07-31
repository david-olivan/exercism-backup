// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const set = new Set();
  let list = [];
  playlist.forEach(track => set.add(track));
  set.forEach(track => list.push(track));
  
  return list;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return playlist.includes(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  let tracks = removeDuplicates(playlist);
  if (!hasTrack(tracks, track)) {
    tracks.push(track);
  }
  return tracks;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const tracks = new Set();
  playlist.forEach(tr => tracks.add(tr));
  tracks.delete(track);
  let list = [];
  tracks.forEach(tr => list.push(tr));

  return list;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const artists = new Set();
  playlist.forEach(track => artists.add(track.split(" - ")[1]));
  
  let arts = [];
  artists.forEach(art => arts.push(art));
  return arts;
}
