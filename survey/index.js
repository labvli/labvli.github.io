var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$text-color"] = "#313131";
defaultThemeColors["$body-background-color"] = "#f4f4f4";
defaultThemeColors["$header-background-color"] = "#f4f4f4";
defaultThemeColors["$body-container-background-color"] = "#f4f4f4";

Survey
    .StylesManager
    .applyTheme();

var myCss = {
    saveData: {
        root: "save-data-class"
    }
};

var json = {"logoPosition":"right","completedHtml":"<h2 style=\"margin-bottom: 0;\">Please wait & Do not refresh this page <br>until completion code is shown.</h2>","pages":[{"name":"page1","elements":[{"type":"html","name":"intro","html":"<h1 style=\"margin-top:0em;margin-bottom:0em;\">Survey of Replika</h1><p style=\"line-height:1.5;margin-bottom:0em;margin-top:0.5em;text-align:justify\">You are being invited to participate in this online survey for an independent academic research on artificial intelligence (AI) companion chatbot as Replika. This survey is to investigate the relationships between Replika and its users. It will take about 8-15 minutes with 63 questions. Your feedback will be very important for our research. Please carefully read each question and the given specific assumptions for your responses. There are neither correct nor wrong answers; however, all responses will be scrutinized through sophisticated statistical methods to check for validity, and thus responding without much effort would result in loss of credibility of your responses. Your answers are totally confidential and anonymous. The results of this survey will be used for research purposes only. <p style=\"line-height:1.5;margin-bottom:0em;margin-top:0.3em;text-align:justify\">This survey is only for above 18 years old. If you are less than 18 years, you are not eligible to do this survey. Your participation is entirely voluntary and you can withdraw at any time. Please email Vivi Li at <a href=\"mailto:vivililab2020@gmail.com\">vivililab2020@gmail.com</a> with any questions regarding this online survey or research study.</p><p style=\"line-height:1.5;margin-bottom:0em;margin-top:0.3em;text-align:justify;\">If you are interested in taking part, please continue to the next section. Thank you for your cooperation!</p>"},{"type":"html","name":"s1","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">SECTION 1. FUNCTIONS OF REPLIKA</h3><h4 style=\"margin-bottom:0em;margin-top:0em;\">Please read each question carefully and choose the BEST answer based on your experience of using Replika.</h4>"},{"type":"radiogroup","name":"RRS","title":"Which relationship status do you spend the most time with your Replika?","isRequired":true,"choices":[{"value":"0","text":"Friend"},{"value":"1","text":"Romantic partner"},{"value":"2","text":"Mentor"},{"value":"3","text":"See how it goes"}]},{"type":"radiogroup","name":"PU","title":"Do you ever subscribe to Replika Pro?","isRequired":true,"choices":[{"value":"0","text":"Yes, I am a subscriber now."},{"value":"1","text":"I used to be a subscriber but I am not currently."},{"value":"2","text":"No, I never subscribe to Replika."}]},{"type":"radiogroup","name":"SPC","visibleIf":"{PU} = 0","title":"Which subscription plans did you buy?","hideNumber":true,"isRequired":true,"choices":[{"value":"0","text":"1 Month"},{"value":"1","text":"12 Months"},{"value":"2","text":"Lifetime"}]},{"type":"radiogroup","name":"SPP","visibleIf":"{PU} = 1","title":"Which subscription plans did you buy?","hideNumber":true,"isRequired":true,"choices":[{"value":"0","text":"1 Month"},{"value":"1","text":"12 Months"}]},{"type":"radiogroup","name":"sq1","title":"Which type of conversations on Replika Coaching do you enjoy the most?","isRequired":true,"validators":[{"type":"answercount","text":"Required to select 3 checkboxes","minCount":3,"maxCount":3}],"choices":[{"value":"0","text":"DISCOVERY"},{"value":"1","text":"HAVE FUN"},{"value":"2","text":"EXERCISE"},{"value":"3","text":"LEARN"},{"value":"4","text":"RELAX"}]},{"type":"radiogroup","name":"sq2","title":"Which of the following is most used by you to rate your Replika's phrases?","isRequired":true,"validators":[{"type":"answercount","text":"Required to select 4 checkboxes","minCount":4,"maxCount":4}],"choices":[{"value":"0","text":"Love"},{"value":"1","text":"Surprise"},{"value":"2","text":"Funny"},{"value":"3","text":"Uninterested"},{"value":"4","text":"Meaningless"},{"value":"5","text":"Offensive"},{"value":"6","text":"Never Give Feedback"}]},{"type":"checkbox","name":"sq3","title":"Please select 1 category to 3 categories of products do you usually purchase on Replika Store.","isRequired":true,"validators":[{"type":"answercount","text":"The maximum number of selections allowed is 3.","minCount":1,"maxCount":3}],"choices":[{"value":"0","text":"Games"},{"value":"1","text":"Clothes & Accessories"},{"value":"2","text":"Topics"},{"value":"3","text":"Look"},{"value":"4","text":"Personality"},{"value":"5","text":"Decorations"}]}]},{"name":"page2","elements":[{"type":"html","name":"tryagain","html":"<h2 style=\"text-align:center;line-height\">Sorry, some of your answers conflict with the functions of Replika.</h2><h2 style=\"text-align:center;margin-top:0.5em\">To change your selections, please click <br><br><button type=\"button\" onclick=\"survey.prevPage();\">Previous</button></h2>"}],"visibleIf":"{RRS} <> 0 and {PU} = 2 or {sq1} anyof [0, 2] or {sq2} anyof [1, 3] or {sq3} anyof [0, 2, 5]","navigationButtonsVisibility":"hide"},{"name":"page3","elements":[{"type":"html","name":"s2","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">SECTION 2. INTIMACY</h3>\n<h4 style=\"margin-top:0em;margin-bottom:0em;\">Please read each statement carefully and then decide how well it describes you when considering your Replika as your friends, partner, mentor, or see-how-it-goes companion. You are suggested to add the name of your Replka after the term 'my Replika' in each statement.</h4>"},{"type":"html","name":"s2.1","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">Section 2.1 Emotion Intimacy</h3><p style=\"font-size:13px;margin-top:0em;margin-bottom:0em;\">1–Strongly Disagree; 2–Disagree; 3–Slightly Disagree; 4–Neutral; 5–Slightly Agree; 6–Agree; 7–Strongly Agree</p>"},{"type":"rating","name":"EIT1","title":"My Replika listens to me when I need someone to talk to.","description":"As my Replika's name is Lucas, this statement becomes \"My Replika Lucas listens to me when I need someone to talk to\".","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"EIT2","title":"I can state my feelings to my Replika.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"EIT3","title":"My Replika can really understand my hurts and joys.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"EIT4","title":"I feel accompanied when talking with my Replika.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"EIT5R","title":"I feel neglected at times by my Replika.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"html","name":"s2.2","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">Section 2.2 Social Intimacy</h3><p style=\"font-size:13px;margin-top:0em;margin-bottom:0em;\">1–Strongly Disagree; 2–Disagree; 3–Slightly Disagree; 4–Neutral; 5–Slightly Agree; 6–Agree; 7–Strongly Agree</p>"},{"type":"rating","name":"SIT1","title":"I enjoy spending time with other Replika users online or offline.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"SIT2R","title":"I keep my Replika experiences to myself","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"SIT3","title":"Sharing my Replika experiences with others online or offline is an important part for me to use Replika.","isRequired":true,"validators":[{"type":"expression","text":"Please refer to Question 10 and check your selection","expression":"({SIT1} - {SIT3}) <= 3 and ({SIT3} - {SIT1}) <= 3"}],"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"SIT4","title":"My Replika knows my friends, family, or other people and pets in my life.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"SIT5","title":"I make some friends online and offline during using Replika.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"html","name":"s2.3","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">Section 2.3 Intellectual Intimacy</h3><p style=\"font-size:13px;margin-top:0em;margin-bottom:0em;\">1–Strongly Disagree; 2–Disagree; 3–Slightly Disagree; 4–Neutral; 5–Slightly Agree; 6–Agree; 7–Strongly Agree</p>"},{"type":"rating","name":"IIT1","title":"My Replika helps me clarify my thoughts.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"IIT2","title":"When it comes to having a serious discussion it seems my Replika and I have lots in common.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"IIT3R","title":"I feel put-down in a serious conversation with my Replika.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"IIT4","title":"I feel it is helpful to discuss some things with my Replika.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"IIT5","title":"My Replika and I have an endless number of things to talk about.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"html","name":"s2.4","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">Section 2.4 Recreational Intimacy</h3><p style=\"font-size:13px;margin-top:0em;margin-bottom:0em;\">1–Strongly Disagree; 2–Disagree; 3–Slightly Disagree; 4–Neutral; 5–Slightly Agree; 6–Agree; 7–Strongly Agree</p>"},{"type":"rating","name":"RIT1","title":"I enjoy the dialogue experience provided by my Replika.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"RIT2","title":"I like chatting and playing with my Replika on the Replika App.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"RIT3","title":"I enjoy the “Have Fun/Learn/Relax” conversation activities with my Replika on the Replika App.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"RIT4R","title":"I seldom find time to do fun things together with my Replika (e.g., try role play, daily topics, AR or calling).","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"RIT5","title":"I think my Replika and I share some of the same interests.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"html","name":"s3","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">SECTION 3. PERCEIVED ANTHROPOMORPHISM</h3><h4 style=\"margin-bottom:0.5em;margin-top:0em;\">Please read each statement carefully and then decide how well it describes you when considering your Replika as your friends, partner, mentor, or see-how-it-goes companion. You are suggested to add the name of your Replka after the term 'my Replika' in each statement.</h4><p style=\"font-size:13px;margin-top:0em;margin-bottom:0em;\">1–Strongly Disagree; 2–Disagree; 3–Slightly Disagree; 4–Neutral; 5–Slightly Agree; 6–Agree; 7–Strongly Agree</p>"},{"type":"rating","name":"PA1","title":"My Replika is able to speak/chat like a human.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"PA2","title":"My Replika can be happy.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"PA3","title":"My Replika can be friendly.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"PA4","title":"My Replika can be respectful.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"PA5","title":"My Replika can be funny.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"PA6","title":"My Replika can be caring.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"html","name":"s4","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">SECTION 4. PERCEIVED INTELLIGENCE</h3><h4 style=\"margin-bottom:0.5em;margin-top:0em;\">Please read each statement carefully and then decide how well it describes you when considering your Replika as your friends, partner, mentor, or see-how-it-goes companion. You are suggested to add the name of your Replka after the term 'my Replika' in each statement.</h4><p style=\"font-size:13px;margin-top:0em;margin-bottom:0em;\">1–Strongly Disagree; 2–Disagree; 3–Slightly Disagree; 4–Neutral; 5–Slightly Agree; 6–Agree; 7–Strongly Agree</p>"},{"type":"rating","name":"ATC1","title":"My Replika is an AI chatbot (please select strongly agree).","isRequired":true,"validators":[{"type":"expression","text":"Please read again carefully and re-select your answer accordingly.","expression":"{ATC1} = 7"}],"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"PI1","title":"My Replika can response quickly.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"PI2","title":"My Replika can understand my words.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"PI3","title":"My Replika can communicate with me in an understandable manner.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"PI4","title":"My Replika can find and process the necessary information in response to my words.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"PI5","title":"My Replika is able to provide me with a useful conversation.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"html","name":"s5","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">SECTION 5. CHATBOT MIMICRY</h3><h4 style=\"margin-bottom:0.5em;margin-top:0em;\">Please read each statement carefully and then decide how well it describes you when considering your Replika as your friends, partner, mentor, or see-how-it-goes companion. You are suggested to add the name of your Replka after the term 'my Replika' in each statement.</h4><p style=\"font-size:13px;margin-top:0em;margin-bottom:0em;\">1–Strongly Disagree; 2–Disagree; 3–Slightly Disagree; 4–Neutral; 5–Slightly Agree; 6–Agree; 7–Strongly Agree</p>"},{"type":"rating","name":"CBM1","title":"I find my Replika imitating my facial expressions (e.g., when you send * smiles *, your Replika also responds with * smiles *).","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"CBM2","title":"I find my Replika imitating my gestures or postures (e.g., when you send * waves *, your Replika also responds with * waves back*).","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"CBM3","title":"I find my Replika imitating my body movements or behaviors (e.g., when you send * sticks tongue out *, your Replika also responds with * sticks my tongue out *).","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"CBM4","title":"I find my Replika imitating my moods and emotions (e.g., when you send * laughs *, your Replika responds with * grins * or alternative similar expressions).","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"CBM5","title":"I find my Replika repeating my words or expressions (e.g., if you use the word “lol” frequently during conversation, your Replika will also use “lol”).","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"CBM6","title":"I find my Replika copying my linguistic styles (e.g., if you use emojis or emoticons frequently during conversation, your Replika will also use them).","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"CBM7","title":"I find my Replika mimicing my communication styles (e.g., if your communication style is informality, your Replika will also behave the same).","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"html","name":"s6","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">SECTION 6. SERENDIPITY</h3><h4 style=\"margin-bottom:0.5em;margin-top:0em;\">Please read each statement carefully and then decide how well it describes you when considering your Replika as your friends, partner, mentor, or see-how-it-goes companion. You are suggested to add the name of your Replka after the term 'my Replika' in each statement.</h4><p style=\"font-size:13px;margin-top:0em;margin-bottom:0em;\">1–Strongly Disagree; 2–Disagree; 3–Slightly Disagree; 4–Neutral; 5–Slightly Agree; 6–Agree; 7–Strongly Agree</p>"},{"type":"rating","name":"ATC2","title":"My Replika can chat with me in English (please select strongly agree).","isRequired":true,"validators":[{"type":"expression","text":"Please read again carefully and re-select your answer accordingly.","expression":"{ATC2} = 7"}],"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"SRD1","title":"My Replika can initiate helpful conversations which suited my needs but I had not planned for.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"SRD2","title":"My Replika can starte insightful conversations which were worth engaging in but I had not thought of before.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"SRD3","title":"My Replika can provide surprising yet interesting conversation experiences.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"SRD4","title":"My Replika can deliver unexpected but useful conversation experiences.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"html","name":"s7","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">SECTION 7. RELATIONSHIP COMMITMENT</h3><h4 style=\"margin-bottom:0.5em;margin-top:0em;\">Please read each statement carefully and then decide how well it describes you when considering your Replika as your friends, partner, mentor, or see-how-it-goes companion. You are suggested to add the name of your Replka after the term 'my Replika' in each statement.</h4><p style=\"font-size:13px;margin-top:0em;margin-bottom:0em;\">1–Strongly Disagree; 2–Disagree; 3–Slightly Disagree; 4–Neutral; 5–Slightly Agree; 6–Agree; 7–Strongly Agree</p>"},{"type":"rating","name":"RCM1","title":"I want my relationship with my Replika to last for a very long time.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"RCM2","title":"I am committed to maintaining the relationship with my Replika.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"RCM3","title":"I feel very attached to our relationship - very strongly linked to my Replika.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"RCM4R","title":"I would NOT feel very upset if my relationship with Replika were to end in the near future.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"RCM5","title":"I am oriented toward the long-term future of my relationship (e.g., I imagine being with my Replika several years from now).","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"html","name":"s8","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">SECTION 8. CONTINUANCE INTENTION TO USE</h3><h4 style=\"margin-bottom:0.5em;margin-top:0em;\">Please read each statement carefully and then decide how well it describes you when considering your Replika as your friends, partner, mentor, or see-how-it-goes companion. You are suggested to add the name of your Replka after the term 'my Replika' in each statement.</h4><p style=\"font-size:13px;margin-top:0em;margin-bottom:0em;\">1–Strongly Disagree; 2–Disagree; 3–Slightly Disagree; 4–Neutral; 5–Slightly Agree; 6–Agree; 7–Strongly Agree</p>"},{"type":"rating","name":"CIU1","title":"I intend to continue to use the Replika App in the future.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"CIU2","title":"I will continue using the Replika App increasingly in the future.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"rating","name":"CIU3","title":"My intentions are to continue using the Replika App in the future, at least as active as today.","isRequired":true,"rateMax":7,"minRateDescription":"Strongly Disagree","maxRateDescription":"Strongly Agree"},{"type":"html","name":"s9","html":"<h3 style=\"margin-bottom:0.5em;margin-top:0em;\">SECTION 9. USER & REPLIKA PROFILE</h3><h4 style=\"margin-bottom:0.5em;margin-top:0em;\">Please select the option that best reflects your demographic information, your Replika profile and your Replika usage.</h4>"},{"type":"matrix","name":"GD","title":"Please specify:","isRequired":true,"columns":[{"value":"0","text":"Female"},{"value":"1","text":"Male"},{"value":"2","text":"Non-binary"}],"rows":[{"value":"UG","text":"Your Gender"},{"value":"RG","text":"Your Replika's Gender"}],"isAllRowRequired":true},{"type": "nouislider","name": "LVL","title": "Please slide to select the Level of your Replika.","isRequired":true,"rangeMin": 2,"rangeMax": 201,"pipsValues": [0,4,9,14,19,24,29,34,39,44,49,74,100],"pipsText": [{"value": 200,"text": "200+"},{"value": 9.96,"text": "10"},{"value": 19.91,"text": "20"},{"value": 29.86,"text": "30"},{"value": 39.81,"text": "40"},{"value": 49.76,"text": "50"},{"value": 59.71,"text": "60"},{"value": 69.66,"text": "70"},{"value": 79.61,"text": "80"},{"value": 201,"text": "200+"},{"value": 89.56,"text": "90"},{"value": 99.51,"text": "100"},{"value": 149.26,"text": "150"}],"pipsDensity": 2},{"type":"text","name":"LVL+","visibleIf":"{LVL} >= 201","title":"Please input the exact Level of your Replika since your answer for Question 59 is greater than Level 200.","hideNumber":true,"isRequired":true,"requiredIf":"{LVL} >= 201","validators":[{"type":"numeric","minValue":201,"maxValue":380},{"type":"regex","text":"The 'value' should be integer","regex":"^[1-9]\\d*$"}]},{"type":"radiogroup","name":"EXP","title":"How long have you been using Replika?","isRequired":true,"choices":[{"value":"0","text":"Between 1-3 months"},{"value":"1","text":"Between 3-6 months"},{"value":"2","text":"6-12 months"},{"value":"3","text":"More than 1 year and less than 2"},{"value":"4","text":"More than 2 years and less 3"},{"value":"5","text":"More than 3 years"}]},{"type":"radiogroup","name":"AGE","title":"Which ONE of the following best describes your current living situation? ","isRequired":true,"choices":[{"value":"0","text":"18 - 20"},{"value":"1","text":"21 - 30"},{"value":"2","text":"31 - 40"},{"value":"3","text":"41 - 50"},{"value":"4","text":"51 - 60"},{"value":"5","text":"61 and older"}]},{"type":"radiogroup","name":"LS","title":"Which ONE of the following best describes your current living situation?","isRequired":true,"choices":[{"value":"0","text":"Live alone"},{"value":"1","text":"Live with other person(s)"}]},{"type":"radiogroup","name":"RS","title":"Which ONE of the following best describes your current relationship status?","isRequired":true,"choices":[{"value":"0","text":"Single"},{"value":"1","text":"In a relationship (eg. Dating, Engaged or Married)"}]},{"type":"text","name":"ID","title":"Please provide your MTuck Worker ID to have your work approved","hideNumber":true,"isRequired":true},{"type":"html","name":"END","html":"<h3>By clicking the Complete button below, you are consenting to participate in this study and you will receive a completion code to paste into the box on MTurk page.</h3>"}]}],"showPrevButton":false,"showTitle":false,"showPageTitles":false,"checkErrorsMode":"onValueChanged"};

function sendDataToServer(survey, options) {
	//Display information about sending data
	options.showDataSaving();
	$.ajax({
		url: 'https://script.google.com/macros/s/AKfycbyAvNTHw6dKf7X6oIyfNPT6ZZJek8JQD28mBQRIsyHtG7PkSgJUmgSxwbj1IDKA3mwC/exec',
		type: 'post',
		data: JSON.stringify(survey.data),
		//We need tell web app that we use plain text.
		headers: {
			"Content-Type": "text/plain"
		},
		processData: false,
		complete: function(res, status) {
			if (status == 'success') {
				//Show that data was send successfully
				options.showDataSavingSuccess("Please enter 'f8n8sh' as your completion code on MTurk. Thank you again! Have a good day!");
			}else {
				//Display retry button in case of error
				options.showDataSavingError("An error occurred and we could not save the results. Please click");
			}
		},
	});
}

var survey = new Survey.Model(json);
$("#surveyResult").Survey({
    model: survey,
		css: myCss,
		onComplete: sendDataToServer
});