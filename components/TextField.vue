<template>
  <div class="textfield">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :autocomplete="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String, // Assuming modelValue is a string type
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style>
div.textfield {
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    color: white;
    width: 100%;
    margin-bottom: 1.5rem;
    font-weight: normal;
  }
  input {
    line-height: 40px;
    min-width: 100%;
    font-size: 1rem;
    text-indent: 0.5rem;
    margin: 0;
    border-radius: 0.5rem;
    border: 2px solid var(--first-colour);
  }
  input:disabled {
    border: 2px solid #95989a;
  }
  &--disabled {
    input {
      border-color: #ccc;
      color: #eee;
    }
    label {
      color: #eee;
    }
  }
  &--error {
    input {
      border-color: red;
      color: green;
    }
    label {
      color: red;
    }
  }
  &--button {
    input {
      border-radius: 5px 0 0 5px;
      margin-right: 0.1rem;
    }
  }
}
</style>
