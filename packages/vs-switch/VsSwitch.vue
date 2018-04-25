<script>
/* eslint-disable vue/require-default-prop */
export default {
  name: 'VsSwitch',
  props: {
    value: { type: [Boolean, Array], default: false },
    disabled: { type: Boolean, default: false },
    id: String,
    actualValue: null,
    trueValue: { type: null, default: true },
    falseValue: { type: null, default: false }
  },
  computed: {
    checked () {
      if (Array.isArray(this.value)) {
        return this.value.includes(this.actualValue)
      }
      return this.value === this.trueValue
    }
  },
  methods: {
    update (event) {
      const isChecked = event.target.checked

      if (Array.isArray(this.value)) {
        const newValue = [...this.value]

        if (isChecked) {
          newValue.push(this.actualValue)
        } else {
          newValue.splice(newValue.indexOf(this.actualValue), 1)
        }
        this.$emit('input', newValue)
      } else {
        this.$emit('input', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
}
</script>

<template>
  <label :id="id" class="switch-wrapper">
    <slot name="before"></slot>
    <span class="switch">
      <input
        :checked="checked" :disabled="disabled"
        :value="value"
        type="checkbox"
        @change="update" />
      <span class="slider"></span>
    </span>
    <slot name="after"></slot>
  </label>
</template>

<style lang="scss">
$switch-off: #ccc;
$switch-on: #E65A6B;

.switch {
  position: relative;
  display: inline-block;
  width: 2rem;
  height: 1rem;

  input {
    display: none;

    &:checked + .slider {
      background-color: $switch-on;
    }
    &:focus + .slider {
      box-shadow: 0 0 1px $switch-on;
    }
    &:checked + .slider:before {
      transform: translateX(1.1rem);
    }
    &:disabled + .slider {
      cursor: not-allowed;
      &:before {
        background-color: lighten($switch-off, 12%);
      }
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $switch-off;
    transition: 0.3s;
    border-radius: 2rem;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 1.1rem;
    width: 1.1rem;
    left: -1px;
    top: -1px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
  }
}
</style>
