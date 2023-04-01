const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result-box");
const que_text =document.querySelector(".que_text");
const options_box =document.querySelector(".options");
const next_btn =document.querySelector(".option2");                 // declar or traget html class
const myImage = document.getElementById('gau');
const total_q = document.querySelector(".quiz-footer .total_que");
const count_que = document.querySelector(".quiz-footer .count_que");
const correct = document.querySelector(".quiz-footer .cr span");
const total_que = document.querySelector(".total-que span");
const right_ans_r = document.querySelector(".right-ans span");
const wrong_ans = document.querySelector(".wrong-ans span");
const again_quiz = document.querySelector(".result-footer .again-quiz");
const exit = document.querySelector(".result-footer .exit");
const que = document.querySelector(".que");
const que_p =document.querySelector(".que_p");

/*start_quiz.onclick=()=>{
    quiz_box.classList.remove("inactive");      //add options page
    start_quiz.classList.add("inactive");
}*/


const mark_wrong = '<i class="fa fa-times"></i>';
const mark_check = `<i class="fa fa-check"></i>`;           // mark spicial symbol


total_q.innerText = questions.length;                   //total number of questions
total_que.innerText = questions.length;

var imageArray = ["india2.jpeg","butan.jpeg","north.jpeg","ukren.jpeg","france.jpeg","Japan.jpeg","china.jpeg","SriLanka.jpeg","SouthAfrica.jpeg","Russia.jpeg","pakistan.jpeg","NewZealand.jpeg","Brazil.jpeg","Iceland.jpeg","Mexico.jpeg","Netherlands.jpeg","bangladesh.jpeg","Indonesia.jpeg","Iran.jpeg","southKorea.jpeg","england.jpeg"];
var imageIndex =0;                                                                      //image section

var correct_r =0;
var que_index = 0;
var right_answers =0;
var wrong_answers = 0;
count_que.innerText = que_index+1;
ShowQuestion(que_index);

function ShowQuestion(q_index){
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;                                           //image change
    if(imageIndex > 21) {imageIndex = 0;}
    que_text.innerText = questions[q_index].question;
    var option_statement = "";
    for(var i=0; i<questions[q_index].options.length; i++){                   //option change
        option_statement += `<div class="option">${questions[q_index].options[i]}</div>`;
    }
    options_box.innerHTML = option_statement;

    var AllOption = options_box.querySelectorAll(".option");
    for(var j=0; j<AllOption.length;j++){                         //declar function or perform to check option
        AllOption[j].setAttribute("onclick","UserAnswer(this)");
    }

    next_btn.classList.add("inactive");         //in next question add incative optione help of loop
}
next_btn.onclick=()=>{
    que_index++;
    if(questions.length>que_index){  
        count_que.innerText = que_index+1;          //conunt total question
        ShowQuestion(que_index);
    } else{
        console.log("Questions Complete");
        quiz_box.classList.add("inactive");     // remove quiz_box or question, options
        result_box.classList.remove("inactive");        // and add result page in screen
        right_ans_r.innerText = right_answers;
        wrong_ans.innerText = wrong_answers;        // to print right and worng answer in result
    }  
}

function UserAnswer(answer){        //tp get the chlick option
    let userAns = answer.innerText;
    let correctAns = questions[que_index].answer;   // real ans check in second js page (answer array option)
    var AllOption2 = options_box.querySelectorAll(".option");
    next_btn.classList.remove("inactive");                      //remove inactive option if user give answer

    if(userAns == correctAns){
          correct_r++;                           //to count right answer in result
        correct.innerText =   correct_r;                        // click and then change all function(image,option)
    }
    
    if(userAns == correctAns){
        console.log("Right Answer");
        answer.classList.add("correct");        //add color and block
        answer.insertAdjacentHTML("beforeend",mark_check);
        right_answers++; 
            if(right_answers >= 15){
            que.classList.remove("inactive");
            que_p.classList.add("inactive");        //print Emoji 
        }
        else if(right_answers < 15){
            que.classList.add("inactive");
            que_p.classList.remove("inactive"); }   

    }else{
        console.log("Wrong Answer");
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend",mark_wrong);
        wrong_answers++;                        //to count wrong answer in result

        for(var i=0;i<AllOption2.length;i++){
            if(AllOption2[i].innerHTML==correctAns){        //add correct answer if user select wrong answer
                AllOption2[i].classList.add("correct");
                AllOption2[i].insertAdjacentHTML("beforeend",mark_check);
            }
        }
    }
    
    for(var j=0; j<AllOption2.length+1;j++){                         //declar function or perform to check option
        AllOption2[j].classList.add("disabled");
    }
}


again_quiz.onclick=()=>{
    quiz_box.classList.remove("inactive");              //use of again option
    result_box.classList.add("inactive");

      reset();                                  //again assin value in first variables
}

/*exit.onclick=()=>{
    start_quiz.classList.remove("inactive");
    result_box.classList.add("inactive");       //use of Exit option

    reset();
}*/

function reset(){
    correct.innerText = 0;
    imageIndex =0;   
    correct_r = 0;
    que_index = 0;
    right_answers =0;           //funcation of again assin value in first variables
    wrong_answers = 0;
   count_que.innerText = que_index+1;
   ShowQuestion(que_index);
}