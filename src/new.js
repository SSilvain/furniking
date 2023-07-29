import fs from 'fs';

const fileNameList = [
	"01_hero",
	"02_next",
	"03_options",
	"04_social",
	"05_faq",
	"06_citation",
	"07_clients",
]

for (const fileName of fileNameList) {
	fs.writeFile(fileName + '.pug', '', function (err) {
		if (err) throw err;
	  });
	fs.writeFile(fileName + '.scss', '', function (err) {
		if (err) throw err;
	  });
  }