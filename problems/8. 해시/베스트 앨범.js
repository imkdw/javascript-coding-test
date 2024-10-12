/**
 * @param {string[]} genres
 * @param {number[]} plays
 */
function solution(genres, plays) {
  let answer = [];
  const genresObj = {};
  const playsObj = {};

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!(genre in genresObj)) {
      genresObj[genre] = [];
      playsObj[genre] = 0;
    }

    genresObj[genre].push([i, play]);
    playsObj[genre] += play;
  }

  console.log("playsObj :>> ", playsObj);

  const sortedGenres = Object.keys(playsObj).sort((a, b) => {
    return playsObj[b] - playsObj[a];
  });

  console.log(sortedGenres);

  for (const genre of sortedGenres) {
    const sortedSongs = genresObj[genre].sort((a, b) => {
      return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
    });

    console.log("sortedSongs :>> ", sortedSongs);
    answer.push(...sortedSongs.slice(0, 2).map((song) => song[0]));
  }

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
