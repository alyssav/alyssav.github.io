//main.js

var currentCircleSelection = 10;

var xRange = d3.scale.linear()
              .range([60, 650])
              .domain([0, d3.max(cameraDataArray, function(d) {

                var currency = d.price;
                var number = Number(currency.replace(/[^0-9\.]+/g,""));
                return number+100;

              })]);

var yRange = d3.scale.linear()
              .range([400, 60])
              .domain([0, d3.max(cameraDataArray, function(d) {
                return Number(d.avgLikes) +1;
              })]);

function InitChart(){

  var svgMain = d3.select("#svgMain");
  var div = d3.select("body").append("div")   
      .attr("class", "tooltip")               
      .style("opacity", 0);

  //tags
  var tagsTitle = 
      svgMain.insert("text")
      .attr("x", 730)
      .attr("y", 125)
      .text("filter by tag(s)")
      .style('font-family', 'sans-serif')
      .style('font-size', '22px');

  //key 
  var cameraTypesText = 
      svgMain.insert("text")
      .attr("x", 300)
      .attr("y", 50)
      .text("camera types:")
      .style('font-family', 'sans-serif')
      .style('font-size', '12px');

  var keyText = svgMain.selectAll(".keyText").data(keyCirclesData);
  keyText
    .enter()
    .insert("text")
    .attr("x", function(d) {
      if(d.type == 2){
        return (d.x + 10);
      }
      else{
        return (d.x + 10);
      }
     
    })
    .attr("y", function(d) {
      return (d.y + 5);
    })
    .text(function(d) {return d.name})
    .style('font-family', 'sans-serif')
    .style('font-size', '10px')
    .style('fill', 'gray');

  var keyCircles = svgMain.selectAll(".keyCircles").data(keyCirclesData);
  keyCircles.enter();

  keyCircles
    .enter()    
    .insert("circle")
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    })
    .attr('r', '5')
    .style("fill", function(d) { 
        if(d.type == 1){
          return "#99536F"
        }
        else if(d.type == 2){
          return "#A8A373"
        }
        else{
          return "#2D5C66"
        }
    });

  //x and y axis

  var xAxis = d3.svg.axis().scale(xRange);
  var yAxis = d3.svg.axis().scale(yRange).orient("left");

  svgMain.append("svg:g").call(xAxis).attr("transform", "translate(40,400)");
  svgMain.append("svg:g").call(yAxis).attr("transform", "translate(100,0)");

  var xAxisTitle = 
      svgMain.insert("text")
      .attr("x", 380)
      .attr("y", 450)
      .text("price")
      .style('font-family', 'sans-serif')
      .style('font-size', '18px');

 var yAxisTitle1 = 
    svgMain.insert("text")
    .attr("x", 2)
    .attr("y", 220)
    .text("average")
    .style('font-family', 'sans-serif')
    .style('font-size', '18px');

  var yAxisTitle2 = 
      svgMain.insert("text")
      .attr("x", 0)
      .attr("y", 240)
      .text("favorites")
      .style('font-family', 'sans-serif')
      .style('font-size', '18px');

   var hover1 = 
    svgMain.insert("text")
    .attr("x", 18)
    .attr("y", 260)
    //.text("(1.4)")
    .style('font-family', 'sans-serif')
    .style('fill', 'gray')
    .style('font-size', '12px');

  var hover2 = 
      svgMain.insert("text")
      .attr("x", 425)
      .attr("y", 450)
      //.text("(7.8)")
      .style('font-family', 'sans-serif')
      .style('fill', 'gray')
      .style('font-size', '12px');;

  //details on demand area
  var svgMain = d3.select("#svgMain");

   var header = 
    svgMain.insert("text")
    .attr("x", 100)
    .attr("y", 490)
    //.text("details")
    .style('font-family', 'sans-serif')
    .style('font-size', '26px');

  var nameText = 
    svgMain.insert("text")
    .attr("x", 100)
    .attr("y", 520)
    .style('font-family', 'sans-serif')
    .style('font-size', '16px');

  var nameTextResponse = 
    svgMain.insert("text")
    .attr("x", 165)
    .attr("y", 520)
    .style('font-family', 'sans-serif')
    .style('font-size', '12px')
    .style('fill', 'gray');

  var numOfPhotosText = 
    svgMain.insert("text")
    .attr("x", 100)
    .attr("y", 540)
    .style('font-family', 'sans-serif')
    .style('font-size', '16px');

  var numOfPhotosTextResponse = 
    svgMain.insert("text")
    .attr("x", 235)
    .attr("y", 540)
    .style('font-family', 'sans-serif')
    .style('font-size', '12px')
    .style('fill', 'gray');

  var typeText = 
    svgMain.insert("text")
    .attr("x", 100)
    .attr("y", 560)
    .style('font-family', 'sans-serif')
    .style('font-size', '16px');

    var typeTextResponse = 
    svgMain.insert("text")
    .attr("x", 140)
    .attr("y", 560)
    .style('font-family', 'sans-serif')
    .style('font-size', '12px')
    .style('fill', 'gray');

  var priceText = 
    svgMain.insert("text")
    .attr("x", 100)
    .attr("y", 580)
    .style('font-family', 'sans-serif')
    .style('font-size', '16px');

  var priceTextResponse = 
    svgMain.insert("text")
    .attr("x", 145)
    .attr("y", 580)
    .style('font-family', 'sans-serif')
    .style('font-size', '12px')
    .style('fill', 'gray');
  

  var avgLikesText = 
    svgMain.insert("text")
    .attr("x", 100)
    .attr("y", 600)
    .style('font-family', 'sans-serif')
    .style('font-size', '16px');

  var avgLikesTextResponse = 
    svgMain.insert("text")
    .attr("x", 310)
    .attr("y", 600)
    .style('font-family', 'sans-serif')
    .style('font-size', '12px')
    .style('fill', 'gray');

  var tagsText = 
    svgMain.insert("text")
    .attr("x", 100)
    .attr("y", 620)
    .style('font-family', 'sans-serif')
    .style('font-size', '16px');


  var tag1Text = 
    svgMain.insert("text")
    .attr("x", 220)
    .attr("y", 630)
    .style('font-family', 'sans-serif')
    .style('font-size', '12px')
    .style('fill', 'rgb(110,110,110)')
    .style('text-decoration', 'underline');

  var tag2Text = 
    svgMain.insert("text")
    .attr("x", 220)
    .attr("y", 650)
    .style('font-family', 'sans-serif')
    .style('font-size', '12px')
    .style('fill', 'gray')
    .style('text-decoration', 'underline');
  var tag3Text = 
    svgMain.insert("text")
    .attr("x", 220)
    .attr("y", 670)
    .style('font-family', 'sans-serif')
    .style('font-size', '12px')
    .style('fill', 'gray')
    .style('text-decoration', 'underline');


  // circles
  var circles = svgMain.selectAll(".circle").data(cameraDataArray);
  circles.enter();

  circles
    .enter()
    .insert("circle")
    .style("fill", "white")
    .transition().duration(1000) 
    .attr('class', 'circle')
    .attr("cx", function(d) {
      var currency = d.price;
      var number = Number(currency.replace(/[^0-9\.]+/g,""));
      return xRange (100 + number); 
    })
    .attr("cy", function(d) { return yRange (d.avgLikes); })
    .attr('r', function(d){
        return (Math.sqrt(d.numOfPhotos*1.5/Math.PI));
    })
    .style("fill", function(d) { 
        if(d.type == "DSLR"){
          return "#99536F"
        }
        else if(d.type == "P&S"){
          return "#A8A373"
        }
        else{
          return "#2D5C66"
        }
    });
    circles.on("mouseover", function(d,i) { 
            var obj = d3.select(this);

            if(i != currentCircleSelection){
              obj.style("stroke", "black")
                .style("stroke-width", "2");
            }
            
            hover1.text("(" + radiiCircles[i] + ")");
            hover2.text("(" + d.price + ")");
            div.transition()        
                .duration(200)      
                .style("opacity", .9); 

            div .html(
              d.camera + "<br/>" + "<img src=\"" + d.cameraSrc + "\"</img>"
              )  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 28) + "px")
                .style("width", "100px")
                .style("height", "75px");    
            })                  
        .on("mouseout", function(d,i) { 
             div.transition()        
                    .duration(500)      
                    .style("opacity", 0);
                  var obj = d3.select(this);
                  if(i != currentCircleSelection){
                    obj.style("stroke-width", "0"); 
                  }
            hover1.text("");
            hover2.text("");   
        })
    .on("click", function(d,i) { 
          header.text("details");

          nameText.text("camera: ");
          nameTextResponse.text(d.camera);

          numOfPhotosText.text("number of photos: ");
          numOfPhotosTextResponse.text(d.numOfPhotos);

          typeText.text("type: ");
          typeTextResponse.text(d.type);

          priceText.text("price: ");
          priceTextResponse.text(d.price);

          avgLikesText.text("average number of favorites: "); 
          avgLikesTextResponse.text(d.avgLikes); 

          tagsText.text("photos (by tag): ");
          tag1Text.text(d.tags[0].name);
          tag2Text.text(d.tags[1].name);
          tag3Text.text(d.tags[2].name);
          document.getElementById("photos").style.display = "none";
          tag1Text.style('fill', 'gray');
          tag2Text.style('fill', 'gray');
          tag3Text.style('fill', 'gray');

          //reset the circles 
          circles.style("stroke-width", "0"); 

          //new selection
          var obj = d3.select(this);
          obj.style("stroke", "black")
                .style("stroke-width", "5");
          currentCircleSelection = i;


          tag1Text.on('click', function (){
            //photos
            tag1Text.style('fill', 'gray').style('font-weight', 'normal');
            tag2Text.style('fill', 'gray').style('font-weight', 'normal');
            tag3Text.style('fill', 'gray').style('font-weight', 'normal');

            var images = document.getElementsByClassName('images');
            images[0].src = d.tags[0].photos[0].downloadUrl;
            images[1].src = d.tags[0].photos[1].downloadUrl;
            images[2].src = d.tags[0].photos[2].downloadUrl;

            document.getElementById("photos").style.display = "inline";

            tag1Text.style('fill', 'black').style('font-weight', 'bold');
          });

          tag2Text.on('click', function (){
            //photos
            tag1Text.style('fill', 'gray').style('font-weight', 'normal');
            tag2Text.style('fill', 'gray').style('font-weight', 'normal');
            tag3Text.style('fill', 'gray').style('font-weight', 'normal');

            var images = document.getElementsByClassName('images');
            images[0].src = d.tags[1].photos[0].downloadUrl;
            images[1].src = d.tags[1].photos[1].downloadUrl;
            images[2].src = d.tags[1].photos[2].downloadUrl;

            document.getElementById("photos").style.display = "inline";

            tag2Text.style('fill', 'black').style('font-weight', 'bold');
          });

          tag3Text.on('click', function (){
            //photos
            tag1Text.style('fill', 'gray').style('font-weight', 'normal');
            tag2Text.style('fill', 'gray').style('font-weight', 'normal');
            tag3Text.style('fill', 'gray').style('font-weight', 'normal');
            var images = document.getElementsByClassName('images');
            images[0].src = d.tags[2].photos[0].downloadUrl;
            images[1].src = d.tags[2].photos[1].downloadUrl;
            images[2].src = d.tags[2].photos[2].downloadUrl;

            document.getElementById("photos").style.display = "inline";

            tag3Text.style('fill', 'black').style('font-weight', 'bold');
          });
    });
}

