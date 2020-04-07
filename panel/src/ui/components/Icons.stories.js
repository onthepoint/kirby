import Icons from "./Icons.vue";

export default {
  title: "Media / Icons",
  component: Icons
};

export const iconset = () => ({
  computed: {
    icons() {
      return Array.from(document.querySelectorAll('.k-icons symbol')).map(symbol => {
        return symbol.id.replace("icon-", "");
      });
    }
  },
  template: `
    <div style="display: grid; grid-gap: 2px; grid-template-columns: repeat(auto-fit, 3rem)">
      <k-icon
        v-for="icon in icons"
        :key="icon"
        :type="icon"
        back="white"
        style="width: 3rem; height: 3rem"
      />
    </div>
  `,
});
