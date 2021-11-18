const input = document.querySelector("input");
const pyramidDiv = document.querySelector(".mario-bg");

function makePyramid(floors, pyramid = "") {
  if (floors > 0) {
    console.log(pyramid);
    pyramid = `${"#".repeat(floors)}<br/>` + pyramid;
    pyramid = makePyramid(floors - 1, pyramid);
  }

  return pyramid;
}

input.addEventListener("input", () => {
  if (input.value.match(/^\d+$/)) {
    floors = Number(input.value);

    pyramidDiv.innerHTML = makePyramid(floors);

    let fontSize = "inherit";

    switch (true) {
      case floors > 450:
        fontSize = ".04rem";
        break;
      case floors > 130:
        fontSize = ".1rem";
        break;
      case floors > 75:
        fontSize = ".3rem";
        break;
      case floors > 35:
        fontSize = ".5rem";
        break;
      default:
        break;
    }

    pyramidDiv.setAttribute("style", `font-size: ${fontSize}`);
  } else {
    pyramidDiv.innerHTML = ''
  }
});
