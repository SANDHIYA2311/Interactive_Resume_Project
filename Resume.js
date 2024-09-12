fetch('sample.json')
.then(response=>response.json())
.then(s=>{

document.getElementById("nav1").innerHTML = s.navigation[0];
document.getElementById("nav2").innerHTML = s.navigation[1];
document.getElementById("nav3").innerHTML = s.navigation[2];
document.getElementById("nav4").innerHTML = s.navigation[3];
document.getElementById("nav5").innerHTML = s.navigation[4];
document.getElementById("nav6").innerHTML = s.navigation[5];
document.getElementById("nav7").innerHTML = s.navigation[6];
document.getElementById("nav8").innerHTML = s.navigation[7];


document.getElementById("img1").src = s.Skills.img1;
document.getElementById("img2").src = s.Skills.img2;
document.getElementById("img3").src = s.Skills.img3;
document.getElementById("img4").src = s.Skills.img4;
document.getElementById("img5").src = s.Skills.img5;
document.getElementById("img6").src = s.Skills.img6;
document.getElementById("img7").src = s.Skills.img7;
document.getElementById("img8").src = s.Skills.img8;
document.getElementById("img9").src = s.Skills.img9;
document.getElementById("img10").src = s.Skills.img10;
document.getElementById("img11").src = s.Skills.img11;
document.getElementById("img12").src = s.Skills.img12;


document.getElementById("prof1").innerHTML = s.prof[0];
document.getElementById("prof2").innerHTML = s.prof[1];
document.getElementById("prof3").innerHTML = s.prof[2];
document.getElementById("prof4").innerHTML = s.prof[3];
document.getElementById("prof5").innerHTML = s.prof[4];
document.getElementById("prof6").innerHTML = s.prof[5];


document.getElementById("he1").innerHTML = s.headingExp[0];
document.getElementById("he2").innerHTML = s.headingExp[1];
document.getElementById("he3").innerHTML = s.headingExp[2];


document.getElementById("exp1").innerHTML = s.exp[0];
document.getElementById("exp2").innerHTML = s.exp[1];
document.getElementById("exp3").innerHTML = s.exp[2];
document.getElementById("exp4").innerHTML = s.exp[3];
document.getElementById("exp5").innerHTML = s.exp[4];
document.getElementById("exp6").innerHTML = s.exp[5];
document.getElementById("exp7").innerHTML = s.exp[6];


document.getElementById("maj1").innerHTML = s.MajProject[0];
document.getElementById("maj2").innerHTML = s.MajProject[1];
document.getElementById("maj3").innerHTML = s.MajProject[2];
document.getElementById("maj4").innerHTML = s.MajProject[3];
document.getElementById("maj5").innerHTML = s.MajProject[4];
document.getElementById("maj6").innerHTML = s.MajProject[5];
document.getElementById("maj7").innerHTML = s.MajProject[6];
document.getElementById("maj8").innerHTML = s.MajProject[7];
document.getElementById("maj9").innerHTML = s.MajProject[8];
document.getElementById("maj10").innerHTML = s.MajProject[9];
document.getElementById("maj11").innerHTML = s.MajProject[10];
document.getElementById("maj12").innerHTML = s.MajProject[11];
document.getElementById("maj13").innerHTML = s.MajProject[12];
document.getElementById("maj14").innerHTML = s.MajProject[13];
document.getElementById("maj15").innerHTML = s.MajProject[14];
document.getElementById("maj16").innerHTML = s.MajProject[15];
document.getElementById("maj17").innerHTML = s.MajProject[16];
document.getElementById("maj18").innerHTML = s.MajProject[17];
document.getElementById("maj19").innerHTML = s.MajProject[18];
document.getElementById("maj20").innerHTML = s.MajProject[19];
document.getElementById("maj21").innerHTML = s.MajProject[20];
document.getElementById("maj22").innerHTML = s.MajProject[21];
document.getElementById("maj23").innerHTML = s.MajProject[22];
document.getElementById("maj24").innerHTML = s.MajProject[23];
document.getElementById("maj25").innerHTML = s.MajProject[24];


document.getElementById("aw1").innerHTML = s.Award[0];
document.getElementById("aw2").innerHTML = s.Award[1];


document.getElementById("eb1").innerHTML = s.Edubg[0];
document.getElementById("eb2").innerHTML = s.Edubg[1];
document.getElementById("eb3").innerHTML = s.Edubg[2];
document.getElementById("eb4").innerHTML = s.Edubg[3];



document.getElementById("info1").innerHTML = s.PersonInfo[0];
document.getElementById("info2").innerHTML = s.PersonInfo[1];
document.getElementById("info3").innerHTML = s.PersonInfo[2];
document.getElementById("info4").innerHTML = s.PersonInfo[3];
document.getElementById("info5").innerHTML = s.PersonInfo[4];
document.getElementById("info6").innerHTML = s.PersonInfo[5];



document.getElementById("dec1").innerHTML = s.declaration[0];
document.getElementById("dec2").innerHTML = s.declaration[1];



document.getElementById("person1").innerHTML = s.footer[0];
document.getElementById("person2").innerHTML = s.footer[1];
});