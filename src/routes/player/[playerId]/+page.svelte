<script>
    import { onMount } from "svelte";
    export let data;
    $: response = "please wait"
    onMount(async () => {
        response = await data.player;
    })
</script>

<div>
    <h1>Welcome!</h1>
    {response}
</div>