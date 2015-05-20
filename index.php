<!DOCTYPE html>
<html ng-app="WPABLO">
<head>
    
    <META http-equiv="Content-Type" content="text/html; charset=utf8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="robots" content="noindex, nofollow">
    
	<base href="/">
	<title>WPAngular</title>
        
	<?php wp_head(); ?>
</head>
<body ng-controller="appController">
    
    <div id="global-app"> 

        <div id="header" ng-controller="headerController">

            <div ng-include="$root.urlScripts + 'header/header.html'">
            </div>  

        </div>  
 
        <div ng-view id="content-app" autoscroll="true">
            
        </div>
        
        <div id="footer" class="{{ pageClass }}" ng-controller="footerController">
            
            <div ng-include="$root.urlScripts + 'footer/footer.html'">
            </div> 

        </div>  
       
    </div>

</body>
</html>