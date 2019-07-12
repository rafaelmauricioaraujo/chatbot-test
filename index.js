const AssistantV2 = require('ibm-watson/assistant/v2');

const service = new AssistantV2({
  iam_apikey: 'uZaBERfqv57oaiFKuk6XlJMH_UGEBKlwIXvaRnr33szn',
  version: '2019-07-12',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

service.createSession({
  assistant_id: '509eea3e-a13d-440c-bfdf-8edaed55913e'
})
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
