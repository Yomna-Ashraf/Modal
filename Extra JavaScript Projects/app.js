const open = document.querySelector(".modal-btn")
const close = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

open.addEventListener("click",function(){
    if (modal.classList.contains("show-modal")===false){
        modal.classList.add("show-modal")
    }
})

close.addEventListener("click",function(){
    if (modal.classList.contains("show-modal")){
        modal.classList.remove("show-modal")
    }
})
////////////////////Questions/////////////////////////
//const iconMinus = document.querySelectorAll(".question-btn > .minus-icon > i");
//const iconPlus = document.querySelectorAll(".question-btn > .plus-icon > i");
const iconMinus = document.querySelectorAll(".question-btn > .minus-icon");
const iconPlus = document.querySelectorAll(".question-btn > .plus-icon");
//
const iconBtn = document.querySelectorAll(".question-btn");
const answer = document.querySelectorAll(".answer");
console.log(answer[0])
console.log(typeof answer)
let count = 0;
var str = "hidden"
console.log(iconMinus[count])
for (let idx = 0 ; idx < iconBtn.length;idx++){
    let btns = iconBtn[idx];
    btns.addEventListener("click",function(){
        iconMinus[idx].classList.toggle("show-answer");
        iconPlus[idx].classList.toggle("hide");
        answer[idx].classList.toggle("show-answer");
       
        //console.log(iconMinus[idx]);
        //iconMinus[idx].style.height="auto";
        //count++;
//        if (str == "hidden"){
//            iconMinus[idx].style.height="auto";
//            iconMinus[idx].style.overflow="visible";
//            iconPlus[idx].style.height="0";
//            iconPlus[idx].style.overflow="hidden";            
//            answer[idx].classList.add("show-answer");
//            str ="visible";
//      }
//       else{
//            iconMinus[idx].style.height="0";
//            iconMinus[idx].style.overflow="hidden";
//            iconPlus[idx].style.height="auto";
//            iconPlus[idx].style.overflow="visible";           
//            answer[idx].classList.remove("show-answer")
//           
//            str="hidden";
//        }
    })



}
//iconBtn.forEach(function btns(btn1){
  //  btn1.addEventListener("click",function(){
    //    let single = iconMinus[count];
      //  console.log(single)
        //single.style.height="auto";        
        //count++;
    //})

//})

//
  //  iconMinus.forEach(function(btn){
  //  btn.style.height="auto";
   // btn.style.overflow = "visible"
//});
//const questions = document.querySelectorAll(".question");

//questions.forEach(function (question) {
//  const btn = question.querySelector(".question-btn");
  // console.log(btn);

 // btn.addEventListener("click", function () {
    // console.log(question);

 //   questions.forEach(function (item) {
 //     if (item !== question) {
 //       item.classList.remove("show-text");
 //     }
  //  });

  //  question.classList.toggle("show-text");
 // });
//});
/////////////////////////menu////////////////////////
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://media.istockphoto.com/photos/breakfast-picture-id494292144?k=6&m=494292144&s=612x612&w=0&h=MuOadzFa2ZE2bxl6mh_IxFYIQ7FdFcjZN3BcIjIYrbs=",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://www.dennys.ca/wp-content/uploads/2019/10/images-1.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://simplot-media.azureedge.net/-/media/foundation/recipes/strawberry-milkshake.jpg?rev=57dfda8bb12449f39a5cd8449a8e34ee&h=636&w=636&la=en&hash=56E5C7CEFF612CA9E24B6A86BAF6A3F0",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://hips.hearstapps.com/vidthumb/images/delish-cheesy-egg-toast-still003-1518820279.jpg?crop=0.519xw%3A0.519xh%3B0.218xw%2C0.251xh&resize=480%3A270",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/4/2/3/LS-Library_Bacon-Egg-Cheese-Breakfast-Burgers_s4x3.jpg.rend.hgtvcom.616.462.suffix/1522721805486.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSiVXStYkr-jG_Ckh6ymwmjn9hRIbnLG7LMg&usqp=CAU",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://data.thefeedfeed.com/recommended/post_4484088.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://www.smh.com.au/content/dam/images/g/q/g/o/m/7/image.imgtype.articleLeadwide.620x349.png/1470795920571.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://www.liquor.com/thmb/VYf71Uh09ocEs8wlnPJp0Lw9IYI=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/raspberry-collins-720x720-primary-67a4a8c849c6453cb48479eb4a9ed931.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "https://s3.amazonaws.com/spoonuniversi-wpengine/spoonuniversi/wp-content/uploads/sites/2/2014/02/t_4_steak6.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const btns =document.querySelectorAll(".meal-btn")
  const menu1 = document.getElementById("menu");

  btns.forEach(function(btn){
    btn.addEventListener("click",function(){
      menu1.innerHTML=''
      for( i in menu){
        if (btn.id == menu[i].category){

          let item = `
          <div class="meal">
            <img src="${menu[i].img}" class="meal-img">
            <div class="info">
              <div class="name-price">
                <p class="meal-title">${menu[i].title}</p>
                <p class="price">${menu[i].price}</p>
              </div>
              <p class="description">${menu[i].desc}</p>
            </div>
          </div>
          `
          menu1.insertAdjacentHTML("beforeend", item); 

        }
      }
    })
 })        


 