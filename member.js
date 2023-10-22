function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var projectsContent = document.getElementById("projectsContent");
    var contactContent = document.getElementById("contactContent");

    member.style.backgroundColor = "#f1f1f1";
    member.style.color = "#000000";
    skills.style.backgroundColor = "#000000";
    skills.style.color = "#ffffff";
    projects.style.backgroundColor = "#000000";
    projects.style.color = "#ffffff";
    contact.style.backgroundColor = "#000000";
    contact.style.color = "#ffffff";

    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    projectsContent.style.display = "none";
    contactContent.style.display = "none";
}