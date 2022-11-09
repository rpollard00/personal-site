<script lang="ts">
  export let title: string;
  export let content: string;
  export let created: Date;
</script>

<h2 class="mt-3 text-xl">{title}</h2>
<h5>Created at: <span class="italic">{created}</span></h5>
<p class="mt-3">{content}</p>
