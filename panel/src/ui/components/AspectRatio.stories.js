import Padding from "../../../storybook/theme/Padding.js";

export default {
  title: "UI | Layout / Aspect Ratio",
  decorators: [Padding]
};

export const example = () => ({
  template: `
    <k-auto-grid style="--gap: 1.5rem; --min: 10rem" class="text-xs font-mono">
      <div>
        <k-aspect-ratio back="pattern" ratio="4/5">
          <span class="flex items-center justify-center text-white">4/5</span>
        </k-aspect-ratio>
      </div>
      <div>
        <k-aspect-ratio back="pattern">
          <span class="flex items-center justify-center text-white">1/1</span>
        </k-aspect-ratio>
      </div>
      <div>
        <k-aspect-ratio back="pattern" ratio="3/2">
          <span class="flex items-center justify-center text-white">3/2</span>
        </k-aspect-ratio>
      </div>
      <div>
        <k-aspect-ratio back="pattern" ratio="3/1">
          <span class="flex items-center justify-center text-white">3/1</span>
        </k-aspect-ratio>
      </div>
    </k-auto-grid>
  `
});

export const withImage = () => ({
  template: `
    <k-auto-grid style="--gap: 1.5rem; --min: 10rem">
      <div>
        <k-aspect-ratio back="pattern" ratio="4/5">
          <img src="https://source.unsplash.com/user/erondu/1600x900" class="object-cover">
        </k-aspect-ratio>
      </div>
      <div>
        <k-aspect-ratio back="pattern">
          <img src="https://source.unsplash.com/user/erondu/1600x900" class="object-cover">
        </k-aspect-ratio>
      </div>
      <div>
        <k-aspect-ratio back="pattern" ratio="3/2">
          <img src="https://source.unsplash.com/user/erondu/1600x900" class="object-cover">
        </k-aspect-ratio>
      </div>
      <div>
        <k-aspect-ratio back="pattern" ratio="3/1">
          <img src="https://source.unsplash.com/user/erondu/1600x900" class="object-cover">
        </k-aspect-ratio>
      </div>
    </k-auto-grid>
  `,
});

export const withVideo = () => ({
  template: `
    <k-aspect-ratio back="pattern" ratio="16/9">
      <iframe src="https://www.youtube.com/embed/vWGquxvqI_Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </k-aspect-ratio>
  `
});

export const backgrounds = () => ({
  template: `
    <div class="text-xs font-mono">
      <k-auto-grid style="--gap: 1.5rem; --min: 10rem" class="mb-5">
        <k-aspect-ratio back="pattern">
          <span class="flex items-center justify-center text-white">pattern</span>
        </k-aspect-ratio>
        <k-aspect-ratio back="black">
          <span class="flex items-center justify-center text-white">black</span>
        </k-aspect-ratio>
        <k-aspect-ratio back="white">
          <span class="flex items-center justify-center text-black">white</span>
        </k-aspect-ratio>
        <k-aspect-ratio back="#ff0000">
          <span class="flex items-center justify-center text-black">#ff0000</span>
        </k-aspect-ratio>
      </k-auto-grid>

      <k-auto-grid style="--gap: 1.5rem; --min: 5rem">
        <k-aspect-ratio back="red">
          <span class="flex items-center justify-center">red</span>
        </k-aspect-ratio>
        <k-aspect-ratio back="orange">
          <span class="flex items-center justify-center">orange</span>
        </k-aspect-ratio>
        <k-aspect-ratio back="yellow">
          <span class="flex items-center justify-center">yellow</span>
        </k-aspect-ratio>
        <k-aspect-ratio back="green">
          <span class="flex items-center justify-center">green</span>
        </k-aspect-ratio>
        <k-aspect-ratio back="aqua">
          <span class="flex items-center justify-center">aqua</span>
        </k-aspect-ratio>
        <k-aspect-ratio back="blue">
          <span class="flex items-center justify-center">blue</span>
        </k-aspect-ratio>
        <k-aspect-ratio back="purple">
          <span class="flex items-center justify-center">purple</span>
        </k-aspect-ratio>
      </k-auto-grid>
    </div>
  `
});
