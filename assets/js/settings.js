// ===============================
// Settings
// ===============================

let pomodoroInput =
document.getElementById("pomodoroTime");

let breakInput =
document.getElementById("breakTime");

let saveSettingsBtn =
document.getElementById("saveSettings");

loadSettings();

if(saveSettingsBtn){

    saveSettingsBtn.addEventListener(

        "click",

        saveSettings

    );

}

function saveSettings(){

    let settings={

        pomodoro:

        Number(pomodoroInput.value),

        break:

        Number(breakInput.value)

    };

    localStorage.setItem(

        "devdeskSettings",

        JSON.stringify(settings)

    );

    showToast("⚙️ Settings Saved");

}

function loadSettings(){

    let data=

    localStorage.getItem(

        "devdeskSettings"

    );

    if(!data) return;

    let settings=

    JSON.parse(data);

    pomodoroInput.value=

    settings.pomodoro;

    breakInput.value=

    settings.break;

}