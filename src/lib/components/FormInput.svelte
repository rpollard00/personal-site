<script lang="ts">
  export let name: string;
  export let type: string;
  export let placeholder: string;
</script>

<input class="p-2 border-solid border-2 bg-slate-100 hover:border-sky-500 rounded border-sky-600- m-2" name={name} type={type} placeholder={placeholder}>
