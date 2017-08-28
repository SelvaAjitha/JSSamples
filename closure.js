<html>
	<head>
		<title>
			Closure
		</title>
	</head>
	<script>
		
		var addTo = function (passed){
			var add = function(inner){
				return passed+inner;
			};
			return add;//This will return the function add
		};
		
		//This will preserve the data with the function.
		var addThree=new addTo(3);
		var addFour=new addTo(4);
		
		console.log(addThree(1));//This will call the function add with the argument 1
		console.log(addFour(1));
		
	</script>
	<body>
		
	</body>
</html>
