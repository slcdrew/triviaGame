var questions = [
    {
        question: "Which continent is also a country?",
        option1: "North America",
        option2: "Australia",
        option3: "South America",
        option4: "Asia",
        answer: 2,
    },
    {
        question: "Stratus, Cirrus and Cumulus are types of what?",
        option1: "Clouds",
        option2: "Planets",
        option3: "Herbs",
        option4: "Spices",
        answer: 1
    },
    {
        question: "What is Earth's largest ocean?",
        option1: "Atlantic",
        option2: "Indian",
        option3: "Pacific",
        option4: "Arctic",
        answer: 3
    },
    {
        question: "According to ancient Roman religion, who was the god of the sea?",
        option1: "Juno",
        option2: "Mars",
        option3: "Neptune",
        option4: "Venus",
        answer: 3
    },
    {
        question: "Who was the first U.S. president that was born a citizen of the United States?",
        option1: "Martin Van Buren",
        option2: "John Adams",
        option3: "James Madison",
        option4: "Millard Fillmore",
        answer: 1
    },
    {
        question: "In 1796 Edward Jenner developed the vaccination for what disease?",
        option1: "Measles",
        option2: "Smallpox",
        option3: "Polio",
        option4: "Mumps",
        answer: 2
    },
    {
        question: "In what year did the great fire of London take place?",
        option1: "1567",
        option2: "1846",
        option3: "1666",
        option4: "1903",
        answer: 3
    },
    {
        question: "Who was the first performer at the 1969 Woodstock festival?",
        option1: "Jimi Hendrix",
        option2: "Fleetwood Mac",
        option3: "Joe Cocker",
        option4: "Richie Havens",
        answer: 4
    },
    {
        question: "The 'Penny-Farthing' was a popular type of what?",
        option1: "Bicycle",
        option2: "Gun",
        option3: "Shoe",
        option4: "House",
        answer: 1
    },
    {
        question: "Which U.S. president made the first presidential radio broadcast?",
        option1: "John Kennedy",
        option2: "Warren Harding",
        option3: "Herbert Hoover",
        option4: "Calvin Coolidge",
        answer: 4
        
    
    }];
    
    var currentQuestion = 0;
    var score = 0;
    var incorrect = 0;
    var totQuestions = questions.length;
    
    function startGame () {
        number = 45;
    }
    
    $("body").on("click", ".startButton", function(event){
        console.log('this is hit');
      
        run();
        startGame()
        $("#wrapper").show();
        $("#instructions").hide();
        $(".startButton").hide();
        loadQuestion(currentQuestion);

    });
    
    
    function loadQuestion(questionIndex) {
        var q = questions[questionIndex];
        $("#question").html("&nbsp &nbsp" + q.question);
        console.log(currentQuestion)
        $("#opt1").text(q.option1);
        $("#opt2").text(q.option2);
        $("#opt3").text(q.option3);
        $("#opt4").text(q.option4);
        $("#image").html(q.image);
    };
    
    function loadNextQuestion () {
        var selectedOptions = document.querySelector("input[type=radio]:checked");
        if(!selectedOptions) {
            alert("Please select your answer");
            return;
        }
        var answer = selectedOptions.value;
        if(questions[currentQuestion].answer == answer) {
            score++;
            
        } else  {
            incorrect++


        }
        selectedOptions.checked=false;
        currentQuestion++;
        if(currentQuestion == totQuestions - 1) {
            $("#nextButton").text("Finish");
        }
        
        if(currentQuestion == totQuestions) {  
            $("#quizContainer").hide();
            $("#grid2").show();
            stop();
            $("#result").text("You're Score")
            $("#correct").text("Correct Answers: " + score);
            $("#incorrect").text("Incorrect Answers: " + incorrect);
            var unanswered = 10 - (score + incorrect);
            $("#unanswered").text("Not Answered: " + (unanswered));
            console.log(questionCount)


            return;
        
        }
        loadQuestion(currentQuestion);
    }
    
    var questionCount = 10;

    function endGame() {
        $("#quizContainer").hide();
        $("#grid2").show();
        stop();
        $("#result").text("You're Score")
        $("#correct").text("Correct Answers: " + score);
        $("#incorrect").text("Incorrect Answers: " + incorrect);
        var unanswered = 10 - (score + incorrect);
        console.log(unanswered);
        $("#unanswered").text("Not Answered: " + (unanswered));
        

        return;
    }
    
    var number = 45;
    var intervalId;
    
    function run() {
         $("#timer").html("<h2>You have " + number + " seconds left</h2>");
          clearInterval(intervalId);
          intervalId = setInterval(decrement, 1000);
    }
    
    function decrement() {
          number--;
          $("#timer").html("<h2>You have " + number + " seconds left</h2>");
          if (number === 0) {
            stop();
            alert("Time Up!");
            endGame()
          } else if (currentQuestion == totQuestions) {
              stop()
              endGame();
    
          }
    }
    
    function stop() {
          clearInterval(intervalId);
    }
    


    