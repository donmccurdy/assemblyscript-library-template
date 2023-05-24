import test from 'ava';
import { ready, add } from 'my-package';

test('add', async (t) => {
	await ready;
	t.is(add(2, 2), 4, '2 + 2 = 4');
});
