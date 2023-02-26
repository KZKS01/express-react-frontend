console.log("I am ready to go.");

const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $input = $('input[type="text"]')


let movieData, userInput;

$("form").on("submit", handleGetData)

function handleGetData(event) {
  event.preventDefault()
  // calling preventDefault() on a 'submit' event will prevent a page refresh

  userInput = $input.val();
  $.ajax({
    url: "https://www.omdbapi.com/?apikey=53aa2cd6&t=" + userInput,
  }).then(
    (data) => {
      movieData = data
      render()
    },
    (error) => {
      console.log("bad request", error)
    }
  )
}

//will be called in success callback
function render() {
  $title.text(movieData.Title)
  $year.text(movieData.Year)
  $rated.text(movieData.Rated)
}


// //Long running fn
// //? Query Paramenters
// ////apikey=53aa2cd6
// ////t=Frozen
// const promise = $.ajax({
//     url: "https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen",
//   })
  
// //the thing after the long running fn
//   promise.then( //
//     (data) => {  //success path: if the call was successful 
//       $title.text(data.Title);
//       $year.text(data.Year);
//       $rated .text(data.Rated);
//     },

//     (error) => {  //failure path: if the call was not successful
//       console.log("bad request: ", error)
//     }
//   )

