!function(){function a(){var a={};return a.animateItems=function(a,b){var c=b,d=$(a);$.each(d,function(a,b){$(b).addClass(c),$(b).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(a){$(a.target).removeClass(c)})})},a}angular.module("collection").factory("animateService",a)}(),function(){function a(){var a={};return a.findModelbyName=function(a,b){var c=_.find(a,function(a){return a.name===b});return c},a.executeFunctionListToAnyModel=function(){},a}angular.module("collection").factory("collectionHelperService",a)}(),function(){function a(a){var b={};return b.getCategories=function(){return a.get("config/data/db_category_list.json")},b.getAdds=function(){return a.get("config/adds/adds.json")},b.getAnimation=function(b){return b=b||"bounce",a.get("config/data/db_"+b+".json")},b}angular.module("collection").factory("localAPIRetrieve",["$http",a])}(),function(){function a(){var a={};return a.download=function(a,b){"html"===a&&(a="txt"),window.open("data:text/"+a+";charset=utf-8,"+encodeURIComponent(b))},a}angular.module("collection").factory("downloadService",a)}(),function(){function a(a,b){var c={};return c.getTemplate=function(c,d){var e,f=new $.Deferred,g=b.get(c);return g?(e=Mustache.render(g,d),f.resolve(e)):a.get("public/modules/collection/templates/"+c,{cache:b}).success(function(a){b.put(c,a),g=b.get(c),e=Mustache.render(g,d),f.resolve(e)}),f.promise()},c.cacheTemplates=function(a){c.getTemplate("cssTemplate.html",{animationList:a}).done(function(){c.getTemplate("htmlTemplate.html",{animationList:a}).done(function(){c.getTemplate("jQueryTemplate.html",{animationList:a}).done(function(){c.getTemplate("aniJSTemplate.html",{animationList:a}).done(function(){})})})})},c}angular.module("collection").factory("templateService",["$http","$templateCache",a])}();