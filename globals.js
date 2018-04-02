const outputDir = './_output/';
const dist = `${outputDir}_dist/`;
const logs = './*.log';
const reports = `${outputDir}_reports/`;

module.exports = {
  webpack: {
    entry: './index.js',
    dist,
    logs,
    outputFileName: '[name].bundle.js',
    resolveExtensions: ['.js', '.json', '.jsx'],
    sourceMapType: 'inline-source-map',
    bundle: 'bundle.js',
    host: 'localhost',
    port: 5000,
    publicPath: '/',
    cleanFolders: [logs, dist, reports],
    title: 'Title',
    template: 'templates/index.ejs',
    fileName: '.manifest.json',
  },
  port: 5000,
  dist
};
