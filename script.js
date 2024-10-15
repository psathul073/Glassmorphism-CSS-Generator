document.addEventListener("DOMContentLoaded", () => {
  // Dropdown menu
  const mainContainer = document.querySelector(".main-container");
  const dropDownMenu = document.querySelector(".Dropdown-container");
  const dropDownBtn = document.querySelector(".icon");
  const details = document.querySelectorAll("details");

  // Sliders
  let sliderOne = document.querySelector(".slider-container .slider-0");
  let sliderTwo = document.querySelector(".slider-container .slider-1");
  let sliderThree = document.querySelector(".slider-container .slider-2");

  // Sliders titles
  let sliderOneValue = document.querySelector("#value-0");
  let sliderTwoValue = document.querySelector("#value-1");
  let sliderThreeValue = document.querySelector("#value-2");

  // Color Picker
  let colorPicker = document.querySelector(".colorPicker");
  // Shadow color
  let shadoWColor = document.querySelector(".shadowColor");

  // Show container
  let loginBox = document.querySelector(".show-container .login");
  // squareA
  let squareA = document.querySelector(".show-container .squareA");
  squareA.style.rotate = " -25deg";
  //squareB
  let squareB = document.querySelector(".show-container .squareB");
  squareB.style.rotate = " 25deg";

  // Transparency
  let transparency = document.querySelector(".code-show #tcy-0");
  //Border Transparency
  let borderTransparency = document.querySelector(".code-show #tcy-1");
  // Shadow Transparency
  let shadowTransparency = document.querySelector(".code-show #tcy-2");
  // RGB
  let rgb = document.querySelector(".code-show #rgb");

  // Shadow rgb color text
  let sdC = document.querySelector("#sdColor");

  // Blur 1
  let blurOne = document.getElementById("blurOne");
  // Blur 2
  let blurTwo = document.getElementById("blurTwo");

  // Copy Button
  let CopyBtnContainer = document.querySelector(".code-show .copy-codes");
  const copyBtn = document.getElementById("copy-btn");
  const rect = CopyBtnContainer.getBoundingClientRect();
  const copyText = document.getElementById("text");
  const copy = document.querySelector(".copy");
  const copied = document.querySelector(".copied");

  //Update CSS Property Of copyBtn.
  let containerBound = {
    left: rect.left,
    top: rect.top,
  };

  // Default range background color
  const rangBgColor = {
    bgColorA: "var(--territory-bgColor)",
    bgColorB: "var( --secondary-bgColor)",
  };

  // DropDown
  let dropDisplay = false;
  dropDownBtn.addEventListener("click", () => {
    if (dropDownMenu.style.display === "none" || !dropDisplay) {
      dropDownMenu.style.display = "block";
      dropDisplay = true;
    } else {
      dropDownMenu.style.display = "none";
      dropDisplay = false;
      details[0].open = false;
      details[1].open = false;
    }
  });

  // Dropdown exit when click outside.
  document.onclick = (e) => {
    // console.log(e.target.className);
    if (
      e.target.className === "icon bi-plus-circle-dotted" ||
      e.target.className === "summary" ||
      e.target.className === "bg"
    ) {
      dropDownMenu.style.display = "block";
    } else {
      dropDownMenu.style.display = "none";
    }
  };

  // Background image change $fun

  dropDownMenu.addEventListener("mousedown", (e) => {
    for (let i = 0; i < 16; i++) {
      switch (e.target.innerText) {
        case `background - ${i}`:
          mainContainer.style.setProperty(
            "--img",
            `url(./src/images/bg${i}.png)`
          );
          break;

        default:
          
          break;
      }
    }
  });
  // Color Picker
  // console.log(colorPicker.querySelector("input").value);

  colorPicker.addEventListener("input", (e) => {
    // console.log(e.target.value);
    hex = e.target.value;
    let rgbColor = hexToRgb(hex);
    let currentTransparency = transparency.innerHTML;
    rgb.innerHTML = rgbColor;
    squareA.style.background = `rgba(${rgbColor}, ${currentTransparency})`;
    squareB.style.background = `rgba(${rgbColor}, ${currentTransparency})`;
    loginBox.style.background = `rgba(${rgbColor}, ${currentTransparency})`;

    // Copy info style
    copy.style.transform = "translateY(0%)";
    copy.style.opacity = "1";
    copied.style.transform = "translateY(200%)";
    copied.style.opacity = "0";
  });
  colorPicker.querySelector("input").value = "#ffffff";

  // Shadow color picker
  shadoWColor.addEventListener("input", (e) => {
    hex = e.target.value;
    let rgbColor = hexToRgb(hex);
    let currentTransparency = transparency.innerHTML;

    sdC.innerHTML = rgbColor;
    squareA.style.boxShadow = `1px 1px 15px 1px rgba(${rgbColor}, ${currentTransparency})`;
    squareB.style.boxShadow = `1px 1px 15px 1px rgba(${rgbColor}, ${currentTransparency})`;
    loginBox.style.boxShadow = `1px 1px 15px 1px rgba(${rgbColor}, ${currentTransparency})`;
  });

  // Hex to RGB convert
  function hexToRgb(hexColor) {
    let r = parseInt(hexColor.slice(1, 3), 16);
    let g = parseInt(hexColor.slice(3, 5), 16);
    let b = parseInt(hexColor.slice(5, 7), 16);

    return r + ", " + g + ", " + b;
  }

  // Transparency Set Slider
  // Ddd input event listener to get slider value.
  sliderOne.addEventListener("input", (ev) => {
    // console.log(ev.target.value);
    let convertValue = (sliderOne.value * 5) / 100;
    sliderOneValue.innerHTML = convertValue;

    // Add current bg value
    let rgb = hexToRgb(colorPicker.querySelector("input").value);

    // Add current shadow bg value
    let sdC = hexToRgb(shadoWColor.querySelector("input").value);
    // Show Container Background Color
    loginBox.style.background = `rgba( ${rgb}, ${convertValue} )`;
    squareA.style.background = `rgba( ${rgb}, ${convertValue} )`;
    squareB.style.background = `rgba( ${rgb}, ${convertValue} )`;

    //  Box shadow transparency
    squareA.style.boxShadow = `1px 1px 15px 1px rgba(${sdC}, ${convertValue})`;
    squareB.style.boxShadow = `1px 1px 15px 1px rgba(${sdC}, ${convertValue})`;
    loginBox.style.boxShadow = `1px 1px 15px 1px rgba(${sdC}, ${convertValue})`;

    // Copy info style
    copy.style.transform = "translateY(0%)";
    copy.style.opacity = "1";
    copied.style.transform = "translateY(200%)";
    copied.style.opacity = "0";

    // Dropdown visibility
    dropDownMenu.style.display = "none";

    // Code show Container
    // Set transparency Value
    transparency.innerHTML = " " + convertValue;

    // Shadow Transparency value
    shadowTransparency.innerHTML = " " + convertValue;

    SliderOneFill(ev.target, rgb, sdC);
  });
  SliderOneFill(sliderOne.querySelector("input"));
  // Shw transparency on window load.
  loginBox.style.background = "rgba( 250, 250, 250, 0.15)";
  squareA.style.background = "rgba( 250, 250, 250, 0.15)";
  squareB.style.background = "rgba( 250, 250, 250, 0.15)";
  transparency.innerHTML = "0.15";

  // Fill input value $fun
  function SliderOneFill(sliderOne, rgb, sdColor) {
    let calcPercentage =
      100 *
      ((sliderOne.value - sliderOne.min) / (sliderOne.max - sliderOne.min));
    let convertValue = (sliderOne.value * 5) / 100;
    sliderOneValue.innerHTML = convertValue;
    sliderOne.style.background = `linear-gradient(90deg, ${rangBgColor.bgColorA} ${calcPercentage}%, ${rangBgColor.bgColorB} ${calcPercentage}%)`;

    // Show Container Background Color
    loginBox.style.background = `rgba( ${rgb}, ${convertValue})`;
    squareA.style.background = `rgba( ${rgb}, ${convertValue})`;
    squareB.style.background = `rgba( ${rgb}, ${convertValue})`;

    //  Box shadow transparency
    squareA.style.boxShadow = `1px 1px 15px 1px rgba(${sdColor}, ${convertValue})`;
    squareB.style.boxShadow = `1px 1px 15px 1px rgba(${sdColor}, ${convertValue})`;
    loginBox.style.boxShadow = `1px 1px 15px 1px rgba(${sdColor}, ${convertValue})`;

    // Code show Container
    // Set transparency Value
    transparency.innerHTML = " " + convertValue;
    // Shadow Transparency value
    shadowTransparency.innerHTML = " " + convertValue;
  }

  // Blur Set Slider
  // Add input event listener to get slider value.
  sliderTwo.addEventListener("input", (ev) => {
    // console.log(ev.target.value);
    let convertValue = sliderTwo.value / 2;
    sliderTwoValue.innerHTML = convertValue;

    // Show Container Background Color
    loginBox.style.backdropFilter = `blur( ${convertValue}px )`;
    loginBox.style.webkitBackdropFilter = `blur( ${convertValue}px )`;
    squareA.style.backdropFilter = `blur( ${convertValue}px )`;
    squareA.style.webkitBackdropFilter = `blur( ${convertValue}px )`;
    squareB.style.backdropFilter = `blur( ${convertValue}px )`;
    squareB.style.webkitBackdropFilter = `blur( ${convertValue}px )`;

    // Copy info style
    copy.style.transform = "translateY(0%)";
    copy.style.opacity = "1";
    copied.style.transform = "translateY(200%)";
    copied.style.opacity = "0";

    // Dropdown visibility
    dropDownMenu.style.display = "none";

    // Code show Container
    // Set Blur Value.
    blurOne.innerHTML = " " + convertValue;
    blurTwo.innerHTML = " " + convertValue;

    SliderTwoFill(ev.target);
  });

  SliderTwoFill(sliderTwo.querySelector("input"));
  // Show blur on window load.
  loginBox.style.backdropFilter = "blur( 4px )";
  loginBox.style.webkitBackdropFilter = "blur( 4px )";
  squareA.style.backdropFilter = "blur( 4px )";
  squareA.style.webkitBackdropFilter = "blur( 4px )";
  squareB.style.backdropFilter = "blur( 4px )";
  squareB.style.webkitBackdropFilter = "blur( 4px )";
  blurOne.innerHTML = "4";
  blurTwo.innerHTML = "4";
  // Fill input value $fun
  function SliderTwoFill(sliderTwo) {
    let calcPercentage =
      100 *
      ((sliderTwo.value - sliderTwo.min) / (sliderTwo.max - sliderTwo.min));
    let convertValue = sliderTwo.value / 2;
    sliderTwoValue.innerHTML = convertValue;
    sliderTwo.style.background = `linear-gradient(90deg, ${rangBgColor.bgColorA} ${calcPercentage}%, ${rangBgColor.bgColorB} ${calcPercentage}%)`;

    // Show Container Background Color
    loginBox.style.backdropFilter = `blur( ${convertValue}px )`;
    loginBox.style.webkitBackdropFilter = `blur( ${convertValue}px )`;
    squareA.style.backdropFilter = `blur( ${convertValue}px )`;
    squareA.style.webkitBackdropFilter = `blur( ${convertValue}px )`;
    squareB.style.backdropFilter = `blur( ${convertValue}px )`;
    squareB.style.webkitBackdropFilter = `blur( ${convertValue}px )`;

    // Code show Container
    // Set Blur Value.
    blurOne.innerHTML = " " + convertValue;
    blurTwo.innerHTML = " " + convertValue;
  }

  // Border Transparency Set Slider
  // Ddd input event listener to get slider value.
  sliderThree.addEventListener("input", (ev) => {
    // console.log(ev.target.value);
    let convertValue = (sliderThree.value * 5) / 100;
    sliderThreeValue.innerHTML = convertValue;
    // Show Container Background Color
    loginBox.style.borderColor = `rgba( 255, 255, 255, ${convertValue} )`;
    squareA.style.borderColor = `rgba( 255, 255, 255, ${convertValue} )`;
    squareB.style.borderColor = `rgba( 255, 255, 255, ${convertValue} )`;

    // Copy info style
    copy.style.transform = "translateY(0%)";
    copy.style.opacity = "1";
    copied.style.transform = "translateY(200%)";
    copied.style.opacity = "0";

    // Dropdown visibility
    dropDownMenu.style.display = "none";
    // Code show Container
    // Set transparency Value
    borderTransparency.innerHTML = " " + convertValue;

    SliderThreeFill(ev.target);
  });
  SliderThreeFill(sliderThree.querySelector("input"));
  // Shw transparency on window load.
  loginBox.style.borderColor = "rgba( 255, 255, 255, 0.15 )";
  squareA.style.borderColor = "rgba( 255, 255, 255, 0.15 )";
  squareB.style.borderColor = "rgba( 255, 255, 255, 0.15 )";
  transparency.innerHTML = "0.15";

  // Fill input value $fun
  function SliderThreeFill(sliderThree) {
    let calcPercentage =
      100 *
      ((sliderThree.value - sliderThree.min) /
        (sliderThree.max - sliderThree.min));
    let convertValue = (sliderThree.value * 5) / 100;
    sliderThreeValue.innerHTML = convertValue;
    sliderThree.style.background = `linear-gradient(90deg, ${rangBgColor.bgColorA} ${calcPercentage}%, ${rangBgColor.bgColorB} ${calcPercentage}%)`;

    // Show Container Background Color
    loginBox.style.borderColor = `rgba( 255, 255, 255, ${convertValue} )`;
    squareA.style.borderColor = `rgba( 255, 255, 255, ${convertValue} )`;
    squareB.style.borderColor = `rgba( 255, 255, 255, ${convertValue} )`;
    // Code show Container
    // Set transparency Value
    borderTransparency.innerHTML = " " + convertValue;
  }

  // copy button
  // Update copyBtn position based on the mouse position.
  CopyBtnContainer.addEventListener("mousemove", (ev) => {
    containerBound = {
      left: rect.left,
      top: rect.top,
    };

    copyBtn.style.opacity = "1";
    copyBtn.style.pointerEvents = "all";
    copyBtn.style.setProperty("--x", `${ev.x - containerBound.left}px`);
    copyBtn.style.setProperty("--y", `${ev.y - containerBound.top}px`);
  });

  // /Adjust copyBtn position based on window size.
  document.addEventListener("resize", (ev) => {
    containerBound = {
      left: rect.left,
      top: rect.top,
    };
  });

  // Text copy function.
  copy.style.transform = "translateY(0%)";
  copy.style.opacity = "1";

  copyBtn.addEventListener("click", () => {
    // create new text area.
    const textarea = document.createElement("textarea");
    const copiedArea = copyText.innerText;
    textarea.value = copiedArea;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    // Copy info.
    copy.style.transform = "translateY(200%)";
    copy.style.opacity = "0";
    copied.style.transform = "translateY(0%)";
    copied.style.opacity = "1";
  });

  // Footer Date
  const date = document.getElementById("date");
  date.innerText = new Date().getFullYear();
});
