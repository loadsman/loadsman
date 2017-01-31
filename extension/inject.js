(function (document, chrome) {
  var frame = document.createElement('iframe')
  var extensionBaseURL = 'chrome-extension://' + chrome.runtime.id

  document.getElementsByTagName("BODY")[0].appendChild(frame)

  // Avoid troubles with framesets by working with body only:
  if (document.body.nodeName !== 'BODY') {
    return;
  }

  // Configure the frame:
  frame.id = 'loadsman-iframe'
  frame.srcdoc = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <title>Loadsman</title>

    <link rel="stylesheet" type="text/css" href="` + extensionBaseURL +`/build/css/main.css">
</head>
<body>

<div id="app"></div>

<script src="` + extensionBaseURL + `/build/js/main.js"></script>

</body>
</html>
`
  // Explicitly set border width to avoid flashing of the iframe:
  frame.style.borderWidth = 0

  document.body.appendChild(frame);

}(document, chrome))