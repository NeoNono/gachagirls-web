<script>
    import { onMount } from "svelte";
    /** @type {{data: any}} */
    let { data } = $props();
    let response = $state({ id: 0, balance: 0});
    let characters = $state([{ownedCharacterId: {character: {code: 0}}, appearance: "", health: 0, stamina: 0, damage: 0}]);

    let codes = $derived(characters.map(x => x.ownedCharacterId.character.code));

    async function pullRoulette() {
        let result = await fetch(`http://localhost:8080/roulette/pulls?playerId=${response.id}`, {method: "POST"});

        if (result.status === 204) {
            alert("You got a duplicate and hence get a refund.");
            return;
        }

        let newCharacters = await result.json();

        let newChar = newCharacters[newCharacters.length-1];
        characters = newCharacters;
        alert(`Congratulations! You pulled ${newChar.name}!`);
    }

    onMount(async () => {
        response = await data.player;
        characters = await data.characters;
    })
</script>

<div>
    <h1>Try your luck!</h1>
    <p>Your current balance: {response.balance}</p>
    <button onclick={pullRoulette}>Pull</button>
</div>



<style>

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
        text-align: center;
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