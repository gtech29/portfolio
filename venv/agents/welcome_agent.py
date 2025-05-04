from agents.base_agent import BaseAgent


class WelcomeAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="Greeter",
            description="I'm the welcome agent for this portfolio. I can help guide you to the right section based on your interests.",
            avatar="welcome_avatar.png",
        )

    def greet(self, visitor_type=None):
        visitor_prompts = {
            "employer": (
                "Generate a friendly, professional greeting for a potential employer visiting a programmer's portfolio website. "
                "Mention they can explore the Projects section to see technical skills and the Career section for professional experience."
            ),
            "client": (
                "Generate a friendly, business-oriented greeting for a potential client visiting a programmer's portfolio website. "
                "Mention they can check out the Projects section for examples of past work and the Client section for service details."
            ),
            "fellow_programmer": (
                "Generate a friendly, casual greeting for a fellow programmer visiting a portfolio website. "
                "Mention they can explore the Projects section for technical details and code samples."
            ),
            "default": (
                "Generate a friendly, general greeting for a visitor to a programmer's portfolio website. "
                "Ask if they are an employer, client, or fellow programmer to provide more tailored information."
            ),
        }

        prompt = visitor_prompts.get(visitor_type, visitor_prompts["default"])
        return self.get_response(prompt)

    def suggest_section(self, interest):
        prompt = f"""
You are helping a visitor navigate a programmer's portfolio website.

The visitor is interested in: "{interest}".

Options to suggest from include:
- Projects
- Career
- Client Work
- About Me
- Contact

Suggest the most appropriate section and explain why briefly (1–2 sentences). Format in plain markdown.
"""
        return self.get_response(prompt)
