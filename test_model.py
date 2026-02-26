from openai import OpenAI

client = OpenAI(api_key="sk-eYCTwG0C6tIvrQLXTvr1yl2ekbdt6ewDWEe0A8F42W8dMzs6", base_url="https://api.bltcy.ai/v1")

response = client.chat.completions.create(model="qwen3-30b-a3b-instruct-2507", messages=[{"role": "user", "content": "Hello, who are you?"}])

print(response.choices[0].message.content)