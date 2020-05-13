<template>
  <div style="padding: 3rem">
    This is a landing page for wild card test
    <p><b>The Wild Card is: </b>{{ $route.params.wc }}</p>
    <p><b>The Localization Welcome is: </b>{{ $t('Welcome') }}</p>
  </div>
</template>

<script>
export default {
  name: 'Index',

  data() {
    return {}
  }
}
</script>

<style lang="css" scoped></style>
