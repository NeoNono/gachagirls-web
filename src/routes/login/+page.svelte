<script>
    import { goto } from "$app/navigation";
    import { redirect } from "@sveltejs/kit";

    let playerId = $state(0);
    
</script>

<input type="text" bind:value={playerId}>
<button onclick={goto(`/player/${playerId}`)}>Log in</button>