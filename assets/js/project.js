AOS.init();

const projectcards = document.querySelector(".projectcards");

const projects = [

{
title:"Sanjukta Bose Goswami,<br>AIChE Advisor",
cardImage:"assets/images/project-page/sbg.png",
position:"center 8%"
},

{
title:"Niyati Raulji,<br>President",
cardImage:"assets/images/project-page/niyati.jpg",
position:"center 10%"
},

{
title:"Sholk Panchal,<br>Vice President",
cardImage:"assets/images/project-page/sholk.jpg",
position:"center 10%"
},

{
title:"Rutvi Patel,<br>Secretary",
cardImage:"assets/images/project-page/rutvi.jpg",
position:"center 10%"
},

{
title:"Aryan Shah,<br>Joint Secretary",
cardImage:"assets/images/project-page/aryan.jpg",
position:"center 10%"
},

{
title:"Ved Prajapati,<br>Treasurer",
cardImage:"assets/images/project-page/ved.jpg",
position:"center 10%"
},

{
title:"Upadhyay Uday,<br>Joint Treasurer",
cardImage:"assets/images/project-page/uday.jpg",
position:"center 10%"
},

{
title:"Meet Patel,<br>Marketing Head",
cardImage:"assets/images/project-page/marketing.jpg",
position:"center 10%"
}

];

function showCards(){

let output = "";

projects.forEach((item,index)=>{

output += `
<div class="column skill-card card"
data-aos="zoom-in-up"
data-aos-delay="${index*80}"
data-aos-duration="700">

<div class="wrapper"
style="
background-image:url('${item.cardImage}');
background-position:${item.position};
background-size:cover;
">

<div class="data">
<div class="content">
<div class="title-div">
<h1 class="title">
<a href="#">${item.title}</a>
</h1>
</div>
</div>
</div>

</div>
</div>
`;

});

projectcards.innerHTML = output;
}

document.addEventListener("DOMContentLoaded",showCards);
