import Validator from '../index';

test('Validator should return correctly validate username and mobile number', () => {
	let user1 = new Validator('nero_99rus', '8 (927) 000-00-00');
	let user2 = new Validator('dante999-999jj', '+7 960 000 00 00');
	let user3 = new Validator('n9n9_9n', '86 000 000 0000');
  let user4 = new Validator('rus178rus', '+86 000 000 0000');

	expect(user1).toEqual({
		username: 'nero_99rus',
		mobileNumber: '+79270000000',
	});

	expect(user2).toEqual({
		username: 'dante999-999jj',
		mobileNumber: '+79600000000',
	});

	expect(user3).toEqual({
		username: 'n9n9_9n',
		mobileNumber: '+860000000000',
	});

  expect(user4).toEqual({
		username: 'rus178rus',
		mobileNumber: '+860000000000',
	});
});

test('validateUsername should throw an error, if an invalid username is passed', () => {
	let invalidUser1 = new Validator('nero1111nero', '8 (927) 000-00-00');
	let invalidUser2 = new Validator('_-nero999', '8 (927) 000-00-00');
	let invalidUser3 = new Validator('nero99 nero', '8 (927) 000-00-00');

	expect(() => invalidUser1).toThrow(Error);

  expect(() => invalidUser2).toThrow(Error);

  expect(() => invalidUser3).toThrow(Error);
});

test('validateMobile should throw an error, if an invalid mobile is passed', () => {
	let invalidUser = new Validator('bob', '88 990 999 9999 2211 1');

	expect(() => invalidUser).toThrow(Error);
});
