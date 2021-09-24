function markToGrade(mark) {
    let grade;
  if (mark < 0 && mark > 100) {
    grade = "X";
  } else {
    if (mark < 50) {
      grade = "F";
    }
    else if (mark >= 50 && mark < 60) {
      grade = "P";
    }

    else if (mark >= 60 && mark < 70) {
      grade = "C";
    }

    else if (mark >= 70 && mark < 80) {
      grade = "D";
    }
    else if (mark >= 80 && mark <= 100) {
      grade = "HD";
    }
  }
  console.log(grade)
  return grade;
}

function init() {
  let btnSend = document.getElementById("send");
}



function processMark() {
   
  console.log(document.getElementById("studentId").value);
  let subjMark = parseInt(document.getElementById("subjectMark").value);
  let subjGrade = markToGrade(subjMark);

  document.getElementsByTagName("p").innerHTML = "student id: " + document.getElementById("studentId").value;
  document.getElementsByTagName("p").innerHTML +=
    "<br> subject mark: " + subjMark;

  if (subjGrade == "X") {
    document.getElementsByTagName("p").innerHTML +=
      "<br> entered mark is invalid ";
  } else {
    document.getElementsByTagName("p").innerHTML +=
      "subject grade: " + subjGrade;
  }
}

 init();