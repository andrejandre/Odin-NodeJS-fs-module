const fs = require("fs");
const fsp = require("fs/promises");
const os = require("os");

///
/// Just some functions to test out the fs module 
///

function renameCurrentJsonFile() {
	fs.rename("currentJson.json", "newJson.json", err => {
		if (err) {
			return console.error(err);
		}
	});
}

//renameCurrentJsonFile();

async function readAndWriteToFile() {
	const fileName = "test.txt";
	try {
		const fileData = await fsp.readFile(fileName, "utf8");
		console.log(fileData);
		const newContent = "Here's some new content to read!";
		await fsp.writeFile(fileName, newContent);
		const newFileData = await fsp.readFile(fileName, "utf8");
		console.log(newFileData);
	} catch (err) {
		console.log(err);
	}
}

//readAndWriteToFile();

function appendNewFile() {
	let content = "1 - NEW LOG LINE!";
	fs.appendFile("testLog.log", content, err => {
		if (err) {
			console.error(err);
		}
	})
}

//appendNewFile();

console.log(os.userInfo());
