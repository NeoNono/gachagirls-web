<script>
    import { onMount } from "svelte";
    /** @type {{data: any}} */
    let { data } = $props();
    let response = $state("please wait");

    onMount(async () => {
        response = await data.result;
    });
</script>

<style>

    div {
        text-align: center;
        margin-bottom: 20px; 
    }

    h1 {
        color: #4b0082; 
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
    }

    a {
        display: inline-block;
        text-decoration: none;
        background-color: #87ceeb;
        color: white;
        padding: 10px 20px;
        margin: 10px;
        border-radius: 8px;
        transition: background-color 0.3s ease;
    }

    a:hover {
        background-color: #4682b4; 
    }

    a:active {
        background-color: #9370db;
    }
</style>

<div>
    <h1>Welcome to GachaGirls!</h1>
    <a href="create-player">Create player</a>
    <a href="login">Log in</a>
</div>

