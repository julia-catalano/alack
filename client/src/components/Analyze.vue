<template>
  <div>
    <h1>will this classic novel make me cry?</h1>
    <input type='text' name='title' v-model='title' placeholder='title' />
    <button @click='analyze'>analyze</button>
    <div class='white elevation-2'>
        <h3> results...</h3>
        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
        <div>
          <div v-if="this.analysis.score >= .25">
            Nope! This novel's score is {{this.analysis.score}}, and that sentiment has a magnitude of {{this.analysis.magnitude}}.
          </div>
          <div v-else-if="this.analysis.score <= -.25">
            Probably - this novel's score is {{this.analysis.score}}, and that sentiment has a magnitude of {{this.analysis.magnitude}}.
          </div>
          <div v-else-if="this.analysis.score===null">
          </div>
          <div v-else>
          Maybe! This novel's score is {{this.analysis.score}}, and that sentiment has a magnitude of {{this.analysis.magnitude}}.
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import getAnalysis from '@/apiConnection/getAnalysis'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
export default {
  data () {
    return {
      title: '',
      analysis: {magnitude: null, score: null},
      loading: false,
      color: '#81D8D0',
      size: '45px'
    }
  },
  components: {
    PulseLoader,
    BounceLoader
  },
  methods: {
    async analyze () {
      this.loading = true
      this.analysis.magnitude = null
      this.analysis.score = null
      const response = await getAnalysis.analyze({
        title: this.title
      })
      if (response) {
        this.loading = false
      }
      this.analysis = response.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
