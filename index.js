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

  /*
  service.message({
    assistant_id: '509eea3e-a13d-440c-bfdf-8edaed55913e',
    session_id: '3106dd3b-d54f-4676-a7e5-6335835bfb01',
    input: {
      'message_type': 'text',
      'text': 'caps'
      }
    })
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
    })
    .catch(err => {
      console.log(err);
    });
  */
