$(document).ready(() => {
  let outside = document.querySelector(".outside");
  let circle = document.querySelector(".circle");
  outside.onclick = function () {
    circle.classList.toggle("active");
  };
  $(".sector").hover(
    (elem) => {
      id = elem.target.id;
      $("#main_label").hide();
      $("#main_text").text(id);
      $("#main_text").show();
    },
    () => {
      $("#main_text").hide();
      $("#main_label").show();
    }
  );
});
