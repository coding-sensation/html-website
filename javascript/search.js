

function chooseQuiz(id) {
    localStorage.setItem('quiz_id', id)
    localStorage.setItem('quiz_title', document.getElementById(id).innerText)
    window.location = "./quiz.html"
}



function showOnlyQuizzes() {
    document.getElementById('page').innerHTML = ""
    document.getElementById('pageTitle').innerHTML = ""
    d3.json("../engine.json").then(function (data) {
    for (let i = 0; i < data.quizzes.length; i++){ 
         document.getElementById('page').innerHTML += "<div class='one-result infoShuffle animated animatedFadeInUp fadeInUp' id='searched" + data.quizzes[i].number + "'><p class='title' id='title" + data.quizzes[i].number + "'><a href='#' onclick='chooseQuiz(this.id)' id='" + data.quizzes[i].title.split(" ")[0] + "_" + data.quizzes[i].title.split(" ")[1] + "' >" + data.quizzes[i].title + "</a></p><div class='text-dark text-left sub mt-2'><span id='language' class='d-inline-block mr-2'>"+ data.quizzes[i].language + "</span><span class='d-inline-block mr-2'>&bull;</span><span id='type' class='d-inline-block mr-2'>" + data.quizzes[i].type + "</span><span class='d-inline-block mr-2'>&bull;</span><span id='uploaded_on' class='d-inline-block mr-2'>Uploaded on " + data.quizzes[i].uploaded_on  +"</span></div><p class='sub mt-1' id='subtitle'>" + data.quizzes[i].subtitle + "<br>Made by <b>" + data.quizzes[i].creator  +"</p></div>"
    }
    })
}

function showOnlyProjects() {
    document.getElementById('page').innerHTML = ""
    document.getElementById('pageTitle').innerHTML = ""
    d3.json("../engine.json").then(function (data) {
    for (let i = 0; i < (data.projects.length); i++){
         document.getElementById('page').innerHTML += "<div class='one-result infoShuffle animated animatedFadeInUp fadeInUp' id='searched" + data.projects[i].number + "'><p class='title' id='title" + data.projects[i].number + "'><a href='#' onclick='window.location =" + JSON.stringify(data.projects[i].link) + "'  >" + data.projects[i].title + "</a></p><div class='text-dark text-left sub mt-2'><span id='language' class='d-inline-block mr-2'>"+ data.projects[i].language + "</span><span class='d-inline-block mr-2'>&bull;</span><span id='type' class='d-inline-block mr-2'>" + data.projects[i].type + "</span><span class='d-inline-block mr-2'>&bull;</span><span id='uploaded_on' class='d-inline-block mr-2'>Uploaded on " + data.projects[i].uploaded_on  +"</span></div><p class='sub mt-1' id='subtitle'>" + data.projects[i].subtitle + "<br>Made by <b>" + data.projects[i].creator  +"</p></div>"
    }
})
}

function showOnlyPosts() {
    document.getElementById('page').innerHTML = ""
    document.getElementById('pageTitle').innerHTML = ""
    d3.json("../engine.json").then(function (data) {
    for (let i = 0; i < (data.posts.length); i++){
         document.getElementById('page').innerHTML += "<div class='one-result infoShuffle animated animatedFadeInUp fadeInUp' id='searched" + data.posts[i].number + "'><p class='title' id='title" + data.posts[i].number + "'><a href='#' onclick='window.location =" + JSON.stringify(data.posts[i].link) + "'  >" + data.posts[i].title + "</a></p><div class='text-dark text-left sub mt-2'><span id='language' class='d-inline-block mr-2'>"+ data.posts[i].language + "</span><span class='d-inline-block mr-2'>&bull;</span><span id='type' class='d-inline-block mr-2'>" + data.posts[i].type + "</span><span class='d-inline-block mr-2'>&bull;</span><span id='uploaded_on' class='d-inline-block mr-2'>Uploaded on " + data.posts[i].uploaded_on  +"</span></div><p class='sub mt-1' id='subtitle'>" + data.posts[i].subtitle + "<br>Made by <b>" + data.posts[i].creator  +"</p></div>"
    }
})
}




