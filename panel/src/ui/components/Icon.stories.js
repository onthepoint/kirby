import Padding from "../../../storybook/theme/Padding.js";

export default {
  title: "UI | Media / Icon",
  decorators: [Padding]
};

export const iconset = () => ({
  data() {
    return {
      icons: []
    }
  },
  mounted() {
    this.icons = Array.from(document.querySelectorAll('.k-icons symbol')).map(symbol => {
      return symbol.id.replace("icon-", "");
    });
  },
  template: `
    <k-auto-grid style="--gap: 1.5rem; --min: 30rem">
      <section>
        <k-auto-grid style="--gap: 1px; --min: 11rem">
          <figure
            v-for="icon in icons"
            :key="icon"
            class="bg-white flex items-center p-3"
          >
            <k-icon
              :type="icon"
              class="mr-2"
            />
            <figcaption class="text-sm text-gray">{{ icon }}</figcaption>
          </figure>
        </k-auto-grid>
      </section>
      <section>
        <k-auto-grid style="--gap: 1px; --min: 11rem" class="bg-black-light">
          <figure
            v-for="icon in icons"
            :key="icon"
            class="bg-black flex items-center p-3 text-white"
          >
            <k-icon
              :type="icon"
              class="mr-2"
            />
            <figcaption class="text-sm text-gray-light">{{ icon }}</figcaption>
          </figure>
        </k-auto-grid>
      </section>
    </k-auto-grid>
  `,
});

export const colors = () => ({
  computed: {
    darkColors() {
      return [
        "black",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "aqua",
        "blue",
        "purple",
      ];
    },
    lightColors() {
      return [
        "white",
        "gray-light",
        "red-light",
        "orange-light",
        "yellow-light",
        "green-light",
        "aqua-light",
        "blue-light",
        "purple-light",
      ];
    }
  },
  template: `
    <div>
      <k-auto-grid style="--min: 6rem; --gap: 1.5rem" class="bg-white p-8 mb-6">
        <div
          v-for="color in darkColors"
          :key="color"
          class="text-center"
        >
          <k-headline size="small" class="mb-3">{{ color }}</k-headline>
          <k-icon
            :color="color"
            type="edit"
          />
        </div>
        <div class="text-center">
          <k-headline size="small" class="mb-3">#ff0000</k-headline>
          <k-icon
            color="#ff0000"
            type="edit"
          />
        </div>
      </k-auto-grid>
      <k-auto-grid style="--min: 6rem; --gap: 1.5rem" class="bg-pattern p-8 mb-6 text-white">
        <div
          v-for="color in lightColors"
          :key="color"
          class="text-center"
        >
          <k-headline size="small" class="mb-3">{{ color }}</k-headline>
          <k-icon
            :color="color"
            type="edit"
          />
        </div>
      </k-auto-grid>
    </div>
  `,
});

export const sizes = () => ({
  template: `
    <k-auto-grid style="--gap: 1.5rem" class="font-mono text-xs">
      <figure class="flex items-center bg-white p-3">
        <k-icon
          class="mr-3"
          size="small"
          type="edit"
        />
        <figcaption>
          small
        </figcaption>
      </figure>
      <figure class="flex items-center bg-white p-3">
        <k-icon
          class="mr-3"
          type="edit"
        />
        <figcaption>
          regular (default)
        </figcaption>
      </figure>
      <figure class="flex items-center bg-white p-3">
        <k-icon
          class="mr-3"
          size="medium"
          type="edit"
        />
        <figcaption>
          medium
        </figcaption>
      </figure>
      <figure class="flex items-center bg-white p-3">
        <k-icon
          class="mr-3"
          size="large"
          type="edit"
        />
        <figcaption>
          large
        </figcaption>
      </figure>
    </k-auto-grid>
  `,
});

export const emoji = () => ({
  template: `
    <div>
      <k-auto-grid style="--min: 3rem" class="mb-8">
        <k-icon type="🤯" />
        <k-icon type="😱" />
        <k-icon type="❤️" />
        <k-icon type="🎉" />
        <k-icon type="🚀" />
        <k-icon type="🤘" />
      </k-auto-grid>
      <k-auto-grid style="--gap: 1.5rem" class="font-mono text-xs">
        <figure class="flex items-center bg-white p-3">
          <k-icon
            class="mr-3"
            size="small"
            type="🌏"
          />
          <figcaption>
            small
          </figcaption>
        </figure>
        <figure class="flex items-center bg-white p-3">
          <k-icon
            class="mr-3"
            type="🌏"
          />
          <figcaption>
            regular (default)
          </figcaption>
        </figure>
        <figure class="flex items-center bg-white p-3">
          <k-icon
            class="mr-3"
            size="medium"
            type="🌏"
          />
          <figcaption>
            medium
          </figcaption>
        </figure>
        <figure class="flex items-center bg-white p-3">
          <k-icon
            class="mr-3"
            size="large"
            type="🌏"
          />
          <figcaption>
            large
          </figcaption>
        </figure>
      </k-auto-grid>
    </div>
  `,
});
