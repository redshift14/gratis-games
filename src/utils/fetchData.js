export const freeToPlayGamesApiOptions = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
}