<script>
    import { onMount } from 'svelte';
    export let data;
    $: playerId = 0;
    onMount(async () => {
        playerId = await data.result;
    })
</script>

{#if playerId != 0}
    <h1>Player created successfully!</h1>
    <p>You can now use the player ID {playerId}</p>
    <a href="login">Log in</a>
{:else}
    <p>Please wait...</p>
{/if}
