const Config = require('webpack-chain')

function getPlugins(pkg){
  const plugins = [];

  pkg.dependencies && Object.keys(pkg.dependencies).forEach(dep => {
    if(dep.indexOf('cc-cli-plugin-') > -1){
      plugins.push(dep);
    }
  });
  pkg.devDependencies && Object.keys(pkg.devDependencies).forEach(dep => {
    if(dep.indexOf('cc-cli-plugin-') > -1){
      plugins.push(dep);
    }
  });

  return plugins;
}


module.exports = () => {
  const pkgPath = `${process.cwd()}/package.json`;
  const pkg = require(pkgPath);
  const pluginDeps = getPlugins(pkg);
  const plugins = [];
  
  pluginDeps.forEach(plugin => plugins.push(require(plugin)))

  const chainableConfig = new Config()
  plugins.forEach(fn => fn(chainableConfig))
  return chainableConfig;
}
