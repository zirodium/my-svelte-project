<script>
  import ShowTime from './ShowTime.svelte'
  import Header from './Header/Header.svelte'
    export let name;
    export let dev;
    export let counter;
    let user = {
        loggedIn: false
    }

    function handleClick() {
        counter++
    }

    function handleReset() {
        counter = 0
    }

    function toggle() {
        user.loggedIn = !user.loggedIn
    }
</script>
<div class='container'>
  <Header title='Blog'/>
    <main>
        <h1>Hello {name}!</h1>
        <h2>{dev}</h2>
        <ShowTime name='reza' />
        <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
        <button class='button is-primary' on:click={handleClick}>Click {counter} {counter === 0 ? 'click' : 'clicks'}</button>
        <br />
        <button class='button is-warning' on:click={handleReset}>Reset</button>
        <div id="login">
            {#if user.loggedIn}
	<p>You are logged in</p>
	<button class='button is-danger' on:click={toggle}>Logout</button>
      {:else}
	<p>You are not logged in</p>
	<button class='button is-link' on:click={toggle}>Login</button>
      {/if}
      
	</div>
</main>
</div>
<style>
	
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

        h2 {
                padding: 1em;
                font-weight: 300;
                color: gray;
                border: 1px solid purple;
                border-radius: 6px 18px;
        }
</style>
