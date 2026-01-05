import fs from "fs";

const owner = "IgorSilva-S";
const repo = "SpaceOfGhosts";
const branch = "development";

async function getAllCommits() {
  let page = 1;
  let allCommits = [];

  while (true) {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=100&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.length === 0) break; // acabou os commits

    const commits = data.map(c => ({
      message: c.commit.message,
      date: c.commit.author.date
    }));

    allCommits = allCommits.concat(commits);
    page++;
  }

  fs.writeFileSync("commits.json", JSON.stringify(allCommits, null, 2));
  console.log(`Total de commits salvos: ${allCommits.length}`);
}

getAllCommits();
