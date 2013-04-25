(function () {

  var header = Sizzle(".header > *:not(.date, .author)"),
      main = Sizzle(".main > *"),
      wordCount,
      el;

  wordCount = getText(header).match(/\S+/g).length + getText(main).match(/\S+/g).length;

  el = document.createElement("p");

  el.innerHTML = "Word count: " + wordCount;

  document.getElementsByTagName("body")[0].appendChild(el);

  function getText (els) {

      var text = "",
          el,
          node,
          i,
          j,
          x,
          y;

      for (i = 0, j = els.length; i < j; i++) {

        el = els[i];

        for(x = 0, y = el.childNodes.length; x < y; x++) {

            node = el.childNodes[x];

            if (node.nodeType !== 8) {

              text += node.nodeType !== 1 ? " " + node.nodeValue : getText([node]);

            }

        }

      }

      return text;

  }

})();