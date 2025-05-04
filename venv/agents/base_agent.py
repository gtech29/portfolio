import openai
import os


class BaseAgent:
    def __init__(self, name, description, avatar="default_avatar.png"):
        self.name = name
        self.description = description
        self.avatar = avatar
        self.model = "gpt-4o"  # You can swap with gpt-3.5-turbo for cheaper usage

    def get_response(self, prompt, stream=False):
        response = openai.ChatCompletion.create(
            model=self.model,
            messages=[
                {"role": "system", "content": self.description},
                {"role": "user", "content": prompt},
            ],
            stream=stream,
        )
        return response
