const AssistantV2 = require('ibm-watson/assistant/v2');

const assistant = new AssistantV2({
  version: 'V2',
  username: 'apikey',
  password: 'uZaBERfqv57oaiFKuk6XlJMH_UGEBKlwIXvaRnr33szn',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

const service = new AssistantV2({
  iam_apikey: '{apikey}',
  version: '2019-07-12',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

service.createSession({
  assistant_id: 'cae4db5f-1c7a-419d-925a-44b19a1a700b'
})
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
