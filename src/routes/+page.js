/**
 @type {import('./$types').pageLoad} 
 */
export async function load({fetch, params}) {
    return {
        result: await (await fetch("http://localhost:8080")).text()
    };
}