<template>
  <div>
    <h1>will this classic novel make me cry?</h1>
    </br>
    <input type='text' name='title' v-model='title' placeholder='title' />
    <button @click='analyze'>analyze</button>
    <div v-html="error"/>
    </br>
    <div class='white elevation-2'>
      </br>
        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
        <div>
          <template v-if="this.analysis.score >= .25">
            <div>
              <img :src='this.analysis.bookUrl' contain height='300px' width='200px'/>
              </br>
                <h4>Title: {{this.analysis.title}}</h4>
                <h4>Author: {{this.analysis.author}}</h4>
                <h5>Nope! This novel's score is positive: {{this.analysis.score}}, and that sentiment has a magnitude of {{this.analysis.magnitude}}.</h5>
            </div>
          </template>
          <template v-else-if="this.analysis.score <= -.25">
            <div>
              <img :src='this.analysis.bookUrl' contain height='300px' width='200px'/>
              </br>
                <h4>Title: {{this.analysis.title}}</h4>
                <h4>Author: {{this.analysis.author}}</h4>
                <h5>Probably - this novel's score is negative: {{this.analysis.score}}.</br>
                That sentiment has a magnitude of {{this.analysis.magnitude}}.</h5>
          </div>
          </template>
          <div v-else-if="this.analysis.score===null">
          </div>
          <template v-else>
            <div>
              <img :src='this.analysis.bookUrl' contain height='300px' width='200px'/>
              </br>
                <h4>Title: {{this.analysis.title}}</h4>
                <h4>Author: {{this.analysis.author}}</h4>
                <h5>Maybe! This novel's score is relatively neutral: {{this.analysis.score}}. </br>
                That sentiment has a magnitude of {{this.analysis.magnitude}}.</h5>
            </div>
          </template>
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
      analysis: {title: null, author: null, bookUrl: null, magnitude: null, score: null},
      loading: false,
      color: '#81D8D0',
      size: '45px',
      error: null
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
      this.analysis.title = null
      this.analysis.author = null
      this.analysis.bookUrl = null

      try {
        const response = await getAnalysis.analyze({
        title: this.title
      })
      if (response) {
        this.loading = false
      }
      this.analysis = response.data
      } catch (err) {
        this.error = `Sorry, I don't feel like reading that right now!`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
