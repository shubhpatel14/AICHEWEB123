AOS.init();

const projectcards = document.querySelector(".projectcards");

const projects = [
  {
    title:"Sanjukta Bose Goswami,<br>AIChE Advisor",
    cardImage:"assets/images/project-page/sbg.png",
    position:"center 18%"
  },
  {
    title:"Parag Saxena,<br>Faculty Mentor",
    cardImage:"assets/images/project-page/paragsaxena.jpeg",
    position:"center 12%"
  },
  {
    title:"Niyati Raulji,<br>President",
    cardImage:"assets/images/project-page/niyati.jpg",
    position:"center 8%"
  },
  {
    title:"Sholk Panchal,<br>Vice President",
    cardImage:"assets/images/project-page/sholk.jpg",
    position:"center 10%"
  },
  {
    title:"Rutvi Patel,<br>Secretary",
    cardImage:"assets/images/project-page/rutvi.jpg",
    position:"center 30%"
  },
  {
    title:"Aryan Shah,<br>Joint Secretary",
    cardImage:"assets/images/project-page/aryan.jpg",
    position:"center 12%"
  },
  {
    title:"Ved Prajapati,<br>Treasurer",
    cardImage:"assets/images/project-page/ved.jpg",
    position:"center 16%"
  },
  {
    title:"Upadhay Uday,<br>Treasurer",
    cardImage:"assets/images/project-page/uday.jpg",
    position:"center 14%"
  },
  {
    title:"Meet Patel,<br>Joint Treasurer",
    cardImage:"assets/images/project-page/marketing.jpg",
    position:"center 10%"
  }
];

const showCards = () => {
  let output = "";

  projects.forEach(({title, cardImage, position}) => {
    output += `
      <div class="column skill-card card"
           data-aos="zoom-in-up"
           data-aos-duration="700">

        <div class="wrapper"
             style="
             background-image:url('${cardImage}');
             background-size:cover;
             background-repeat:no-repeat;
             background-position:${position};
             ">

          <div class="data">
            <div class="content">
              <div class="title-div">
                <h1 class="title">
                  <a href="#">${title}</a>
                </h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  });

  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);

/* first card reveal after scroll */
window.addEventListener("scroll", function () {
  if (window.scrollY > 180) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});
