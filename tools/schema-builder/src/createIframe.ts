const createIframeContent = () => {
  const html = `
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Expires" content="0">
        <meta http-equiv="cache-control" content="max-age=0" />
        <link href="https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/variables.css?t=${new Date().getTime()}" rel="stylesheet" />
        <link href="https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/dist/next.var.min.css?t=${new Date().getTime()}" rel="stylesheet" />
        <link rel="stylesheet" href="https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine/1.2.5/dist/css/engine-core.css?t=${new Date().getTime()}" />
        <link rel="stylesheet" href="https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine-ext/1.0.6/dist/css/engine-ext.css?t=${new Date().getTime()}" />
        <link rel="stylesheet" href="https://g.alicdn.com/fone-lowcode/fr-generator/1.1.0/css/index.css?t=${new Date().getTime()}" />

        <script>
          window.React = window.parent.React;
          window.ReactDOM = window.parent.ReactDOM;
        </script>
        
        <script src="https://g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js?t=${new Date().getTime()}"></script>
        <script src="https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js?t=${new Date().getTime()}"></script>
        <script src="https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js?t=${new Date().getTime()}"></script>
        <script src="https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js?t=${new Date().getTime()}"></script>
        <script src="https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.js?t=${new Date().getTime()}"></script>
        <script crossorigin="anonymous" src="https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine/1.2.5/dist/js/engine-core.js?t=${new Date().getTime()}"></script>
        <script crossorigin="anonymous" src="https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine-ext/1.0.6/dist/js/engine-ext.js?t=${new Date().getTime()}"></script>
      </head>

      <body>
        <div id="lce-container"></div>
        <script defer type="text/javascript" src="/scripts/fr-generator.js?t=${new Date().getTime()}"></script>
      </body>
    </html>
  `;
  return html;
};

export default () => {
  const iframe = document.createElement('iframe');
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.frameBorder = '0';
  iframe.srcdoc = createIframeContent();

  return iframe;
};