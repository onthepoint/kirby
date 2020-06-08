import clone from "../helpers/clone.js";
import color from "../helpers/color.js";
import debounce from "../helpers/debounce.js";
import input from "../helpers/input.js";
import isComponent from "../helpers/isComponent.js";
import isUploadEvent from "../helpers/isUploadEvent.js";
import kirbytext from "../helpers/kirbytext.js";
import markdown from "../helpers/markdown.js";
import pad from "../helpers/pad.js";
import ratio from "../helpers/ratio.js";
import slug from "../helpers/slug.js";
import sort from "../helpers/sort.js";
import string from "../helpers/string.js";
import supports from "../helpers/supports.js";
import upload from "../helpers/upload.js";

export default {
  install(Vue) {

    /** Array.sortBy() */
    Array.prototype.sortBy = function(sortBy) {
      const sorter    = sort();
      const options   = sortBy.split(" ");
      const field     = options[0];
      const direction = options[1] || "asc";

      return this.sort((a, b) => {
        const valueA = String(a[field]).toLowerCase();
        const valueB = String(b[field]).toLowerCase();

        if (direction === "desc") {
          return sorter(valueB, valueA);
        } else {
          return sorter(valueA, valueB);
        }
      });
    };

    /** RegExp.escape() */
    RegExp.escape = s => s.replace(new RegExp("[-/\\\\^$*+?.()[\\]{}]", "gu"), '\\$&');

    /** global helpers */
    Vue.prototype.$helper = {
      clone: clone,
      color: color,
      debounce: debounce,
      input: input,
      isComponent: isComponent,
      isUploadEvent: isUploadEvent,
      kirbytext: kirbytext,
      markdown: markdown,
      pad: pad,
      ratio: ratio,
      slug: slug,
      sort: sort,
      string: string,
      supports: supports,
      upload: upload
    };
  }
};
