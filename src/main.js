import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
                counter: 0
	}
});
app.$set({
  dev: 'Alireza'
})


export default app;
