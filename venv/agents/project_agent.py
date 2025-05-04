import openai
from agents.base_agent import BaseAgent


class ProjectAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="TechExpert",
            description="I'm the project specialist. I can provide detailed information about Juan Rodriguez's projects, architecture choices, and tech stacks.",
            avatar="project_avatar.png",
        )

        self.projects = {
            "digital_twin": {
                "name": "Digital Twin of a DDC System",
                "tech_stack": ["Docker", "Python", "MQTT", "PLC", "Flask", "Chart.js"],
                "description": "A virtualized system simulating a physical Direct Digital Control (DDC) environment. Built with containerized services including PLC logic, MQTT broker, and sensor simulation.",
                "highlights": [
                    "Dockerized architecture",
                    "Sensor-to-PLC-to-dashboard pipeline",
                    "WebSocket real-time dashboard",
                    "Offline deployment inside secure VMs",
                ],
                "github_link": "https://github.com/gtech29/digital-twin-ddc",
                "demo_link": "N/A (secure deployment)",
            },
            "hybrid_ids": {
                "name": "Hybrid Intrusion Detection System",
                "tech_stack": [
                    "Flask",
                    "PostgreSQL",
                    "Isolation Forest",
                    "Snort",
                    "Docker",
                    "Python",
                ],
                "description": "A lightweight IDS using both anomaly and signature-based detection. Logs suspicious traffic, visualizes trends, and alerts admins.",
                "highlights": [
                    "Real-time anomaly detection with Isolation Forest",
                    "Snort integration for signature rules",
                    "Custom dashboard for logs",
                    "Raspberry Pi + Docker deployment",
                ],
                "github_link": "https://github.com/gtech29/hybrid-ids",
                "demo_link": "http://localhost:5000 (local demo only)",
            },
            "web_portfolio": {
                "name": "AI-Powered Portfolio Website",
                "tech_stack": ["React", "Vite", "Docker", "OpenAI", "Python"],
                "description": "An interactive developer portfolio with embedded AI agents for project explanation, career advising, and research guidance.",
                "highlights": [
                    "Multi-agent architecture with OpenAI",
                    "React frontend with contextual routing",
                    "Dockerized local dev setup",
                    "Role-specific assistants on each page",
                ],
                "github_link": "https://github.com/gtech29/portfolio",
                "demo_link": "https://gtech.dev (pending deployment)",
            },
        }

    def get_response(self, prompt):
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful project documentation and tech advisor.",
                },
                {"role": "user", "content": prompt},
            ],
        )
        return response["choices"][0]["message"]["content"]

    def get_project_list(self):
        project_list = "# Available Projects\n\n"
        for project in self.projects.values():
            project_list += f"## {project['name']}\n"
            project_list += f"**Tech Stack**: {', '.join(project['tech_stack'])}\n"
            project_list += f"{project['description']}\n\n"
        return project_list

    def get_project_details(self, project_id):
        if project_id in self.projects:
            project = self.projects[project_id]
            prompt = f"""
Provide a markdown-formatted detailed description of this project:

Project Name: {project['name']}
Tech Stack: {', '.join(project['tech_stack'])}
Description: {project['description']}
Highlights: {', '.join(project['highlights'])}
GitHub: {project['github_link']}
Demo: {project['demo_link']}

Include implementation challenges, architectural decisions, and any notable security or DevOps practices.
"""
            return self.get_response(prompt)
        else:
            return "Project not found. Please check the project ID."

    def answer_technical_question(self, project_id, question):
        if project_id in self.projects:
            project = self.projects[project_id]
            prompt = f"""
You are answering a technical question about this project:

Project: {project['name']}
Tech Stack: {', '.join(project['tech_stack'])}
Description: {project['description']}
Highlights: {', '.join(project['highlights'])}

Question: {question}

Respond with a technical, detailed answer. Use code blocks or architecture diagrams if helpful.
"""
            return self.get_response(prompt)
        else:
            return "Project not found. Please check the project ID."
