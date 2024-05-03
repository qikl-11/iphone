
    
let currentStep = 1;

function nextStep() {
  const languageStep = document.getElementById('language-step');
  const passwordStep = document.getElementById('password-step');
  const settingsStep = document.getElementById('settings-step');
  const mainPageStep = document.getElementById('mainpage-Step');
  const messagesStep = document.getElementById('messages-Step');
  const inmessagesStep = document.getElementById('inmessages-Step');
  



  switch (currentStep) {
    case 1:
      languageStep.style.display = 'none';
      passwordStep.style.display = 'block';
      break;
    case 2:
      passwordStep.style.display = 'none';
      settingsStep.style.display = 'block';
      break;
    case 3:
      settingsStep.style.display = 'none';
      mainPageStep.style.display = 'block';
      break;
      case 4:
        mainPageStep.style.display = 'none';
        messagesStep.style.display = 'block';
        break;
        case 5:
          messagesStep.style.display = 'none';
          inmessagesStep.style.display = 'block';
          break;
    default:
  }

  currentStep++;
}

const clock = document.getElementById("clock");
const time = document.getElementById("time"); 

// Function to update the time every second
setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  time.textContent = hours + ":" + minutes;
}, 1000);







