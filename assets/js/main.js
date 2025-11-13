$(function () {
  $(".hero-photo, h1, h2, p, .pill-link, .btn").css({
    opacity: 0,
    transform: "translateY(10px)"
  });

  let delay = 0;

  const elements = [
    $(".hero-photo"),
    $("h1"),
    $("h2"),
    $("p"),
    $(".pill-link").eq(0),
    $(".pill-link").eq(1),
    $(".pill-link").eq(2),
    $(".pill-link").eq(3),
    $(".btn")
  ];

  elements.forEach($el => {
    $el.delay(delay).animate({ opacity: 1 }, 280, function () {
      $(this).css("transform", "none");
    });
    delay += 80;
  });

  $('a[href^="#"]').on("click", function (e) {
    const target = $($(this).attr("href"));
    if (target.length) {
      e.preventDefault();
      $("html, body").animate(
        { scrollTop: target.offset().top - 80 },
        400
      );
    }
  });

  
});

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skills-bars .bar");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");  
      } else {
        entry.target.classList.remove("animated"); 
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
});

