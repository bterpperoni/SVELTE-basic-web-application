<script lang='ts'>
   export let textLabel: string = '';
   export let type: string = '';
   export let placeholder: string = '';
   export let name: string = '';
</script>

<div class="div-input">
   <label for="input"> {textLabel} </label>
   <input {type} {placeholder} {name} id="input">
</div>