function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}



function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}








function round(num, decimalPlaces = 0) {
    var p = Math.pow(10, decimalPlaces);
    var n = (num * p) * (1 + Number.EPSILON);
    return Math.round(n) / p;
}



function search(strEntered) {
    document.getElementById('page').innerHTML = ""
    document.getElementById('pageTitle').innerHTML = ""
      
    
  d3.json("../engine.json").then(function (data) {
    var arrayOfContent = []
    for (var key in data){
          if (data.hasOwnProperty(key)) {
                    if (key !== "content_amount") {
                        for (let i = 0; i < data[key].length; i++){
                           arrayOfContent.push(data[key][i])
                        }
                    }
          }
    }


    for (let each = 0; each < arrayOfContent.length; each++) {
       if (similarity(strEntered, arrayOfContent[each].secret_title) * 100 >= 25) {
              arrayOfContent[each].percentage = similarity(strEntered, arrayOfContent[each].secret_title) * 100
          }
    }
  
    
        
 for(var i = 0; i < arrayOfContent.length; i++){
   for (var j = 0; j < (arrayOfContent.length - i - 1); j++){
        if (arrayOfContent[j].percentage !== undefined){
          if(arrayOfContent[j].percentage < arrayOfContent[j+1].percentage){
            var temp = arrayOfContent[j]
            arrayOfContent[j] = arrayOfContent[j + 1]
            arrayOfContent[j+1] = temp
          }
     }
   }
 }
    for (let every = 0; every < arrayOfContent.length; every++) {
      if (arrayOfContent[every].percentage !== undefined) {
        if (arrayOfContent[every].type !== "Quiz") {
           document.getElementById('page').innerHTML += "<div class='one-result infoShuffle animated animatedFadeInUp fadeInUp' id='searched" + arrayOfContent[every].number + "'><p class='title' id='title" + arrayOfContent[every].number + "'><a href='#' onclick='window.location =" + JSON.stringify(arrayOfContent[every].link) + "'  >" + arrayOfContent[every].title + "</a></p><div class='text-dark text-left sub mt-2'><span id='language' class='d-inline-block mr-2'>" + arrayOfContent[every].language + "</span><span class='d-inline-block mr-2'>&bull;</span><span id='type' class='d-inline-block mr-2'>" + arrayOfContent[every].type + "</span><span class='d-inline-block mr-2'>&bull;</span><span id='uploaded_on' class='d-inline-block mr-2'>Uploaded on " + arrayOfContent[every].uploaded_on + "</span></div><p class='sub mt-1' id='subtitle'>" + arrayOfContent[every].subtitle + "<br>Made by <b>" + arrayOfContent[every].creator + "</p></div>"
        } else {
          document.getElementById('page').innerHTML += "<div class='one-result infoShuffle animated animatedFadeInUp fadeInUp' id='searched" + arrayOfContent[every].number + "'><p class='title' id='title" + arrayOfContent[every].number + "'><a href='#' onclick='chooseQuiz(this.id)' id='" + arrayOfContent[every].title.split(" ")[0] + "_" + arrayOfContent[every].title.split(" ")[1] + "'>" + arrayOfContent[every].title + "</a></p><div class='text-dark text-left sub mt-2'><span id='language' class='d-inline-block mr-2'>" + arrayOfContent[every].language + "</span><span class='d-inline-block mr-2'>&bull;</span><span id='type' class='d-inline-block mr-2'>" + arrayOfContent[every].type + "</span><span class='d-inline-block mr-2'>&bull;</span><span id='uploaded_on' class='d-inline-block mr-2'>Uploaded on " + arrayOfContent[every].uploaded_on + "</span></div><p class='sub mt-1' id='subtitle'>" + arrayOfContent[every].subtitle + "<br>Made by <b>" + arrayOfContent[every].creator + "</p></div>"
        }
      }
    }
})
}



