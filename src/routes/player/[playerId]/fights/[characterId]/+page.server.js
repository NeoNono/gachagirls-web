/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    var fights = await fetch(`http://localhost:8080/fights`)
    var player = await fetch(`http://localhost:8080/players/${params.playerId}`)
	return {player: await player.json(), playerId: params.playerId, code: params.characterId, fights: await fights.json()};
}