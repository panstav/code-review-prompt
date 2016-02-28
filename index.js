const prompt = require('prompt');

prompt.start();

const schema = {
	properties: {

		input: {
			name: 'reviewedCode',
			type: 'string',
			description: 'Have you reviewed the code?',
			message: 'Answer should be \'yes\' [/ \'y\'] or \'no\' [/ \'n\']',
			required: true
		}

	}
};

prompt.get(schema, (err, data) => {
	if (err) throw err;

	if (data.input.substr(0, 1).toLowerCase() !== 'y'){
		console.log('You better get to it then.');
		process.exit(1);
	}
});