
export default {
  namespaced: true,
  state: {
    all: [],
    current: null,
    default: null,
    rules: {}
  },
  mutations: {
    SET_ALL(state, languages) {
      state.all = languages.map(language => {
        return {
          code: language.code,
          default: language.default,
          direction: language.direction,
          locale: language.locale,
          name: language.name,
          rules: language.rules,
          url: language.url
        };
      });
    },
    SET_CURRENT(state, language) {
      state.current = language;
    },
    SET_DEFAULT(state, language) {
      state.default = language;
    },
    SET_RULES(state, rules) {
      state.rules = rules;
    }
  },
  actions: {
    current(context, language) {
      context.commit("SET_CURRENT", language);

      if (language) {
        localStorage.setItem("kirby$language", JSON.stringify(language));
      }
    },
    install(context, languages) {
      const defaultLanguage = languages.filter(language => language.default)[0];

      context.commit("SET_ALL", languages);
      context.commit("SET_DEFAULT", defaultLanguage);

      // get the current langauge from localstorage
      const currentLanguageCode = localStorage.getItem("kirby$language");

      // search for the current language
      if (currentLanguageCode) {
        const currentLanguage = languages.filter(language => {
          return language.code === currentLanguageCode
        })[0];


        if (currentLanguage) {
          return context.dispatch("current", currentLanguage);
        }
      }

      context.dispatch("current", defaultLanguage || languages[0] || null);
    },
    rules(context, rules) {
      context.commit("SET_RULES", rules);
    },
  }
};
