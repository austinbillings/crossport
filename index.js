const defaultOptions = {
  esModule: true,
  exclude: ['./', './index'],
  excludeFiletypes: []
};

const crossport = {
  webpack (_require, _exports, _options = {}) {
    const context = _require.context('./');
    const options = Object.assign({}, defaultOptions, _options);

    Object.defineProperty(_exports, '__esModule', {
      value: options.esModule
    });

    for (let key of context.keys()) {
      if (options.exclude.contains(key)) continue;
      if (options.excludeFiletypes.some(ext => key.endsWith(ext))) continue;

      Object.defineProperty(_exports, key.slice(2), {
        value: context(key).default,
        enumerable: true
      });
    }
  }
};

module.exports = crossport;
