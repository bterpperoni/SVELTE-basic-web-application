<script lang='ts'>
    export let text: string = '';
    export let ref: string = '';
    export let customClass: string = '';
    export let fontSize: string = '';
  </script>
  
  <a href={ref} class={customClass} style="font-size: {fontSize}">{text}</a>
