import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	var player = await fetch(`http://localhost:8080/players/${params.playerId}`)
    var characters = await fetch(`http://localhost:8080/players/${params.playerId}/characters`)
	return {player: await player.json(), characters: await characters.json()};
}