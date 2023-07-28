var celebs = [
    {
      name: "Cristiano Ronaldo",
      img: "img1.png",
      netWorth: 500000000
    },
    {
      name: "Kylian Mbappe",
      img: "img2.png",
      netWorth: 180000000
    },
    {
      name: "Lionel Messi ",
      img: "img3.png",
      netWorth: 600000000
    },
    {
      name: "Erling Halaand ",
      img: "img4.png",
      netWorth: 155000000
    },
    {
      name: "Karim Benzema",
      img: "img5.png",
      netWorth: 300000000
    },
    {
      name: "Marcus Rashford",
      img: "img6.png",
      netWorth: 80000000
    },
    {
      name: "Vinicius Jr",
      img: "img7.png",
      netWorth: 20000000
    },
    {
      name: "Jude Bellingham",
      img: "img8.png",
      netWorth: 70000000
    },
    {
      name: "Kevin De Bruyne",
      img: "img9.png",
      netWorth: 60000000
    },
    {
      name: "Pedri Gonzalez ",
      img: "img10.png",
      netWorth: 10000000
    }
  ];
  
  var card1 = document.getElementById("card1");
  var card2 = document.getElementById("card2");
  var result = document.getElementById("result");
  const submit = document.querySelector(".submit_btn");
  var celeb1, celeb2;
  
  function generateCards() {
    var randomIndex1 = Math.floor(Math.random() * celebs.length);
    celeb1 = celebs[randomIndex1];
    card1.querySelector("img").setAttribute("src", celeb1.img);
    card1.querySelector(".name").textContent = celeb1.name;
  
    var randomIndex2 = Math.floor(Math.random() * celebs.length);
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * celebs.length);
    }
    celeb2 = celebs[randomIndex2];
    card2.querySelector("img").setAttribute("src", celeb2.img);
    card2.querySelector(".name").textContent = celeb2.name;
  }
  
  function checkAnswer() {
    if (celeb1.netWorth > celeb2.netWorth) {
      if (card1.classList.contains("selected")) {
        result.textContent = "Correct!";
        result.style.color = "green";
      } else {
        result.textContent = "Wrong!";
        result.style.color = "red";
      }
    } else if (celeb2.netWorth > celeb1.netWorth) {
      if (card2.classList.contains("selected")) {
        result.textContent = "Correct!";
        result.style.color = "green";
      } else {
        result.textContent = "Wrong!";
        result.style.color = "red";
      }
    } else {
      result.textContent = "Tie!";
    }
  }
  
  function generateNewCards() {
    card1.classList.remove("selected");
    card2.classList.remove("selected");
    result.textContent = "";
    card1.querySelector(".worth").textContent = "";
    card2.querySelector(".worth").textContent = "";
    card1.style.borderColor = "";
    card2.style.borderColor = "";
    generateCards();
  }
  
  generateCards();
  
  card1.addEventListener("click", function () {
    card1.style.borderColor = "aqua";
    card2.style.borderColor = "black";
    card1.classList.add("selected");
    card2.classList.remove("selected");
  });
  
  card2.addEventListener("click", function () {
    card1.style.borderColor = "black";
    card2.style.borderColor = "aqua";
    card2.classList.add("selected");
    card1.classList.remove("selected");
  });
  
  submit.addEventListener("click", () => {
    checkAnswer();
    card1.querySelector(".worth").textContent =
      "$" + celeb1.netWorth.toLocaleString();
    card2.querySelector(".worth").textContent =
      "$" + celeb2.netWorth.toLocaleString();
  });
  
  //
  
  var score = 0; // Initialize the score
  
  function checkAnswer() {
    if (celeb1.netWorth > celeb2.netWorth) {
      if (card1.classList.contains("selected")) {
        result.textContent = "Correct!";
        result.style.color = "green";
        score += 10; // Increase the score by 10 for a correct answer
      } else {
        result.textContent = "Wrong!";
        result.style.color = "red";
      }
    } else if (celeb2.netWorth > celeb1.netWorth) {
      if (card2.classList.contains("selected")) {
        result.textContent = "Correct!";
        result.style.color = "green";
        score += 10; // Increase the score by 10 for a correct answer
      } else {
        result.textContent = "Wrong!";
        result.style.color = "red";
      }
    } else {
      result.textContent = "Tie!";
    }
  }
  
  function generateNewCards() {
    card1.classList.remove("selected");
    card2.classList.remove("selected");
    result.textContent = "";
    card1.querySelector(".worth").textContent = "";
    card2.querySelector(".worth").textContent = "";
    card1.style.borderColor = "";
    card2.style.borderColor = "";
    generateCards();
  }
  
  generateCards();
  
  card1.addEventListener("click", function () {
    card1.style.borderColor = "aqua";
    card2.style.borderColor = "black";
    card1.classList.add("selected");
    card2.classList.remove("selected");
  });
  
  card2.addEventListener("click", function () {
    card1.style.borderColor = "black";
    card2.style.borderColor = "aqua";
    card2.classList.add("selected");
    card1.classList.remove("selected");
  });
  
  submit.addEventListener("click", () => {
    checkAnswer();
    card1.querySelector(".worth").textContent =
      "$" + celeb1.netWorth.toLocaleString();
    card2.querySelector(".worth").textContent =
      "$" + celeb2.netWorth.toLocaleString();
    result.textContent += " Score: " + score; // Display the updated score
  });
  