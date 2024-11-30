<script>
  import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    /** @type {{data: any}} */
    let { data } = $props();
    let characters = $state([{ownedCharacterId: {character: {code: 0}}, appearance: "", health: 0, stamina: 0, damage: 0}]);

    onMount(() => {
        characters = data.characters
    });
</script>

<h1>Which character would you like to fight with?</h1>
<div class="char-list">
    {#each characters as {ownedCharacterId, appearance, health, stamina, damage}}
    <div>
        <data value={health}>Health: {health}</data>
        <data value={stamina}>Stamina: {stamina}</data>
        <data value={damage}>Damage: {damage}</data>
        <button onclick={() => goto(`fights/${ownedCharacterId.character.code}`)}>Fight</button>
        <br>
        {@html appearance.replaceAll("\r\n", "<br>")}
    </div>
    {/each}
</div>


<style>
    .char-list {
        display: flex;
        flex-direction: row;
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