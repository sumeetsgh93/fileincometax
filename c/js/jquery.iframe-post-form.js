!function(t){t.fn.iframePostForm=function(n){var e,i,o,f,a=!0;return n=t.extend({},t.fn.iframePostForm.defaults,n),t("#"+n.iframeID).length||t("body").append('<iframe id="'+n.iframeID+'" name="'+n.iframeID+'" style="display:none" />'),t(this).each(function(){o=t(this),o.attr("target",n.iframeID),o.submit(function(){return a=n.post.apply(this),a===!1?a:void(f=t("#"+n.iframeID).load(function(){e=f.contents().find("body"),i=n.json?t.parseJSON(e.html()):e.html(),n.complete.apply(this,[i]),f.unbind("load"),setTimeout(function(){e.html("")},1)}))})})},t.fn.iframePostForm.defaults={iframeID:"iframe-post-form",json:!1,post:function(){},complete:function(t){}}}(jQuery);