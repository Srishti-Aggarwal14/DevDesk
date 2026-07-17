// ===============================
// Achievements
// ===============================

const badges = [

{
title:"📝 First Note",
check:()=>notes.length>=1
},

{
title:"🎯 Focus Master",
check:()=>stats.focus>=5
},

{
title:"🍅 Pomodoro Hero",
check:()=>stats.pomodoro>=5
},

{
title:"📅 Planner Pro",
check:()=>planner.length>=5
},

{
title:"🔥 Streak King",
check:()=>streak.current>=7
},

{
title:"💯 Productivity Master",
check:()=>{

let score=
notes.length+
stats.focus+
stats.pomodoro+
planner.length;

return score>=18;

}

}

];

function renderBadges(){

let container=
document.getElementById("badgesContainer");

container.innerHTML="";

for(let badge of badges){

let div=document.createElement("div");

div.className=
"badge "+
(badge.check()
?"unlocked"
:"locked");

div.innerHTML=`

<h3>${badge.title}</h3>

<p>${
badge.check()
?"Unlocked ✅"
:"Locked 🔒"
}</p>

`;

container.appendChild(div);

}

}

renderBadges();