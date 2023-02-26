$(document).ready(function() {
  var newHomes = [
    {
      address: "27569 Cedarwood Drive",
      sf: "2,535",
      bedrooms: 3,
      baths: 2.5,
      price: "$496,500",
    },
    {
      address: "316 Annandale Drive",
      sf: "1,326",
      bedrooms: 4,
      baths: 2,
      price: "$275,000",
    },
    {
      address: "251 Grandview Road",
      sf: "3,800",
      bedrooms: 3,
      baths: 2,
      price: "$699,900",
    },
    {
      address: "28571 Manitoba",
      sf: "2,960",
      bedrooms: 4,
      baths: 3.5,
      price: "$775,000",
    },
  ]

  let counter = 0;

  $("#addHome").on("click", function() {
    if (counter >= newHomes.length - 1) {
      addHomeToTable(newHomes[counter]);
      $("#addHome").attr("disabled", true).addClass("btn-warning")
    } else {
      addHomeToTable(newHomes[counter]);
      counter += 1;
    }
  });

  function addHomeToTable(homeData) {
    let $newHome = $(`<tr>
      <td>${homeData.address}</td>
      <td>${homeData.sf}</td>
      <td>${homeData.bedrooms}</td>
      <td>${homeData.baths}</td>
      <td>${homeData.price}</td>
      <td>
        <button class="remove btn btn-xs btn-danger">Remove</button>
      </td>
    </tr>`);

    $("table tbody").append($newHome);
  }

  let removedHomes = [];

  $("#homes tbody").on("click", "button", function () {
    removedHomes.push($(this).closest("tr").remove())
  });

  $("#resetHomes").on("click", function() {
    removedHomes.forEach(function(trHome) {
      $("table tbody").append(trHome);
    });
  });

  let sortedHomes = [];

  $("#sortHomes").on("click", function() {
    $("table tbody tr").each(function(trHome, obj) {
      let splitHome = obj.textContent.split("\n")
      sortedHomes.push(
        {
          address: splitHome[1].trim(),
          sf: parseInt(splitHome[2].trim().replace(',', '')),
          bedrooms: splitHome[3].trim(),
          baths: splitHome[4].trim(),
          price: splitHome[5].trim(),
        }
      )
    });

    sortedHomes.sort((a,b) => {
      return a.sf - b.sf
    });
  
    $("table tbody tr").remove();
    sortedHomes.forEach(function(home) {
      addHomeToTable(home);
    });
  });
});

// $(document).ready(function() {
    
    
// $("#addHome").removeClass("btn-danger").addClass("btn-success");
// $("h1").addClass("text-center"); //or $(".jumbotron").addClass("text-center");



// // returns a jQuery set of new DOM elements
// var $newLink = $(
//     '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>'
//   )

// $("body").append($newLink); // same: $($newLink).appendTo("body");

// //set method
// $("#zillowLink").attr("target", "_blank");
// //get method
// $("#zillowLink").attr("target");

// //    $("body").prepend($newLink.clone());
// //    $("body").prepend($newLink); //put the link at the front
// //    $("body").after($newLink); //after the body tag
// //    $("body").before($newLink); //before the body tag
// //    $($newLink).insertBefore("body"); //before the body tag

// // var isStyled = $("p").hasClass("left-aligned big");
// // console.log(isStyled);  //prints false
// // console.log($("h1").hasClass("jumbotron"));  //prints true
// // the isStyled var will be true if any <p> elements have
// // the classes of "left-aligned" and "big"


// //$("h1.jumbotron").toggleClass("bogus") is the same as below
// // if($("h1.jumbotron").hasClass("bogus")) {
// //     $("h1.jumbotron").removeClass("bogus")
// // } else {
// //     $("h1.jumbotron").addClass("bogus")
// // }


// // $("#addHome").on("click", function (evt) {
// //     console.log(evt)
// //  })

//  $(".remove").on("click", function (evt) {
//     alert(`Are you sure you want to remove this listing? ${evt.target.parentElement.parentElement.textContent.split("\n")[1].trim()}` );
//  })
 
// $("#homes tbody").on("click", "button", function () {
//     console.log(this);
//   })

// // $("#homes tbody").on("click", "button", function () {
// //     $(this).closest("tr").remove() //this: evt.target--the thing that kick off the event/the current method is bound to
// //   })


// $("#homes tbody").on("click", "button", function () {
//     debugger
//     $(this)
//       .closest("tr")
//       .fadeOut(1000, function () {
//         // now that the tr is hidden, let's completely remove it from the DOM
//         $(this).remove()
//       })
//   })
// // $("#addHome").click(function (evt) {
// //     console.log("Event", evt)
// //     console.log("Event target", evt.target)
// //   })

// });
// //css
// // .btn-sucess, .btn-danger are from bootstrap