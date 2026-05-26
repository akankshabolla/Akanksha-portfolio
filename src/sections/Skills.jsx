import { motion } from "framer-motion";

function Skills() {

	const skills = [

		{
			title: "AI / ML",
			items: [
				"Python",
				"TensorFlow",
				"BERT",
				"Word2Vec",
				"Scikit-learn",
				"Transformers",
				"Computer Vision",
				"NLP",
				"Embeddings",
			],
		},

		{
			title: "Generative AI",
			items: [
				"LLMs",
				"Hugging Face",
				"RAG",
				"AI Agents",
				"Prompt Engineering",
				"Sentiment Analysis",
			],
		},

		{
			title: "Frontend",
			items: [
				"React",
				"Angular",
				"JavaScript",
				"HTML5",
				"CSS3",
				"Responsive Design",
			],
		},

		{
			title: "Backend",
			items: ["Flask", "Spring Boot", "REST APIs", "Microservices"],
		},

		{
			title: "Database",
			items: ["MySQL", "SQL", "Firebase", "Supabase"],
		},

		{
			title: "DevOps / Deployment",
			items: ["Docker", "GitHub", "Vercel", "Render"],
		},

		{
			title: "Tools",
			items: ["VS Code", "Git", "Figma", "Postman"],
		},

	];

	return (

		<section className="skills-section" id="skills">

			<div className="skills-stars" aria-hidden="true" />

			<h2 className="skills-title">Skills Universe ✦</h2>

			<div className="skills-grid">

				{skills.map((skill, index) => (

					<motion.div
						className="skill-card"
						key={index}
						tabIndex={0}
						animate={{ y: [0, -8, 0] }}
						transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
						whileHover={{ scale: 1.03, y: -12 }}
						whileTap={{ scale: 0.98 }}
						drag
						dragConstraints={{ top: -8, bottom: 8, left: -8, right: 8 }}
						dragElastic={0.25}
						role="article"
						aria-label={`${skill.title} skill card`}
					>

						<h3>{skill.title}</h3>

						<div className="skill-tags">
							{skill.items.map((item, i) => (
								<span key={i}>{item}</span>
							))}
						</div>

					</motion.div>

				))}

			</div>

		</section>

	);

}

export default Skills;