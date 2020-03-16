var textArea = document.querySelector("#pull-request-description");
var commits = textArea.value;
// Don't apply the template if it's already been applied
if(commits.search("## Overview")===-1){
    var prTemplate = "";
    prTemplate = "## Overview\n<add an overview of the changes here>\n\n";
    prTemplate += "### Commits\n";
    prTemplate += commits + "\n\n";
    prTemplate += "## Steps to test\n";
    prTemplate += "1. Clone this branch\n";
    prTemplate += "1. <add other steps>\n";
    prTemplate += "1. Note: <add the outcome the reviewer should see>\n\n";
    prTemplate += "## Checklist\n";
    prTemplate += "The PR author has:\n";
    prTemplate += "- [ ] Reviewed the PR against the Acceptance Criteria for the task\n";
    prTemplate += "- [ ] Reviewed the diff of the PR, before assigning reviewer(s)\n\n";
    prTemplate += "**NOTE**: Ensure the PR is merged using `squash`, and the feature branch is deleted after the merge.";
    textArea.value = prTemplate;
}