<script setup lang="ts">
defineProps({
  color: {
    type: String,
    required: false,
    default: $dt("colors.primary"),
  },
});
const orangeVariable = $dt("colors.orange.500");
</script>

<template>
  <div :style="{ backgroundColor: color }">
    {{ $dt("colors.primary") }}
  </div>
</template>

<style lang="postcss">
div {
  color: $dt("colors.orange.900");
}
</style>
