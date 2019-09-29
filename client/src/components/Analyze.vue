<template>
  <div>
    <h1>will this classic novel make me cry?</h1>
    <input type='text' name='title' v-model='title' placeholder='title' />
    <button @click='analyze'>analyze</button>
    <div class='white elevation-2'>
        <h3> results...</h3>
        <div>
          <div>
          {{this.analysis.score}}
          </div>
          <div>
          {{this.analysis.magnitude}}
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import getAnalysis from '@/apiConnection/getAnalysis'
export default {
  data () {
    return {
      title: '',
      analysis: {magnitude: null, score: null}
    }
  },
  methods: {
    async analyze () {
      const response = await getAnalysis.analyze({
        title: this.title
      })
      this.analysis = response.data
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
