$(function () {
    const progressBox = $(".progress-bar");
    const progressOst = $(".animation").offset().top - 600;
    let isAni = false;
  
    $(window).scroll(function () {
      if ($(window).scrollTop() >= progressOst && !isAni ) {
        progressAni();
      }
    });
  
    function progressAni() {
      progressBox.each(function () {
        let $this = $(this),
          progressBar = $this.find(".bar"),
          progressText = $this.find(".rate"),
          progressRate = progressText.attr("data-rate");
        progressBar.animate({ width: progressRate + "%" }, 2500);
  
        //변수 text 선언후 익명함수 할당
  
        let text = function () {
          $({ rate: 0 }).animate(
            { rate: progressRate },
            {
              duration: 2000,
              progress: function () {
                let now = this.rate;
                progressText.text(Math.floor(now) + "%");
              },
              complete:function(){isAni=true}
            }
          );
        };
        text();
      });
    }
  });