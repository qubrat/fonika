import Bullet from './Bullet';
import { text } from '../assets/text';

function Hero() {
	return (
		<div>
			<i class="fa-solid fa-user fa-4x hero--user"></i>
			<h1 class="hero--name">Grzegorz Kretek</h1>
			<div class="hero--contact">
				<h3 class="hero--subtext">
					<span>
						<span class="hero--accent hero--id fa-stack fa-1x">
							<i class="fa-solid fa-circle fa-stack-2x hero--accent-icon-bg"></i>
							<i class="fa-solid fa-building fa-stack-1x hero--accent-icon"></i>
						</span>
						<span>NIP: </span>
					</span>
					<span>9670062410</span>
				</h3>
				<h3 class="hero--subtext">
					<span>
						<span class="hero--accent hero--id fa-stack fa-1x">
							<i class="fa-solid fa-circle fa-stack-2x hero--accent-icon-bg"></i>
							<i class="fa-solid fa-phone fa-stack-1x hero--accent-icon"></i>
						</span>
						<span>Telefon: </span>
					</span>
					<span>665877432</span>
				</h3>
				<h3 class="hero--subtext">
					<span class="hero--first-part">
						<span class="hero--accent hero--id fa-stack fa-1x">
							<i class="fa-solid fa-circle fa-stack-2x hero--accent-icon-bg"></i>
							<i class="fa-solid fa-envelope fa-stack-1x hero--accent-icon"></i>
						</span>
						<span>e-mail: </span>
					</span>
					<span>tonika.biz@gmail.com</span>
				</h3>
			</div>
		</div>
	);
}

export default function Content() {
	return (
		<div id="content">
			<Hero />
			<Bullet content={text.first} icon="fa-blender-phone" />
			<Bullet content={text.middle} icon="fa-dice-d20" />
			<Bullet content={text.last} icon="fa-network-wired" />
		</div>
	);
}
