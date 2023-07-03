(function ($) {
  $(document).ready(function () {
    // gallery filter list
    $(document).on("click", ".filter_lg .by_brand .list span", function () {
      $(".filter_lg .by_brand .list ul li:hidden").slice(0, 3).show();
      if (
        $(".filter_lg .by_brand .list ul li").length ==
        $(".filter_lg .by_brand .list ul li:visible").length
      ) {
        $(".filter_lg .by_brand .list span").hide();
      }
    });
    $(document).on("click", ".filter_lg .by_merchant .list span", function () {
      $(".filter_lg .by_merchant .list ul li:hidden").slice(0, 3).show();
      if (
        $(".filter_lg .by_merchant .list ul li").length ==
        $(".filter_lg .by_merchant .list ul li:visible").length
      ) {
        $(".filter_lg .by_merchant .list span").hide();
      }
    });
    $(document).on("click", ".filter_mb .by_brand .list span", function () {
      $(".filter_mb .by_brand .list ul li:hidden").slice(0, 3).show();
      if (
        $(".filter_mb .by_brand .list ul li").length ==
        $(".filter_mb .by_brand .list ul li:visible").length
      ) {
        $(".filter_mb .by_brand .list span").hide();
      }
    });
    $(document).on("click", ".filter_mb .by_merchant .list span", function () {
      $(".filter_mb .by_merchant .list ul li:hidden").slice(0, 3).show();
      if (
        $(".filter_mb .by_merchant .list ul li").length ==
        $(".filter_mb .by_merchant .list ul li:visible").length
      ) {
        $(".filter_mb .by_merchant .list span").hide();
      }
    });

    // mobile-view sort modal
    $(document).on("click", "#sortModal_close", function (e) {
      e.preventDefault();
      $("#sortModal").modal("hide");
    });
    $(document).on("click", "#filterModal_close", function (e) {
      e.preventDefault();
      $("#filterModal").modal("hide");
    });

    // pagination
    $(".custom-pagination li").on("click", function (event) {
      event.preventDefault();
      var $this = $(this),
        $pagination = $this.parent(),
        $pages = $pagination.children(),
        $active = $pagination.find(".active");

      if ($this.hasClass("prev")) {
        if ($pages.index($active) > 1) {
          $active.removeClass("active").prev().addClass("active");
        }
      } else if ($this.hasClass("next")) {
        if ($pages.index($active) < $pages.length - 2) {
          $active.removeClass("active").next().addClass("active");
        }
      } else {
        $this.addClass("active").siblings().removeClass("active");
      }

      $active = $pagination.find(".active");

      $(".prev")[$pages.index($active) == 1 ? "addClass" : "removeClass"](
        "disabled"
      );
      $(".next")[
        $pages.index($active) == $pages.length - 2 ? "addClass" : "removeClass"
      ]("disabled");
    });

    $(".pagination li:eq(1)").trigger("click");
  });
})(jQuery);
