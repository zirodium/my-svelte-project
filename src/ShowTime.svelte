<script>
  export let name;
  export let time = new Date().toLocaleTimeString()
</script>
<div>
  <p class='lead text-muted'>{name} | {time} | {name}</p>
</div>
