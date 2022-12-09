"use strict";
let answered = [];
let currentQuestion = 0;
let answer = 0;
let guess = 0;
let correct = 0;
let score = 0;

const calculateScore = (correct) => {
    let score = ((correct/10) * 100) ;
    $("#buttons").css("display","none")
    if(score >= 50){
        $("#caption").text("Pass")
        $("#image").attr("src","images/6.jpg");
        $("#questionText").text("You passed with a score of " + score + "%")
    }
    else{
        $("#caption").text("Fail")
        $("#image").attr("src","images/7.jpg");
        $("#questionText").text("You failed with a score of " + score + "%")
    }
};
const getRandomNumber = max => {
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();             // value >= 0.0 and < 1.0
		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
		random = random + 1;                // value is an integer between 1 and max
	}
	return random;
};
const getQuestion = questionNum => {
    if (questionNum == 1 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/1.png");
        $("#questionText").text("This team comp involved running 3 tanks and 3 supports with no dps and led to the implementation of the role queue system and 2-2-2 team format");
        $("#A1").val("GOATS");
        $("#A2").val("DOGS");
        $("#A3").val("CATS");
        $("#A4").val("PYTHONS");
        answer = 1;
        answered.push(questionNum);
    }
    else if (questionNum == 2 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/1.png");
        $("#questionText").text("Overwatch started as this canceled game");
        $("#A1").val("Gigantic");
        $("#A2").val("Titan");
        $("#A3").val("Paragon");
        $("#A4").val("Underwatch");
        answer = 2;
        answered.push(questionNum);
    }
    else if (questionNum == 3 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/1.png");
        $("#questionText").text("This character was the first hero created for Overwatch");
        $("#A1").val("Mercy");
        $("#A2").val("Soldier");
        $("#A3").val("Tracer");
        $("#A4").val("Mario");
        answer = 3;
        answered.push(questionNum);
    }
    else if (questionNum == 4 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/2.jfif");
        $("#questionText").text("In Majoras Mask the third transformation mask you aquire is");
        $("#A1").val("Pikachu");
        $("#A2").val("Goron");
        $("#A3").val("Deku");
        $("#A4").val("Zora");
        answer = 4;
        answered.push(questionNum);
    }
    else if (questionNum == 5 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/2.jfif");
        $("#questionText").text("This game used cel-shading to create a unique cartoon-y style");
        $("#A1").val("Wind Waker");
        $("#A2").val("Majoras Mask");
        $("#A3").val("Sunshine");
        $("#A4").val("Twilight Princess");
        answer = 1;
        answered.push(questionNum);
    }
    else if (questionNum == 6 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/2.jfif");
        $("#questionText").text("This game was the first Zelda game to include motion controls");
        $("#A1").val("Skyward Sword");
        $("#A2").val("Twilight Princess(Wii)");
        $("#A3").val("Wand Of Gamelon");
        $("#A4").val("Ocarina Of Time");
        answer = 2;
        answered.push(questionNum);
    }
    else if (questionNum == 7 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/3.png");
        $("#questionText").text("This character was included in Smash: Melee and became a fan favourite character despite his origin game not releasing outside of japan");
        $("#A1").val("Pac-Man");
        $("#A2").val("Marth");
        $("#A3").val("Roy");
        $("#A4").val("Ike");
        answer = 3;
        answered.push(questionNum);
    }
    else if (questionNum == 8 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/3.png");
        $("#questionText").text("This was the first Fire Emblem game to have 3d models instead of sprites");
        $("#A1").val("Blazing Sword");
        $("#A2").val("Advance Wars");
        $("#A3").val("Radiant Dawn");
        $("#A4").val("Path Of Radiance");
        answer = 4;
        answered.push(questionNum);
    }
    else if (questionNum == 9 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/3.png");
        $("#questionText").text("This gameboy entry was never released outside of japan");
        $("#A1").val("Blazing Sword");
        $("#A2").val("Binding Blade");
        $("#A3").val("Advance Wars 2");
        $("#A4").val("Genealogy Of The Holy War");
        answer = 1;
        answered.push(questionNum);
    }
    else if (questionNum == 10 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/4.png");
        $("#questionText").text("This game had enough cut content to base two other entire games(Haunting Ground & Devil May Cry) off of");
        $("#A1").val("Dino Crisis");
        $("#A2").val("Resident Evil 4");
        $("#A3").val("Resident Evil 2");
        $("#A4").val("Resident Evil 7");
        answer = 2;
        answered.push(questionNum);
    }
    else if (questionNum == 11 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/4.png");
        $("#questionText").text("This enemy is blind and can crawl on ceilings");
        $("#A1").val("Hunter");
        $("#A2").val("Tyrant");
        $("#A3").val("Licker");
        $("#A4").val("Zombie Shark");
        answer = 3;
        answered.push(questionNum);
    }
    else if (questionNum == 12 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/4.png");
        $("#questionText").text("Resident Evil 5 ends with Chris punching what in a volcano");
        $("#A1").val("Zombie Shark");
        $("#A2").val("Sheva");
        $("#A3").val("Wesker");
        $("#A4").val("Boulder");
        answer = 4;
        answered.push(questionNum);
    }
    else if (questionNum == 13 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/5.jfif");
        $("#questionText").text("This game was made in 4 months due to a rocky development cycle");
        $("#A1").val("DMC2");
        $("#A2").val("DMC3");
        $("#A3").val("Bayonetta");
        $("#A4").val("DMC4");
        answer = 1;
        answered.push(questionNum);
    }
    else if (questionNum == 14 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/5.jfif");
        $("#questionText").text("This game introduced the style system");
        $("#A1").val("DMC1");
        $("#A2").val("DMC3");
        $("#A3").val("Metal Gear Rising Revengance");
        $("#A4").val("DMC4");
        answer = 2;
        answered.push(questionNum);
    }
    else if (questionNum == 15 && answered.includes(questionNum) == false){
        $("#caption").text("Question"+ " " + (currentQuestion += 1));
        $("#image").attr("src","images/5.jfif");
        $("#questionText").text("Dante uses the alias 'Tony Redgrave' as a nod to when he was the protagonist in an early version of this game");
        $("#A1").val("Call Of Duty");
        $("#A2").val("Animal Crossing");
        $("#A3").val("Resident Evil 4");
        $("#A4").val("Shadows of the colossus");
        answer = 3;
        answered.push(questionNum);
    }
    else{
        getQuestion(getRandomNumber(15));
    }
};
$( document ).ready(() => {
    getQuestion(getRandomNumber(15));
    $("#A1").click( () => {
        guess = 1;
        if(guess == answer){
            correct += 1
        };
        if(answered.length == 10){
            calculateScore(correct);
        }
        else{
        getQuestion(getRandomNumber(15));
        };
    });
    $("#A2").click( () => {
        guess = 2;
        if(guess == answer){
            correct += 1
        };
        if(answered.length == 10){
            calculateScore(correct);
        }
        else{
        getQuestion(getRandomNumber(15));
        };
    });
    $("#A3").click( () => {
        guess = 3;
        if(guess == answer){
            correct += 1
        };
        if(answered.length == 10){
            calculateScore(correct);
        }
        else{
        getQuestion(getRandomNumber(15));
        };
    });
    $("#A4").click( () => {
        guess = 4;
        if(guess == answer){
            correct += 1
        };
        if(answered.length == 10){
            calculateScore(correct);
        }
        else{
        getQuestion(getRandomNumber(15));
        };
    });
});