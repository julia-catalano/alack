<template>
  <div>
    <h1>will this classic novel make me cry?</h1>
    <input type='text' name='title' v-model='title' placeholder='title' />
    <button @click='analyze'>analyze</button>
  </div>
</template>

<script>
import getAnalysis from '@/apiConnection/getAnalysis'
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    async analyze () {
      const response = await getAnalysis.analyze({
        title: this.title
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
