<script>
import { popupRef } from '../lib/popup'
import { activeClosure } from '../lib/closures'

export default {
  setup() {
    return { popupRef, activeClosure }
  },
}
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="popupModal"
    tabindex="-1"
    aria-labelledby="popupModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="popupModalLabel">
            <!--  -->
            {{ activeClosure?.attributes?.STREET }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <!--  -->
        <div ref="popupRef" class="modal-body p-1"></div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  // esri popup
  .esri-popup {
    & > .esri-popup__pointer,
    & > .esri-popup__main-container > *:not(.esri-popup__content) {
      display: none;
    }
  }

  .esri-popup__main-container {
    width: 100%;
    height: auto;
    max-height: initial;
  }
}
</style>
