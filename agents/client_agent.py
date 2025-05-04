import openai
from agents.base_agent import BaseAgent


class ClientAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="BusinessAdvisor",
            description="I help clients understand available services, project scope, and timelines based on Juan Rodriguez's expertise.",
            avatar="client_avatar.png",
        )

        self.services = {
            "web_dev": {
                "name": "Web Development",
                "description": "Responsive, secure websites and dashboards using React, Webflow, or Bootstrap tailored for small businesses and organizations.",
                "pricing_model": "Project-based or hourly",
                "price_range": "$3,000 - $15,000",
                "timeline": "3-8 weeks",
                "technologies": [
                    "React",
                    "Webflow",
                    "Bootstrap",
                    "JavaScript",
                    "HTML/CSS",
                ],
            },
            "devsecops": {
                "name": "DevSecOps Systems",
                "description": "Containerized environments and digital twin systems using Docker, Kubernetes, and secure CI/CD pipelines for deployment.",
                "pricing_model": "Hourly / Project",
                "price_range": "$5,000 - $20,000",
                "timeline": "4-10 weeks",
                "technologies": [
                    "Docker",
                    "Kubernetes",
                    "Python",
                    "Linux",
                    "PostgreSQL",
                ],
            },
            "consulting": {
                "name": "Technical Consulting",
                "description": "Advising on architecture, cloud tools, or development strategy with a focus on security and user experience.",
                "pricing_model": "Hourly",
                "price_range": "$75 - $150/hr",
                "timeline": "Flexible",
                "technologies": ["Cloud", "Docker", "Web", "Security"],
            },
        }

        self.process = [
            "Initial consultation to understand project goals",
            "Proposal drafting with budget & timeline",
            "Agreement on milestones and start date",
            "Design, development, and review phases",
            "Testing and deployment",
            "Post-launch support and documentation",
        ]

    def get_response(self, prompt):
        # Replace this with your actual OpenAI API call
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful technical agent."},
                {"role": "user", "content": prompt},
            ],
        )
        return response["choices"][0]["message"]["content"]

    def get_services_overview(self):
        services_text = "\n\n".join(
            [
                f"## {svc['name']}\n{svc['description']}\n"
                f"**Pricing Model**: {svc['pricing_model']}\n"
                f"**Price Range**: {svc['price_range']}\n"
                f"**Timeline**: {svc['timeline']}\n"
                f"**Technologies**: {', '.join(svc['technologies'])}\n"
                for svc in self.services.values()
            ]
        )
        prompt = f"""
Generate a markdown-formatted services overview for a full-stack developer and DevSecOps intern. Use the following details:

{services_text}
"""
        return self.get_response(prompt)

    def get_service_details(self, service_id):
        svc = self.services.get(service_id)
        if not svc:
            return "Service not found."

        prompt = f"""
Write a markdown-formatted detailed explanation for the following service:
- Name: {svc['name']}
- Description: {svc['description']}
- Pricing Model: {svc['pricing_model']}
- Price Range: {svc['price_range']}
- Timeline: {svc['timeline']}
- Technologies: {', '.join(svc['technologies'])}

Include value proposition, deliverables, and client benefits.
"""
        return self.get_response(prompt)

    def explain_process(self):
        steps_md = "\n".join(
            [f"### Step {i+1}: {step}" for i, step in enumerate(self.process)]
        )
        prompt = f"""
Explain the client engagement process below in markdown. For each step, provide what the client should expect and the deliverables involved:

{steps_md}
"""
        return self.get_response(prompt)

    def generate_proposal(self, project_description):
        prompt = f"""
Generate a markdown-formatted project proposal based on the description below:

{project_description}

Include:
1. Project Understanding
2. Proposed Approach
3. Timeline Estimate
4. Budget Range
5. Next Steps
"""
        return self.get_response(prompt)
