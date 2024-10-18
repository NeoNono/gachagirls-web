<script>
    import { onMount } from "svelte";
    export let data;
    $: response = "please wait"
    onMount(async () => {
        response = await data.result;
    })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{@html response}
