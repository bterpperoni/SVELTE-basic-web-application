<script lang='ts'>
  import type { Structure } from "../../../interface";
  export let label: string;
  export let options: Array<Structure> = [];
  export let selected: number;
</script>

  <div class="div-select"> 
    <label for="select">{label}</label>
    <select id="select" bind:value={selected}>
      {#each options as option}
          <option value={option.structureId}>Structure {option.structureId}</option>
      {/each}
      </select>
  </div>

  <style>
    .div-select{
      box-shadow: 0 0 0 2px white, 0 0 0 4px var(--dark-green);
      padding: 2rem 0 2rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--dark-green);
      font-size: 1.5vw;
      max-block-size: 30%;
    }

    .div-select label{
      width:40vw;
      min-width: 15vw;
      text-align: center;
      margin-bottom: 1rem;
      letter-spacing: 2px;
      color:white;
    }

    #select{
      font-size: 1.5vw;
      margin:0;
      max-width: fit-content;
    }
  </style>
 