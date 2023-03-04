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
						<span class="hero--accent hero--id">
							<i class="fa-solid fa-building hero--accent-icon"></i>
						</span>
						<span>NIP: </span>
					</span>
					<span>9670062410</span>
				</h3>
				<h3 class="hero--subtext">
					<span>
						<span class="hero--accent hero--id">
							<i class="fa-solid fa-phone hero--accent-icon"></i>
						</span>
						<span>Telefon: </span>
					</span>
					<span>665877432</span>
				</h3>
				<h3 class="hero--subtext">
					<span class="hero--first-part">
						<span class="hero--accent hero--id">
							<i class="fa-solid fa-envelope hero--accent-icon"></i>
						</span>
						<span>e-mail: </span>
					</span>
					<span>fonika.biz@gmail.com</span>
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
