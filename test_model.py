from openai import OpenAI

client = OpenAI(api_key="sk-eYCTwG0C6tIvrQLXTvr1yl2ekbdt6ewDWEe0A8F42W8dMzs6", base_url="https://api.bltcy.ai/v1")

response = client.chat.completions.create(model="gpt-4o-mini-2024-07-18", messages=[{"role": "user", "content": "Hello, how are you?"}])

print(response.choices[0].message.content)