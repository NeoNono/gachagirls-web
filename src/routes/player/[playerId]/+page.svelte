<script>
  import { goto, invalidateAll } from "$app/navigation";
    import { onMount } from "svelte";
    /** @type {{data: any}} */
    let { data } = $props();
    let response = $state({ id: 0, balance: 0});
    let characters = $state([{ownedCharacterId: {character: {code: 0}}, appearance: "", health: 0, stamina: 0, damage: 0}]);
    onMount(async () => {
        response = await data.player;
        characters = await data.characters;
    })

    /**
   * @param {number} playerId
   * @param {number} code
   */
    async function sellCharacter(playerId, code) {
        let result = await fetch(`http://localhost:8080/players/${playerId}/characters/${code}/sell`, {method: "PATCH"});
        characters = await (await fetch(`http://localhost:8080/players/${playerId}/characters`)).json();
        response = (await (await fetch(`http://localhost:8080/players/${playerId}`)).json());
    }
    
    /**
   * @param {number} playerId
   * @param {number} code
   */
    async function upgradeCharacter(playerId, code) {
        console.log(`${playerId}, ${code}`)
        let result = await fetch(`http://localhost:8080/players/${playerId}/characters/${code}/upgrade`, {method: "PATCH"});
        characters = await (await fetch(`http://localhost:8080/players/${playerId}/characters`)).json();
        response = (await (await fetch(`http://localhost:8080/players/${playerId}`)).json());
    }
</script>

<div>
    <h1>Welcome!</h1>
    <p>ID {response.id}</p>
    <p>Your balance: {response.balance}</p>
    <p>Your characters:</p>
    <div class="char-list">
        {#each characters as {ownedCharacterId, appearance, health, stamina, damage}}
        <div class="char">
            <data value={health}>Health: {health}</data>
            <data value={stamina}>Stamina: {stamina}</data>
            <data value={damage}>Damage: {damage}</data>
            <data value={ownedCharacterId.character.code}>ID: {ownedCharacterId.character.code}</data>
            <button onclick={async () => await sellCharacter(response.id, ownedCharacterId.character.code)}>Sell</button>
            <button onclick={async () => await upgradeCharacter(response.id, ownedCharacterId.character.code)}>Upgrade</button>
            <br>
            {@html appearance.replaceAll("\r\n", "<br>")}
        </div>
        {/each}
    </div>
</div>

<style>
    .char {
        display: flex;
        flex-direction: column;
        width: min-content;
    }

    .char-list {
        display: flex;
        flex-direction: row;

        flex-wrap: wrap;
    }
</style>