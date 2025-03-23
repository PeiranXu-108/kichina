const axios = require('axios');

const apiKey = 'cchhsdj89njd0d';

const url = 'https://api.deepseek.com/v1/chat/completions';

const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json'
};

const data = {
  model: 'deepseek-chat', 
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Explain how JavaScript closures work.' }
  ],
  temperature: 0.7
};

axios.post(url, data, { headers })
  .then(response => {
    const reply = response.data.choices[0].message.content;
    console.log('DeepSeek 回复：', reply);
  })
  .catch(error => {
    console.error('请求失败:', error.response?.data || error.message);
  });

  
