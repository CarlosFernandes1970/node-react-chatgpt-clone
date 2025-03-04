const { Configuration, OpenAIApi } = require('openai')
require("dotenv").config()

module.exports = class openai{

	static configuration(){
		const configuration = new Configuration({
			apiKey: process.env.OPEN_AI_KEY,
		})

		return new OpenAIApi(configuration)
	}

	static textCompletion ({prompt}) {
    return 	{
			model:"davinci-002",
			prompt:`${prompt}`,
			temperature:0,
			max_tokens: 3000,
			top_p:1,
			frequency_penalty: 0.5,
			presence_penalty: 0
		}
  }
}
