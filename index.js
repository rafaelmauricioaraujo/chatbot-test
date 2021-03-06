const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
  version: '2019-07-16',
  iam_apikey: 'ZBr_n5VroO7pL2ywA9SDTxUcqNpyJsAXp2Q-Jssh-lBn',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

const params = {
    workspace_id: '7386122e-5a23-4094-a574-0ac27a7c7244',
}

assistant.message({
    workspace_id: '7386122e-5a23-4094-a574-0ac27a7c7244',
    input: {'text': 'Quanto tempo demora pro meu pedido ser entregue?'}
    })
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
    })
    .catch(err => {
      console.log(err)
    });

assistant.listLogs(params)
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
    })
    .catch(err => {
      console.log(err)
    });    
