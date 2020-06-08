import Padding from "../../../storybook/theme/Padding.js";

export default {
  title: "App | Form / Field / Pages Field",
  decorators: [Padding]
};

export const list = () => ({
  data() {
    return {
      value: ["13", "72"]
    };
  },
  computed: {
    endpoints() {
      return {
        // TODO: actual fake API endpoint
        field: "field/pages"
      };
    }
  },
  template: `
    <div>
      <k-pages-field
        v-model="value"
        :endpoints="endpoints"
        label="Pages"
      />
      <k-headline class="mt-8 mb-3">Value</k-headline>
      <k-code-block :code="value" />
    </div>
  `
});

export const cardlets = () => ({
  extends: list(),
  data() {
    return {
      value: ["13", "72", "24", "117"]
    };
  },
  template: `
    <k-pages-field
      v-model="value"
      :endpoints="endpoints"
      label="Pages"
      layout="cardlets"
    />
  `
});

export const cards = () => ({
  extends: list(),
  data() {
    return {
      value: ["72", "123", "4"]
    };
  },
  template: `
    <k-pages-field
      v-model="value"
      :endpoints="endpoints"
      label="Pages"
      layout="cards"
    />
  `
});


export const pickerLayout = () => ({
  extends: list(),
  data() {
    return {
      value: ["1", "2", "6", "24", "120"]
    };
  },
  template: `
    <k-pages-field
      v-model="value"
      :endpoints="endpoints"
      label="Pages"
      :picker="{
        layout: 'cardlets',
        width: 'large'
      }"
    />
  `
});

export const single = () => ({
  extends: list(),
  data() {
    return {
      value: ["42"]
    };
  },
  template: `
    <div>
      <k-pages-field
        v-model="value"
        :endpoints="endpoints"
        :multiple="false"
        label="Picker"
        help="Only one items allowed"
      />
      <k-headline class="mt-8 mb-3">Value</k-headline>
      <k-code-block :code="value" />
    </div>
  `
});

export const max = () => ({
  extends: list(),
  template: `
    <k-pages-field
      :endpoints="endpoints"
      :value="value"
      :max="3"
      label="Picker"
      help="Maximum 3 items allowed"
    />
  `
});

export const noSearch = () => ({
  extends: list(),
  template: `
    <k-pages-field
      :endpoints="endpoints"
      :search="false"
      label="Picker"
    />
  `
});

export const nonSortable = () => ({
  extends: list(),
  template: `
    <k-pages-field
      v-model="value"
      :endpoints="endpoints"
      :sortable="false"
      label="Picker"
    />
  `
});

export const empty = () => ({
  extends: list(),
  template: `
    <k-pages-field
      :endpoints="endpoints"
      label="Pages"
    />
  `
});

export const customEmpty = () => ({
  extends: list(),
  template: `
    <k-pages-field
     :endpoints="endpoints"
      :empty="{ text: 'Add related projects', icon: 'parent' }"
      label="Related"
    />
  `
});

export const hasNoPages = () => ({
  extends: list(),
  data() {
    return {
      value: []
    };
  },
  template: `
    <k-pages-field
      :endpoints="endpoints"
      :value="value"
      :hasOptions="false"
      label="Picker"
    />
  `
});

export const disabled = () => ({
  extends: list(),
  template: `
    <k-pages-field
      v-model="value"
      :endpoints="endpoints"
      :disabled="true"
      label="Picker"
    />
  `
});
