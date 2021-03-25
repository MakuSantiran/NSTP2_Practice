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

question = ["Are standards by which people assess desirability, goodness and beauty which serve as a broad guidelines for social living"];
answer = ["Values"];
group = "ValuesDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["beliefs, opinions, ways of saying things, Example are religious moral and political ideas."];
answer = ["Idea"];
group = "ValuesDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["Is a Materials, objects people place."];
answer = ["Things"];
group = "ValuesDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["activities, events, actions and happenings"];
answer = ["Experiences"];
group = "ValuesDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["Are standards by which people assess desirability, goodness and beauty which serve as a broad guidelines for social living"];
answer = ["Values"];
group = "ValuesDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["is something that is freely chosen from alternatives and is acted upon which the individual celebrates as being part of his integration in his development as a person."];
answer = ["Value"];
group = "ValuesDevelopment";
picture = "";
items.push({question,answer,group,picture});

/// Principles of Valuing Process/// Principles of Valuing Process
question = ["Is a principles of valuing process where this is a cognitive aspect and its called?"];
answer = ["Choosing"];
group = "PrinciplesOfValuing";
picture = "";
items.push({question,answer,group,picture});

question = ["Is a principles of valuing process where this is a affecting aspect and its called?"];
answer = ["Prizing"];
group = "PrinciplesOfValuing";
picture = "";
items.push({question,answer,group,picture});

question = ["Is a principles of valuing process where this is a cognitive aspect and its called?"];
answer = ["Acting"];
group = "PrinciplesOfValuing";
picture = "";
items.push({question,answer,group,picture});

/// Micro Labels/// Micro Labels/// Micro Labels/// Micro Labels/// Micro Labels
question = ["Its a cognitive aspect where the choice must be made by the person with his own free will and volition."];
answer = ["Choosing Freely"];
group = "CognitiveAspect";
picture = "";
items.push({question,answer,group,picture});

question = ["Its a cognitive aspect where a choice must be selected from several options."];
answer = ["Choosing from alternatives"];
group = "CognitiveAspect";
picture = "";
items.push({question,answer,group,picture});

question = ["Its a cognitive aspect where after due and reflective consideration of consequences"];
answer = ["Choosing"];
group = "CognitiveAspect";
picture = "";
items.push({question,answer,group,picture});

question = ["Its an Affecting aspect where appreciating, treasuring and attaching importance to one’s choice."];
answer = ["Cherishing"];
group = "AffectingAspect";
picture = "";
items.push({question,answer,group,picture});

question = ["Its an Affecting aspect where ones choice should be manifested in life; that such choice should be the source of inspiration and joy."];
answer = ["Affirming publicly"];
group = "AffectingAspect";
picture = "";
items.push({question,answer,group,picture});

question = ["Its an Affecting aspect where a choice to be prized must be esteemed and highly desired"];
answer = ["Prizing"];
group = "AffectingAspect";
picture = "";
items.push({question,answer,group,picture});

question = ["Its a behavioral pattern where affirming ones choice is apparent and visible and visible through an active pursuit of its realization. "];
answer = ["Acting upon it"];
group = "BehavioralPatterns";
picture = "";
items.push({question,answer,group,picture});

question = ["Its a behavioral pattern where the things, ideas experiences valued are mirrored by ones lifestyle. "];
answer = ["Affirming it publicly"];
group = "BehavioralPatterns";
picture = "";
items.push({question,answer,group,picture});

// random defenitions

question = ["Is one of Filipino's Virtues where Development of one’s spiritual prowess and deepening of one’s faith in the god one believers in."];
answer = ["Maka-Diyos","MakaDiyos","Maka Diyos"];
group = "FilipinoVirtues";
picture = "";
items.push({question,answer,group,picture});

question = ["Is one of Filipino's Virtues where we should learn to love people and use things, not to love things and use people"];
answer = ["Maka-Tao","MakaTao","Maka Tao"];
group = "FilipinoVirtues";
picture = "";
items.push({question,answer,group,picture});

question = ["Is one of Filipino's Virtues where its a sign of loyalty, dependence, and adherence to the sovereignty of ones own government."];
answer = ["Maka-Bayan","MakaBayan","Maka Bayan"];
group = "FilipinoVirtues";
picture = "";
items.push({question,answer,group,picture});

question = ["Is one of Filipino's Virtues where its about duty and sense of responsibility to mother earth"];
answer = ["Maka-Likasan","MakaLikasan","Maka Likasan"];
group = "FilipinoVirtues";
picture = "";
items.push({question,answer,group,picture});


/*

question = [""];
answer = [""];
group = "ValuesDevelopment";
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