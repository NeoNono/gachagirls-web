<script>
    import { onMount } from 'svelte';
    /** @type {{data: any}} */
    let { data } = $props();
    let playerId = $state(0);

    onMount(async () => {
        playerId = await data.result;
    });
</script>

<style>
    html {
        font-family: "Comic Sans MS", sans-serif;
        background-color: #ffcccb; /* Light pink */
        height: 100%; /* Full-page coverage */
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    main {
        text-align: center;
    }

    h1 {
        color: #4b0082; /* Indigo for contrast */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Shadow for readability */
    }

    p {
        color: #333333; /* Neutral dark gray */
        font-size: 1.2em; /* Slightly larger for readability */
    }

    a {
        display: inline-block;
        text-decoration: none;
        background-color: #87ceeb; /* Matching blue */
        color: white;
        padding: 10px 20px;
        margin: 10px;
        border-radius: 8px;
        transition: background-color 0.3s ease;
    }

    a:hover {
        background-color: #4682b4; /* Slightly darker blue */
    }

    a:active {
        background-color: #9370db; /* Purple on click */
    }
</style>

<main>
    {#if playerId != 0}
        <h1>Player created successfully!</h1>
        <p>You can now use the player ID {playerId}</p>
        <a href="login">Log in</a>
    {:else}
        <p>Please wait...</p>
    {/if}
</main>
