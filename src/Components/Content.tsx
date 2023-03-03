import Bullet from './Bullet';
import { text } from '../assets/text';

export default function Content() {
	return (
		<div class="content--bullet-container">
			<Bullet content={text.first} icon="fa-phone-office" />
			<Bullet content={text.middle} icon="fa-phone-office" />
			<Bullet content={text.last} icon="fa-phone-office" />
		</div>
	);
}
