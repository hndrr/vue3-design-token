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
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style lang="ts">
css({
  div: {
    color: '{colors.primary}',
    backgroundColor: '{colors.orange.50}'
  }
})

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
