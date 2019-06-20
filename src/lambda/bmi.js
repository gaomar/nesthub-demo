const functions = require('firebase-functions');
const {dialogflow, ImmersiveResponse} = require('actions-on-google');

const app = dialogflow({debug: true});

app.intent('welcome', (conv) => {
  conv.ask('あなたのBMIを測定します。測定開始ボタンを押してください。');
  conv.ask(new ImmersiveResponse({
    url: `https://gaomar-nesthub-demo.netlify.com/`,
    suppress: true
  }));
});

app.intent('bmi', (conv, {height, weight}) => {
  const bmiVal = (parseFloat(weight) / (parseFloat(height)/100 * parseFloat(height)/100)).toFixed(1);
  var speechText = `あなたのBMIは${bmiVal}です。`;
  conv.ask(speechText);
  conv.ask(new ImmersiveResponse({
    url: `https://gaomar-nesthub-demo.netlify.com/result`,
    suppress: true,
    state: {
      bmi: speechText,
    },
  }));
});

exports.handler = functions.https.onRequest(app);
