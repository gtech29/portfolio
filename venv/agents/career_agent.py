from agents.base_agent import BaseAgent

class CareerAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="CareerAgent",
            description="You're a career advisor AI specialized in evaluating and summarizing professional experience, technical skills, and job suitability.",
            avatar="career_avatar.png"
        )

        self.skills = {
            "languages": ["Python", "C/C++", "C#", "Java", "SQL", "HTML", "CSS", "JavaScript"],
            "frameworks": ["Bootstrap", "React", "Webflow"],
            "tools": ["Git", "GitHub", "Docker", "Kubernetes"],
            "soft_skills": ["Research", "QA Testing", "Cross-functional collaboration", "Technical communication"]
        }

        self.experience = [
            {
                "title": "Computer Science Research Assistant",
                "company": "NAVFAC EXWC",
                "period": "10/2024 – Present",
                "responsibilities": [
                    "Developed and deployed containerized applications with Docker/Kubernetes",
                    "Simulated control systems using Python and open-source tools",
                    "Configured networking for robust system communication"
                ]
            },
            {
                "title": "Front-End Web Developer",
                "company": "CSUN ACM Chapter",
                "period": "07/2024 – Present",
                "responsibilities": [
                    "Redesigned and maintained the ACM chapter website using Bootstrap, HTML/CSS, and JavaScript",
                    "Enhanced user experience and performance analytics for 300+ members"
                ]
            },
            {
                "title": "Front-End Web Developer",
                "company": "Stelesthetics",
                "period": "02/2022 – Present",
                "responsibilities": [
                    "Built a Webflow-powered skincare service site",
                    "Improved appointment bookings by optimizing navigation and design"
                ]
            },
            {
                "title": "Business Analyst Intern – QA",
                "company": "Accenture (Cisco Project)",
                "period": "06/2023 – 08/2023",
                "responsibilities": [
                    "Performed QA testing using SQL scripts on Cisco’s eCommerce site",
                    "Led stakeholder meetings and contributed to product enhancement planning"
                ]
            }
        ]

    def get_skills_summary(self):
        prompt = f"""
        Generate a clear, professional markdown summary of my technical and soft skills for use on a portfolio website.

        **Languages**: {', '.join(self.skills['languages'])}
        **Frameworks/Libraries**: {', '.join(self.skills['frameworks'])}
        **Tools/Platforms**: {', '.join(self.skills['tools'])}
        **Soft Skills**: {', '.join(self.skills['soft_skills'])}
        """
        return self.get_response(prompt)

    def get_experience_summary(self):
        experience_text = ""
        for job in self.experience:
            experience_text += f"## {job['title']} at {job['company']}\n"
            experience_text += f"**{job['period']}**\n"
            experience_text += "**Key Responsibilities:**\n"
            for r in job['responsibilities']:
                experience_text += f"- {r}\n"
            experience_text += "\n"

        prompt = f"""
        Create a career summary based on the following professional experiences formatted in markdown.
        Highlight career development, technical breadth, and achievements.

        {experience_text}
        """
        return self.get_response(prompt)

    def assess_job_fit(self, job_description):
        all_skills = ', '.join(sum(self.skills.values(), []))
        all_duties = ' '.join([duty for job in self.experience for duty in job['responsibilities']])

        prompt = f"""
        Based on the skills and experience below, assess fit for the following job description.

        **Job Description:** {job_description}

        **Skills:** {all_skills}
        **Experience Duties:** {all_duties}

        Provide a markdown-formatted evaluation of strengths, gaps, and suitability.
        """
        return self.get_response(prompt)
