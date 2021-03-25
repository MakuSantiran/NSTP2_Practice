var items = new Array;
var question;
var answer;
var group;
var picture;

var DontIncludeFromRemix1 = [""];
var DontIncludeFromRemix2 = [""];
var DontIncludeFromRemix3 = [""];

var identificationMode = false;
var drainBy = -0.005;
var examMode = false;
var PanicMode = false;
var noMusic = true;

//var drainBy = -0.0005;
//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS

question = ["a process that creates growth, progress, or positive change","It is the product of mans cooperation and his desire to make things better and easier"];
answer = ["Development"];
group = "AspectsOfDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["Is characterized by a commitment of healthy nutritional choices"];
answer = ["Physical Development"];
group = "AspectsOfDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["Is characterized by an awareness and acceptance of ones feelings. "];
answer = ["Emotional development"];
group = "AspectsOfDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["Is characterized by recognition, acceptance and appreciation of diverse lifestyles and value differences."];
answer = ["Human Awareness"];
group = "AspectsOfDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["Is characterized by involvement in creative an stimulating mental activities."];
answer = ["Intellectual development"];
group = "AspectsOfDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["Is characterized by recognition of the interdependence of personal/ financial planning and external economic resources."];
answer = ["Financial development"];
group = "AspectsOfDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["Is characterized by an attitude of satisfaction with ones life plan. "];
answer = ["Life Planning","Life Development"];
group = "AspectsOfDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["Is a recognition of the interdependence of individuals with others, society and nature."];
answer = ["Social Development"];
group = "AspectsOfDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["Is characterized by a continuing search for meaning and purpose in life."];
answer = ["Spiritual Development"];
group = "AspectsOfDevelopment";
picture = "";
items.push({question,answer,group,picture});


/*

question = [""];
answer = [""];
group = "AspectsOfDevelopment";
picture = "";
items.push({question,answer,group,picture});


question = [""];
answer = [""];
group = "Definition";
picture = "";
items.push({question,answer,group,picture});

*/

//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS

function convertSpecialChars(){
	var size = items.length-1;
    console.log(size);
	
    
    for (i= 0; i<=size; i++){
        var question_size = items[i].question.length-1;
        var question_content = items[i].question;
        var answer_size = items[i].answer.length-1;
        var answer_content = items[i].answer;

        
        for (i2=0; i2<=question_size; i2++){
            question_content[i2] = question_content[i2].replace(/'/g,"\u0027");
            question_content[i2] = question_content[i2].replace(/’/g,"\u2019");           
        }
        for (i3=0; i3<=answer_size; i3++){
            //answer_content[i3] =  answer_content[i3].replace(/⟐/g,"\u27D0");
        }

		///array[size] = array[size].replace("'", "\u0027");
	}
    
}