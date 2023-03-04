interface IBulletProps {
	content: {
		title: string;
		description: string;
	};
	icon: string;
}

export default function Bullet({ content, icon }: IBulletProps) {
	return (
		<div class="bullet">
			<div class="bullet--text">
				<h3 class="bullet--text-title">{content.title}</h3>
				<p class="bullet--text-desc">{content.description}</p>
			</div>
			<i class={`fa-solid ${icon} fa-3x bullet--icon`}></i>
		</div>
	);
}
