
     (function(vegaEmbed) {
       var spec = {"$schema": "https://vega.github.io/schema/vega-lite/v5.16.3.json", "config": {"view": {"continuousHeight": 300, "continuousWidth": 300}}, "data": {"name": "data-ed370ab9904111c7b361eae4f04abc3a"}, "datasets": {"data-ed370ab9904111c7b361eae4f04abc3a": [{"a": 1, "b": 3}, {"a": 3, "b": 9}, {"a": 5, "b": 27}]}, "encoding": {"x": {"field": "a", "type": "quantitative"}, "y": {"field": "b", "type": "quantitative"}}, "height": 600, "mark": {"type": "bar"}, "width": "container"};

      var embedOpt = {"mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div class="error" style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      } // showError
      const el = document.getElementById('shortcode-bar-id');
      vegaEmbed("#shortcode-bar-id", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);
