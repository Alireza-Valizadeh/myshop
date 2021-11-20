export default {
    methods: {
      hasModule(moduleName) {
        return this.$store.hasModule(moduleName);
      },
      /* ---------------------------------------------------------------------- */
      registerModule(moduleName, module) {
        if (!this.hasModule(moduleName))
          this.$store.registerModule(moduleName, module);
      },
      /* ---------------------------------------------------------------------- */
      unregisterModule(moduleName) {
        if (this.hasModule(moduleName)) this.$store.unregisterModule(moduleName);
      },
    },
  };
  