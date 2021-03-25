var items = new Array;
var question;
var answer;
var group;
var picture;

var DontIncludeFromRemix1 = ["Steps In Community Building"];
var DontIncludeFromRemix2 = [""];
var DontIncludeFromRemix3 = ["Steps In Community Building"];

var identificationMode = false;
var drainBy = -0.005;
var examMode = false;
var PanicMode = false;
var noMusic = true;

//var drainBy = -0.0005;
//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS

question = ["is the on-going process of shaping and/or creating a community environment in the ever changing situation, event and circumstances."];
answer = ["Community Development"];
group = "CommunityDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["refers to a group of people who live and or work in close proximity to one another","A group of people who interact on various levels of sharing","Individuals who share in defining expectations for the group"];
answer = ["Community"];
group = "CommunityDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["allows and crates interaction among individuals and different communities where cooperation and collaboration thrives."];
answer = ["Process of Community Development"];
group = "CommunityDevelopment";
picture = "";
items.push({question,answer,group,picture});

question = ["What are these?"];
answer = ["Charactereistics of successful communities"];
group = "CommunityDevelopment";
picture = "img\\ComDev\\Screenshot_1.png";
items.push({question,answer,group,picture});

// Local Economic Development Model
question = ["What is the model that consists of Stewardship, Economic Development and Community Participation"];
answer = ["Local Economic Development Model"];
group = "3 sides of LEDM";
picture = "";
items.push({question,answer,group,picture});

question = ["Its the part of LEDM where its all about preservation of resources; natural, cultural, economic"];
answer = ["Stewardship"];
group = "3 sides of LEDM";
picture = "";
items.push({question,answer,group,picture});

question = ["Its the part of LEDM where its all about stimulation of trading, stopping leakage from the local economy."];
answer = ["Economic Development"];
group = "3 sides of LEDM";
picture = "";
items.push({question,answer,group,picture});

question = ["Its the part of LEDM where its all about building the communitys capacity to participate and share responsibility"];
answer = ["Community Participation"];
group = "3 sides of LEDM";
picture = "";
items.push({question,answer,group,picture});


//Steps

question = ["What step of community building is this?"];
answer = ["Systematic brainstorming on the common needs of the community"];
group = "Steps In Community Building";
picture = "img\\ComDev\\Screenshot_2.png";
items.push({question,answer,group,picture});

question = ["What step of community building is this?"];
answer = ["Establishing A sound vision, mission, goals, and objectives"];
group = "Steps In Community Building";
picture = "img\\ComDev\\Screenshot_3.png";
items.push({question,answer,group,picture});

question = ["What step of community building is this?"];
answer = ["Training and Technical Support"];
group = "Steps In Community Building";
picture = "img\\ComDev\\Screenshot_4.png";
items.push({question,answer,group,picture});

question = ["What step of community building is this?"];
answer = ["Creating community spirit, cooperation and oneness"];
group = "Steps In Community Building";
picture = "img\\ComDev\\Screenshot_5.png";
items.push({question,answer,group,picture});

question = ["The fifth and final step of community building is?"];
answer = ["Mobilizing the community into a single workforce whose main thrust is progress and development"];
group = "Steps In Community Building";
picture = "img\\ComDev\\Screenshot_x.png";
items.push({question,answer,group,picture});



/*

question = ["What step of community building is this?"];
answer = [""];
group = "Steps In Community Building";
picture = "img\\ComDev\\Screenshot_x.png";
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