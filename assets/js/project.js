AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Sanjukta Bose Goswami,<br>Faculty Mentor",
    cardImage: "assets/images/project-page/sbg.png",
    description: "A quiz app built using basic react.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Sholk Panchal,<br>President",
    cardImage: "assets/images/project-page/sholk.jpg",
    description: "A quiz app built using basic react.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Niyati Raulji,<br>Vice President",
    cardImage: "assets/images/project-page/niyati.jpg",
    description: "A chess engine for a popular game dev engine.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Rutvi Patel,<br>Secretary",
    cardImage: "assets/images/project-page/rutvi.jpg",
    description: "Flappy bird game built using React.js",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Nachiket Haldankar,<br>Joint Secretary",
    cardImage: "assets/images/project-page/nachiket.jpg",
    description: "Exercise tracker built using basic redux.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Upadhay Uday,<br> Treasurer",
    cardImage: "assets/images/project-page/uday.jpg",
    description: "Recipe Ingredient Parser built using JavaScript.",
    tagimg:
      "data:image/png;base64,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",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Ved Prajapati,<br>Joint Treasurer",
    cardImage: "assets/images/project-page/ved.jpg",
    description: "Poker game built using typescript.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Shubh Patel,<br> Web Head",
    cardImage: "assets/images/project-page/shubh.jpg",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Tirth Patel,<br> Web Head",
    cardImage: "assets/images/project-page/tirth.jpg",
    description: "Personal book library app built using JavaScript.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Aryan Shah,<br> Event Head",
    cardImage: "assets/images/project-page/aryan.jpg",
    description:
      "Minesweeper Game built using python Object Oriented Programming.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Karan Panchal,<br> Community Head",
    cardImage: "assets/images/project-page/karan.jpg",
    description: "Built battery life calculator using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Arman Syed,<br> K12 Head",
    cardImage: "assets/images/project-page/arman.jpg",
    description: "Built using Tensorflow.",
    tagimg:
      "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Vraj Shah,<br> Social Media Head",
    cardImage: "assets/images/project-page/vraj.jpg",
    description: "Built using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Meet Patel,<br> Marketing Head",
    cardImage: "assets/images/project-page/marketing.jpg",
    description: "Built using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Harshvardhan Gohil,<br> Sophomore",
    cardImage: "assets/images/project-page/harshvardhan.jpg",
    description: "Built using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Yug Gajjar,<br> Creative Head",
    cardImage: "assets/images/project-page/yug.jpg",
    description: "Built using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
