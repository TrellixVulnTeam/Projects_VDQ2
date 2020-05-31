<?php

echo "hello";

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<title>EMOTRACK</title>
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">
	
	 <link href="favicon.png" rel="icon">
	
	  <!-- Bootstrap CSS File -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/animate/animate.min.css" rel="stylesheet">
  <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet">
  
  <style>
  @font-face {
  font-family: 'FontAwesome';
  src: url('../fonts/fontawesome/fontawesome-webfont.eot?v=3.2.1');
  src: url('../fonts/fontawesome/fontawesome-webfont.eot?#iefix&v=3.2.1') format('embedded-opentype'), url('../fonts/fontawesome/fontawesome-webfont.woff?v=3.2.1') format('woff'), url('../fonts/fontawesome/fontawesome-webfont.ttf?v=3.2.1') format('truetype'), url('../fonts/fontawesome/fontawesome-webfont.svg#fontawesomeregular?v=3.2.1') format('svg');
  font-weight: normal;
  font-style: normal;
}


.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}



</style>
  
  
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://code.jquery.com/jquery-3.1.1.min.js" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/paper/bootstrap.min.css" rel="stylesheet" integrity="sha384-awusxf8AUojygHf2+joICySzB780jVvQaVCAt1clU3QsyAitLGul28Qxb2r1e5g+" crossorigin="anonymous">
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
</head>
<body>

<?php



echo "<h1> Akshay </h1>";

?>

<header> 
<div class="topnav" style="font-family: FontAwesome;color: #ffffff;font-size: 20px;font-weight: normal; font-style: normal;text-decoration: inherit;-webkit-font-smoothing: antialiased;font-weight: 200;line-height: 1.6em;color: #ffffff;background-color: #333;">
<h1 style="font-family: FontAwesome;color: #ffffff;font-size: 20px;font-weight: normal; font-style: normal;text-decoration: inherit;-webkit-font-smoothing: antialiased;"> EmoTrack</h1>

      
	  
	  <!-- <div class="topnav">
	  <h1 style="font-family: FontAwesome;color: #ffffff;font-size: 20px;font-weight: normal; font-style: normal;text-decoration: inherit;-webkit-font-smoothing: antialiased;"> EmoTrack</h1>
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div> -->
      
</div>
</header>

<!-- 


  <nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll" href="#page-top">EmoTrack</a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll active" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="#service">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="http://localhost/Project/Login_v2/login.html">Sign in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="#blog">sign up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  


 -->


	<div class='container-fluid' style="background-image:url(logo.png);background-size: 300px 300px;">
		<div class='text-center' style="background-image:url(logo.png);background-size: 300px 300px;">
		

			<h1 style="color:#000;font-weight:600;font-size:4.5rem;">EMOTRACK</h1>
			<h5>Search for Tweets, Choose Wise</h5>
			
			<div id="search_box" class="container-fluid">
				<input type="text" id="query">
				<button id="search">Search</button>
				<button id="getcsv">Download CSV</button>
				<div id="loading">Loading...</div>
				<div id="container" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto"></div>
				
			</div>	
		</div>
		<div id="tweets"></div>
		<footer class="text-center">
			Made with ❤ | ABM & CO
		</footer>	</div>
	<script type="text/javascript">
	 var current_data;
		function sentiment_to_color(sentiment){
			if(sentiment == 'positive') return 'panel-success';
			else if(sentiment == 'negative') return 'panel-danger';
			else return 'panel-primary';
		}
		function load_tweets(querystring){
			$.ajax({
			    url: 'tweets',
			    data: {'query': querystring, 'retweets_only': 'false', 'with_sentiment': 'true'},
			    dataType: 'json',
			    type: 'GET',
			    success: function(data) {
			    	buildChart(data);
			    	current_data = data['data'];
			        var tweets = data['data'];
			        var container = $('#tweets');
			        var contents = '';
			        contents+='<div>'
			        
			        for(i = 0; i < tweets.length; i++){
			        	contents+= '<div class="panel '+ sentiment_to_color(tweets[i].sentiment) +'"> <div class="panel-heading"> <h3 class="panel-title">'+ tweets[i].user +'</h3> </div> <div class="panel-body"><blockquote>'+ tweets[i].text + '</blockquote> </div> </div>'
                        // contents += '<li class="list-group-item '+ sentiment_to_color(tweets[i].sentiment) +'">'+ tweets[i].user + ": " + tweets[i].text + '</li>';
			        }
                    
                    contents+='</div>';
			        container.html(contents);
			        $('#query').val(querystring);
			        $('#loading').html(data['count'] + " Tweets loaded about "+ querystring +".");
			    }
			});
		}
		function get_csv(json){
			var fields = Object.keys(json[0]);
			var csv = json.map(function(row){
			  return fields.map(function(fieldName){
			    return JSON.stringify(row[fieldName] || '');
			  });
			});
			csv.unshift(fields);
			return csv.join('\r\n');
		}
		function download(filename, text) {
		  var element = document.createElement('a');
		  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		  element.setAttribute('download', filename);
		  element.style.display = 'none';
		  document.body.appendChild(element);
		  element.click();
		  document.body.removeChild(element);
		}
		$(document).ready(function(){
			load_tweets('Christ University Bangalore');
		});
		$('#search').click(function(){
			$('#loading').html('Loading...');
			$('#tweets').html('');
			load_tweets($('#query').val());
		});
		$('#getcsv').click(function(){
			download('data.csv', get_csv(current_data));
		});
	function buildChart(data) {
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Latest Tweets on '+$('#query').val()
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        //color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						colors: [ '#50B4FF','#FF561B', '#DDDFFF'
						//'#24CBE5',
                    //'#64E572',
                    //'#FF9655'
            ] || 'black'
                    }
                }
            }
        },
        series: getPercentage(data)
    });
}; 
function getNegativePercentage(data) {
	var current_data = data['data'];
	var counter = 0 ;
	for (var i = current_data.length - 1; i >= 0; i--) {
		if(current_data[i].sentiment == 'negative') 
			counter ++;
	}
		console.log('negative',counter)
	return counter/data.count;
}
function getPositivePercentage(data) {
	var current_data = data['data'];
	var counter = 0 ;
	for (var i = current_data.length - 1; i >= 0; i--) {
		if(current_data[i].sentiment == 'positive') 
			counter ++;
	}
		console.log('positive',counter)
	return counter/data.count;
}
function getNeutralPercentage(data) {
	var current_data = data['data'];
	var counter = 0 ;
	for (var i = current_data.length - 1; i >= 0; i--) {
		if(current_data[i].sentiment == 'neutral') 
			counter ++;
	}
	console.log('neutral',counter)
	return counter/data.count;
}
function getPercentage(data) {
	var neutral = getNeutralPercentage(data);
	var positive = getPositivePercentage(data);
	var negative = getNegativePercentage(data);
	return [{
            name: 'Tweets',
            //colorByPoint: true,
            data: [{
                name: 'Positive',
                y: positive
            }, {
                name: 'Negative',
                y: negative,
                sliced: true,
                selected: true
            }, {
                name: 'Neutral',
                y: neutral
            }]
        }]
	// body...
}
	</script>
</body>
</html>