<template>
  <div ref="toastuiEditorViewer" />
</template>
<script>
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import hljs from 'highlight.js';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import {optionsMixin} from './mixin/option';

export default {
  name: 'ToastuiEditorViewer',
  mixins: [optionsMixin],
  props: {
    height: {
      type: String,
      default: ''
    },
    initialValue: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    this.editor = new Viewer({
      ...this.computedOptions,
      el: this.$refs.toastuiEditorViewer,
      plugins: [[codeSyntaxHighlight, { hljs }]]
    });
  },
  methods: {
    getRootElement() {
      return this.$refs.toastuiEditorViewer;
    }
  }
};
</script>

<style>
/* Vuetifyによるcode要素にかかる影を無効化する */
.v-application code {
  box-shadow: none;
}
</style>
