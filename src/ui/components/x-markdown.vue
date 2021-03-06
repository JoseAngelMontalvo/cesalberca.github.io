<template>
  <div class="markdown" v-html="html"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import Prism from 'prismjs'
import { Markdown } from '../../domain/markdown'

@Component({ name: 'x-markdown' })
export default class XMarkdown extends Vue {
  @Prop({ type: Object, required: true })
  body!: Markdown

  get html() {
    return this.body.toHtml()
  }

  highlight() {
    this.$nextTick(() => {
      Prism.highlightAll()
    })
  }

  @Watch('body', { immediate: true })
  onBodyChange() {
    this.highlight()
  }
}
</script>
<style scoped>
.markdown ::v-deep a {
  color: var(--link-color);
  text-decoration: none;
  transition: ease color 0.5s;
  transform-style: preserve-3d;
  position: relative;
}

.markdown ::v-deep a:after {
  --link-offset: 3px;
  content: '';
  transform: translateZ(-1px);
  width: calc(100% + var(--link-offset) * 2);
  height: 1px;
  position: absolute;
  background-color: var(--link-color);
  bottom: calc(var(--link-offset) * -1);
  transition: ease height 0.25s;
  left: calc(var(--link-offset) * -1);
  right: calc(100% + var(--link-offset));
  z-index: -1;
  display: inline-block;
}

.markdown ::v-deep a:hover:after {
  height: calc(100% + 2px);
}

.markdown ::v-deep a:hover {
  color: var(--link-hover-color);
}

.markdown ::v-deep code {
  color: var(--code-foreground);
}

.markdown ::v-deep blockquote {
  font-style: italic;
  position: relative;
  margin-left: 0;
  padding-left: 40px;
}

.markdown ::v-deep img {
  width: 100%;
}

.markdown ::v-deep blockquote:before {
  display: inline-block;
  content: '';
  position: absolute;
  width: 3px;
  left: 0;
  height: 90%;
  top: 5%;
  background-color: var(--primary-color);
}
</style>
