import api from '@/apiConnection/api'

export default {
  analyze (title) {
    return api().post('analyze', title)
  }
}