function imgClick(elem){

    var largePhotoDiv = document.getElementById("largePhotoDiv");
    largePhotoDiv.style.display = "inline";

    var largeImg = document.getElementById("largePhoto");
    largeImg.src = elem.src;

    var everythingElse = document.getElementById("mainContent");
    everythingElse.style.opacity = 0.25;  
}

function onClickExit(){
  var everythingElse = document.getElementById("mainContent");
  everythingElse.style.opacity = 1.0;

  var largePhotoDiv = document.getElementById("largePhotoDiv");
  largePhotoDiv.style.display = "none";
}




function checkboxClick(){
  var checkbox = document.getElementsByClassName("tags");
  checkedTags = [];
  for(var i =0; i<checkbox.length; i++){
    if(checkbox[i].checked){
      checkedTags.push(checkbox[i].value);
    }
  }
  updateCircles(checkedTags);
}


function updateCircles(array){
  var svgMain = d3.select("#svgMain");
  var circlesToUpdate = svgMain.selectAll(".circle");

  if(array.length == 0) //nothing to filter
  {
    circlesToUpdate.style("opacity", "1.0");
     circlesToUpdate.transition()
      .attr("cy", function(d,i){
          return yRange(d.avgLikes);
      })
      .duration(2000);
  }
  else{
    //look for circles with any of the selected tags
    circlesToUpdate.style("opacity", "0.2");

    var favs = [0,0,0,0,0,0,0,0,0];

    for (var i=0; i<circlesToUpdate[0].length; i++){
      var circlesTags = circlesToUpdate[0][i].__data__.tags
      for(var j=0; j<circlesTags.length; j++){
        for(var k=0; k<array.length; k++){
          if(circlesTags[j].name == array[k])
          {
            circlesToUpdate[0][i].style.opacity = 1.0;
            favs[i] += parseInt(circlesTags[j].photos[0].numOfFavorites);
            favs[i] += parseInt(circlesTags[j].photos[1].numOfFavorites);
            favs[i] += parseInt(circlesTags[j].photos[2].numOfFavorites);
          }
        }
      }
    }
  }

  if(favs != undefined){
    for (var i=0; i<favs.length; i++){
      favs[i] = favs[i]/ (array.length *3);
    }

    circlesToUpdate.transition()
    .attr("cy", function(d,i){
        radiiCircles[i] = favs[i].toFixed(2);
        return yRange(favs[i]);
    })
    .duration(2000);
  }

}


function preloader() {
  var numOfPhotos = 81; //9cameras x 9 photos

   var images = new Array();
   for(var i=0; i<numOfPhotos; i++){
    images[i] = new Image();
    images[i].src = cameraPhotoSrcArray[i];
   }
}
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(preloader);



