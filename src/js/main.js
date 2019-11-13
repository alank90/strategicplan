// First get the .container DOM object
const el = document.body.querySelector(".container");

// Now attach an Event listener to it. This event will be
// triggered whenever the mouse enters a step in the graphic.
el.addEventListener("mouseover", event => {
  let elementMousedOver = event.target.src;

  // now grab the step number from the src attribute value via the regex string
  elementMousedOver = elementMousedOver.match(/step[0-9]+/gm).toString();

  // Now we want to querySelectorAll the elements to find which of them
  // we want to apply the hilight stylings to
  const elementList = document.querySelectorAll(
    `[class~=${elementMousedOver}]`
  );
  elementList.forEach(function(value) {
    value.classList.add("hilightColBase");
  });
});

// Add Event Listener for mouseout of any of the step elements.
el.addEventListener("mouseout", event => {
  let elementMousedOutOf = event.target.src;
  // Grab step number from src attribute
  elementMousedOutOf = elementMousedOutOf.match(/step[0-9]+/gm).toString();

  // Now we want to querySelectorAll the elements to find which of them
  // we want to remove the hilight stylings from
  const elementList = document.querySelectorAll("div.hilightColBase");

  elementList.forEach(function(value) {
    value.classList.remove("hilightColBase");
  });
});
