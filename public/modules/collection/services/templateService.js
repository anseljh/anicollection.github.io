!function(){function a(a,b){var c={};return c.getTemplate=function(c,d){var e,f=new $.Deferred,g=b.get(c);return g?(e=Mustache.render(g,d),f.resolve(e)):a.get("public/modules/collection/templates/"+c,{cache:b}).success(function(a){b.put(c,a),g=b.get(c),e=Mustache.render(g,d),f.resolve(e)}),f.promise()},c.cacheTemplates=function(a){c.getTemplate("htmlTemplate.html",{animationList:a}).done(function(){c.getTemplate("jQueryTemplate.html",{animationList:a}).done(function(){c.getTemplate("aniJSTemplate.html",{animationList:a}).done(function(){})})})},c}angular.module("collection").factory("templateService",["$http","$templateCache",a])}();