import openai
from agents.base_agent import BaseAgent


class ResearchAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="ResearchAssistant",
            description="I'm the research specialist. I can search the web for information about technologies, trends, and industry news.",
            avatar="research_avatar.png",
        )

    def search_web(self, query):
        """
        Uses GPT-4-turbo with the 'web' tool to retrieve live info.
        """
        try:
            response = openai.ChatCompletion.create(
                model="gpt-4-turbo",
                messages=[
                    {
                        "role": "system",
                        "content": "You are a helpful research assistant who can browse the web.",
                    },
                    {"role": "user", "content": f"Search the web for: {query}"},
                ],
                tool_choice="auto",
                tools=[{"type": "web"}],
            )
            return response["choices"][0]["message"]["content"]
        except Exception as e:
            return f"Error searching the web: {str(e)}"

    def research_technology(self, technology):
        query = f"latest developments and best practices for {technology} in software development"
        search_results = self.search_web(query)

        prompt = f"""
Based on the following web search results about **{technology}**, summarize the following:

1. What it is and what problems it solves
2. Current state and popularity in industry
3. Key features and benefits
4. Common use cases
5. Anticipated future developments

Search Results:
{search_results}

Format the response in **markdown** with section headers.
"""
        return self.get_response(prompt)

    def compare_technologies(self, tech1, tech2):
        query = f"comparison between {tech1} and {tech2} for software development"
        search_results = self.search_web(query)

        prompt = f"""
Based on the following web search results, compare **{tech1}** and **{tech2}** in software development:

- Key differences
- Performance
- Learning curve
- Community support
- Use case recommendations

Search Results:
{search_results}

Format the response as a **markdown table**, followed by a short recommendation paragraph.
"""
        return self.get_response(prompt)

    def get_industry_trends(self):
        query = "latest trends in the software development industry 2025"
        search_results = self.search_web(query)

        prompt = f"""
Based on the following web search results, summarize recent trends in the software development industry:

1. Emerging technologies
2. Methodologies and tooling changes
3. High-demand skills or languages
4. Predictions for the next 3–5 years

Search Results:
{search_results}

Format the response in **markdown** with bullet points and section titles.
"""
        return self.get_response(prompt)
