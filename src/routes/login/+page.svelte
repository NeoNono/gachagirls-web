<!-- <script>
    import { goto } from "$app/navigation";
    import { redirect } from "@sveltejs/kit";

    let playerId = $state(0);
    
</script>

<input type="text" bind:value={playerId}>
<button onclick={goto(`/player/${playerId}`)}>Log in</button> -->
<script>
    import { goto } from "$app/navigation";

    let playerId = $state(0);
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start; /* Position higher on the screen */
        margin-top: 20vh; /* Add some margin from the top */
        text-align: center;
    }

    input {
        margin-bottom: 15px; /* Space between input and button */
        padding: 10px;
        font-size: 1em;
    }

    button {
        background-color: #87ceeb; /* Matching blue */
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #4682b4; /* Slightly darker blue */
    }

    button:active {
        background-color: #9370db; /* Purple on click */
    }
</style>

<main>
    <input type="text" bind:value={playerId} placeholder="Enter Player ID">
    <button on:click={() => goto(`/player/${playerId}`)}>Log in</button>
</main>
