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
  