var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.6.3/axe.min.js';
document.head.appendChild(script);
setTimeout(function(){
  axe.run(document, {
    runOnly: {
      type: "tag",
      values: ["wcag21a", "wcag21aa", "best-practice"]
    },
    "rules": {
      "skip-link": { enabled: false }
    }
  }, function(err, results) {
    if (err) throw err;
    console.log(results);
  });
}, 1000);