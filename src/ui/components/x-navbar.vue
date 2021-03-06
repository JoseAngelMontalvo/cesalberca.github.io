<template>
  <header class="navbar">
    <nav class="mobile-navigation">
      <button
        class="hamburger"
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <x-options class="options" />

      <div class="backdrop" :class="{ 'has-backdrop': isActive }">
        <x-links :direction="Direction.VERTICAL" class="mobile-links"></x-links>
      </div>
      <div class="veil" :class="{ 'show-veil': isActive }" @click="isActive = false"></div>
    </nav>

    <nav class="desktop-navigation">
      <div class="wrapper">
        <x-links></x-links>
        <x-options class="options" />
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import XLinks from './x-links.vue'
import XOptions from './x-options.vue'
import { Direction } from './direction'
import { Inject } from '../../domain/types/inject'
import { TYPES } from '../../types'

@Component({
  name: 'x-navbar',
  components: {
    XOptions,
    XLinks
  }
})
export default class XNavbar extends Vue {
  isActive = false
  Direction = Direction

  @Inject(TYPES.WINDOW)
  window!: Window

  @Watch('isActive')
  onIsActiveChange() {
    this.window.document.body.classList.toggle('block')
  }
}
</script>
<style>
.block {
  overflow: hidden;
}
</style>
<style scoped>
.navbar {
  --link-color: var(--white-color);
  background-color: var(--navbar-background, var(--primary-color));
  padding: 0 var(--medium-size);
  position: var(--navbar-position, initial);
  width: 100%;
  text-shadow: var(--navbar-text-shadow);
}

.wrapper {
  margin: 0 auto;
  padding: var(--small-size) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--body-width);
}

.hamburger {
  display: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  border: 0;
  background-color: transparent;
}

.is-active .hamburger-inner {
  transition-delay: 75ms;
  transform: rotate(135deg);
}

.is-active .hamburger-inner:before {
  transition-delay: 0s;
  opacity: 0;
}

.is-active .hamburger-inner:after {
  transition-delay: 75ms;
  transform: translate3d(0, -11px, 0) rotate(-270deg);
}

.hamburger-box {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
}

.hamburger-inner {
  top: 50%;
  display: block;
  margin-top: -2px;
}

.hamburger-inner:after,
.hamburger-inner:before {
  display: block;
  content: '';
}

.hamburger-inner:before {
  top: -10px;
}

.hamburger-inner:after {
  bottom: -10px;
}

.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition-duration: 0.22s;
  position: absolute;
  width: 40px;
  height: 4px;
  transition-property: transform;
  border-radius: 4px;
  background-color: #fff;
}

.mobile-navigation {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    display: flex;
    padding-bottom: var(--medium-size);
  }

  nav {
    margin-left: auto;
  }

  .hamburger {
    display: inline-block;
    position: absolute;
    z-index: 999;
    top: var(--big-size);
    left: var(--medium-size);
  }

  .backdrop {
    display: flex;
    padding: var(--medium-size) var(--big-size);
    position: absolute;
    top: 0;
    left: 0;
    width: 80vw;
    height: 100vh;
    z-index: 2;
    padding-top: 80px;
    background-color: var(--primary-color);
    transform: translateX(-100%);
    transition: 0.25s ease transform;
  }

  .mobile-navigation {
    display: flex;
    margin-top: var(--big-size);
  }

  .show-veil {
    width: 100vw;
    height: 100vh;
    background-color: hsla(0, 0%, 14%, 0.9);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .has-backdrop {
    transform: translateX(0);
  }

  .desktop-navigation {
    display: none;
  }
}
</style>
