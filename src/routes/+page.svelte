<script>
    import { onMount } from "svelte";
    export let data;
    $: response = "please wait"
    onMount(async () => {
        response = await data.result;
    })
</script>

<div>
    <h1>Welcome to GachaGirls!</h1>
    <a href="create-player">Create player</a>
    <a href="login">Log in</a>
</div>
