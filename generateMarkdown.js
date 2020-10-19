//Ok this is one big ol function called generate Markdown
function generateMarkdown(data) {
    //Reformats data into an object
    let reformatted = JSON.parse(data);
    console.log(reformatted.Title + " PARSED in generate read-me")
    //This is the structure of our README, just without the data that is entered by the user
    return `
# ${reformatted.Title}
## ${`Description`}
${reformatted.Description}
## ${`Table of Contents`}
${`[Installations]`}(#Installations)
${`[Usage]`}(#Usage)
${`[License]`}(#License)
${`[Contributing]`}(#Contributing)
${`[Test]`}(#Test)
${`[Questions]`}(#Questions)
## ${`Installations`}
${reformatted.Installations}
## ${`Usage`}
${reformatted.Usage}
## ${`License`}
${reformatted.License}
## ${`Contributing`}
${reformatted.Contributing}
## ${`Test`}
${reformatted.Test}
## ${`Questions`}
${reformatted.Questions}
`;
}

module.exports = generateMarkdown;
