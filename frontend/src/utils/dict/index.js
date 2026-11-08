import Dict from './Dict'
import store from '@/store'
import { mergeOptions } from './DictOptions'
import { getDicts as getDicts } from '@/api/system/dictionary'
function searchDictByKey(dict, key) {
  if (key == null && key == "") {
    return null
  }
  try {
    for (let i = 0; i < dict.length; i++) {
      if (dict[i].key == key) {
        return dict[i].value
      }
    }
  } catch (e) {
    return null
  }
}
const options = {
  metas: {
    '*': {
      labelField: 'name',
      valueField: 'cddValue',
      request(dictMeta) {
        const storeDict = searchDictByKey(store.getters.dict, dictMeta.type)
        if (storeDict) {
          return new Promise(resolve => { resolve(storeDict) })
        } else {
          return new Promise((resolve, reject) => {
            getDicts(dictMeta.type).then(res => {
              store.dispatch('dict/setDict', { key: dictMeta.type, value: res.data })
              resolve(res.data)
            }).catch(error => {
              reject(error)
            })
          })
        }
      },
    },
  },
}
const dictMixin = {
  data() {
    mergeOptions(options)
    if (this.$options === undefined || this.$options.dicts === undefined || this.$options.dicts === null) {
      return {}
    }
    const dict = new Dict()
    dict.owner = this
    return {
      dict
    }
  },
  created() {
    if (!(this.dict instanceof Dict)) {
      return
    }
    options.onCreated && options.onCreated(this.dict)
    this.dict.init(this.$options.dicts).then(() => {
      options.onReady && options.onReady(this.dict)
      this.$nextTick(() => {
        this.$emit('dictReady', this.dict)
        if (this.$options.methods && this.$options.methods.onDictReady instanceof Function) {
          this.$options.methods.onDictReady.call(this, this.dict)
        }
      })
    })
  }
}

export default dictMixin
