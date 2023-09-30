

//Section 1
let explorebutton = document.getElementById("explore");
let section1element = document.querySelector(".section1");

explorebutton.addEventListener('click', function () {
  // 获取 section1 元素的高度
  let section1height = section1element.offsetHeight;

  // 使用平滑滚动效果滚动到下一部分
  window.scrollTo({
    top: section1height,
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var welcomeImage = document.getElementById("welcome");

  // 使用 setTimeout 延迟应用渐变效果，以确保页面加载时效果生效
  setTimeout(function () {
    welcomeImage.style.opacity = '1';
  }, 200);
});



//Section 2
// 获取要触发渐变效果的元素
const footprint1 = document.querySelector('.section2 .footprint1');
const footprint2 = document.querySelector('.section2 .footprint2');
const div2 = document.querySelector('.section2 .div2');

// 监听用户滚动事件
window.addEventListener('scroll', () => {
  // 获取 section2 元素的位置
  const section2 = document.querySelector('.section2');
  const section2Top = section2.offsetTop;
  const section2Bottom = section2Top + section2.offsetHeight;

  // 获取当前滚动位置
  const scrollPosition = window.scrollY;

  // 检查用户是否滚动到 section2
  if (scrollPosition >= section2Top && scrollPosition <= section2Bottom) {
    // 逐个添加渐变效果
    setTimeout(() => {
      footprint1.style.opacity = 1;
    }, 0); // 第一个元素立即显示
    setTimeout(() => {
      div2.style.opacity = 1;
    }, 1000); // 第二个元素延迟 0.5 秒后显示
    setTimeout(() => {
      footprint2.style.opacity = 1;
    }, 2000); // 第三个元素延迟 1 秒后显示
  }
});

const introParagraph = document.getElementById('introParagraph');
const section3 = document.querySelector('.section3');

introParagraph.addEventListener('click', () => {
  section3.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到 "section3"
});

// Section 3
// JavaScript
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const greenButton = document.getElementById('green');
const housebg = document.getElementById('housebg');
const redBg = document.getElementById('redbg');
const yellowBg = document.getElementById('yellowbg');
const blueBg = document.getElementById('bluebg');
const greenBg = document.getElementById('greenbg');

// 添加点击事件监听器
redButton.addEventListener('click', () => {
  scrollAndCenter(redBg);
});

yellowButton.addEventListener('click', () => {
  scrollAndCenter(yellowBg);
});

blueButton.addEventListener('click', () => {
  scrollAndCenter(blueBg);
});

greenButton.addEventListener('click', () => {
  scrollAndCenter(greenBg);
});

// 滚动并居中
function scrollAndCenter(element) {
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

//section 4
// 获取所有带有 "Learn more" 的 <p> 标签
let learnMoreElements = document.querySelectorAll("p");

// 添加点击事件监听器
learnMoreElements.forEach(function(pElement) {
  pElement.addEventListener("click", function() {
    // 获取 section5 元素的位置
    let section5Element = document.querySelector(".section5");
    let section5Top = section5Element.offsetTop;

    // 使用 smooth 滚动效果
    window.scrollTo({
      top: section5Top,
      behavior: "smooth"
    });
  });
});



//section 5

window.addEventListener('load', function(){
  console.log('page is loaded');

  // 加载本地 JSON 文件
  fetch("harrypotter.json")
    .then(response => response.json())
    .then(data => {
      let characterArray = data.characters;
      let randomNumber = Math.floor(Math.random() * characterArray.length);
      let nameElement = document.getElementById("character-name");
      nameElement.innerHTML = data.characters[randomNumber].name;
    });

  let button = document.getElementById("character-button");
  button.addEventListener('click', function(){
    console.log("button was clicked");

    let inputText = document.getElementById("character-input").value;

    fetch("harrypotter.json")
      .then(response => response.json())
      .then(data => {
        let characterInfo = data.characters.find(character => character.name === inputText);

        if (characterInfo) {
          // console.log("Character information:", characterInfo);

          let headingElement = document.getElementById('p-name');
          headingElement.innerHTML = "Name: " + characterInfo.name; // 使用 characterInfo 中的数据

          let genderElement = document.getElementById('p-gender');
          genderElement.innerHTML =  "Gender: " +characterInfo.gender; // 使用 characterInfo 中的数据

          let houseElement = document.getElementById('p-house');
          houseElement.innerHTML = "House: " +characterInfo.house; // 使用 characterInfo 中的数据

          let dateOfBirthElement = document.getElementById('p-dateOfBirth');
          dateOfBirthElement.innerHTML ="Birthday:" +characterInfo.dateOfBirth; // 使用 characterInfo 中的数据

          let ancestryElement = document.getElementById('p-ancestry');
          ancestryElement.innerHTML = "Ancestry:"+characterInfo.ancestry; // 使用 characterInfo 中的数据

          let imageElement = document.getElementById('p-img');
          imageElement.src = characterInfo.image; // 设置 <img> 元素的 src 属性为角色的图像 URL
          imageElement.alt = characterInfo.name; // 设置 <img> 元素的 alt 属性为角色的名字
        } else {
          let headingElement = document.getElementById('p-name');
          headingElement.innerHTML = "Name: Not Found";

          let genderElement = document.getElementById('p-gender');
          genderElement.innerHTML =  "Gender: Not Found";

          let houseElement = document.getElementById('p-house');
          houseElement.innerHTML = "House: Not Found";

          let dateOfBirthElement = document.getElementById('p-dateOfBirth');
          dateOfBirthElement.innerHTML ="Birthday: Not Found";

          let ancestryElement = document.getElementById('p-ancestry');
          ancestryElement.innerHTML = "Ancestry: Not Found";
        }
      });
  

  });
});

