<script>
     import { onMount } from "svelte";
    /** @type {{data: any}} */
    let { data } = $props();
    let fights = $state([{id: 0, enemyCharacter: {code: 0, name: "", rarity: "", health: 0, stamina: 0, damage: 0, appearance: ""}}]);
    let playerId = 0;
    let code = 0;
    let oldBalance = $state(0);
    onMount(() => {
        fights = data.fights;
        playerId = data.playerId;
        code = data.code;
        oldBalance = data.player.balance;
    });
    
    /**
   * @param {number} player
   * @param {number} code
   * @param {number} fightId
   */
    async function fight(player, code, fightId) {
        let result = await (await fetch(`http://localhost:8080/players/${player}/characters/${code}/fights/${fightId}`, {method: "POST"})).json()
        if (result.balance > oldBalance) {
            alert(`You won!\nYour new balance: ${result.balance}`);
        }
        else {
            alert(`You lost...\nYour new balance: ${result.balance}`);
        }
        oldBalance = result.balance;
    }
</script>

<h1>Who would you like to fight?</h1>
<p>Your balance: {oldBalance}</p>
<div class="char-list">
    {#each fights as {id, enemyCharacter}}
        <div class="char">
            <div>
                <data value={enemyCharacter.name}>Name: {enemyCharacter.name}</data>
                <data value={enemyCharacter.rarity}>Rarity: {enemyCharacter.rarity}</data>
                <data value={enemyCharacter.health}>Health: {enemyCharacter.health}</data>
                <data value={enemyCharacter.stamina}>Stamina: {enemyCharacter.stamina}</data>
                <data value={enemyCharacter.damage}>Damage: {enemyCharacter.damage}</data>
                <button onclick={() => fight(playerId, code, id)}>Fight</button>
            </div>
            <br>
            {@html enemyCharacter.appearance.replaceAll("\r\n", "<br>")}
        </div>
    {/each}
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

    button {
    background-color: lightblue;
    border: 2px solid blue;
    color: black;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.3s;
    }

    button:hover {
    background-color: lightcyan;
    }

    button:active {
    background-color: mediumslateblue;
    color: white;
    }
    
</style>