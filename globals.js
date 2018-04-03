const outputDir = './_output/';
const dist = `${outputDir}_dist/`;
const logs = './*.log';
const reports = `${outputDir}_reports/`;
const coverageDir = `${reports}_coverage/`;
const src = './src';
const eslintDir = `./${reports}/_eslint/`;
const docs = `${outputDir}_docs/`;

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
  dist,
  src,
  docs,
  eslintDir,
  karma: {
    browsers: ['PhantomJS'],
    coverageDir,
    coverageReporter: {
      reporters: [
        // { type: 'json', subdir: '.' },
        { type: 'lcov', subdir: '.' },
        { type: 'html', subdir: '.' },
        { type: 'text-summary' },
      ],
      type: 'html',
      dir: coverageDir,
    },
    reporters: ['spec', 'coverage'],
    exclude: [
      `./${src}/components/mobile/**`,
    ],
    files: [`${src}/**/*.test.js`],
    frameworks: ['jasmine'],
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter',
    ],
    preprocessors: {
      './**/*.test.js': ['webpack', 'coverage'],
    },
  },
  esdoc: {
    title: 'bartrr',
    description: '',
    repository: '',
    site: '',
    twitter: '',
    image: '',
    interfaces: ['describe', 'it', 'context', 'suite', 'test'],
  },
};
