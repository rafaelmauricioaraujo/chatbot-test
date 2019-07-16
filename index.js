const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
  version: '{version}',
  iam_apikey: '{apikey}',
  url: '{url}'
});
