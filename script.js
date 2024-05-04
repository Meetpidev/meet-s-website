let observe = new IntersectionObserver((entries)=>{
       entries.forEach((entry)=>{
        console.log(entry)

        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
       });
});

let hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observe.observe(el));

let my_elements = document.getElementsByClassName("submit");
let button = document.querySelector("button");

for (let i = 0; i < my_elements.length; i++) {
   
    my_elements[i].addEventListener("click", function (e) {
       this.innerHTML = "Successfully Submitted";
    });
}
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);
  
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
  
      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_yjkzt7r";
    const templateID = "template_m9lfai4";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

function send_msg() {
const phone_number = "+917990325292";
let url = "https://wa.me/" + phone_number;
window.open(url,'_blank').focus();
}

