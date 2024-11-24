<script>
    import { goto } from "$app/navigation";
    import { redirect } from "@sveltejs/kit";

    $: playerId = 0;
</script>

<input type="text" bind:value={playerId}>
<button on:click={goto(`/player/${playerId}`)}>Log in</button>