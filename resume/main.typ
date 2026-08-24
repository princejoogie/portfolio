#let resume = json("resume.json")

#set page(
  paper: "a4",
  margin: (x: 1.4cm, y: 1.15cm),
)

#set text(font: "Libertinus Serif", size: 10.5pt)
#set par(justify: false, leading: 0.35em)
#show link: set text(fill: blue)
#show link: underline

#let rule() = line(length: 100%, stroke: 0.45pt + luma(180))

#let section(title) = [
  #v(0.1em)
  #rule()
  #text(size: 12pt, weight: 700)[#upper(title)]
  #v(0.1em)
]

#let role(title, dates, bullets) = [
  #grid(
    columns: (1fr, auto),
    column-gutter: 1em,
    align(left)[#text(weight: 700)[#title]],
    align(right)[#dates],
  )
  #set list(indent: 1.15em, body-indent: 0.5em, spacing: 0.5em)
  #list(..bullets.map((bullet) => [#bullet]))
]

#align(center)[
  #text(size: 16pt, weight: 700)[#resume.name]

  #resume.location | #resume.contact.phone | #link("mailto:" + resume.contact.email)[#resume.contact.email]

  #text(weight: 700)[LinkedIn:] #link(resume.contact.linkedin)[#resume.contact.linkedinLabel]
  #h(1.6em)
  #text(weight: 700)[Portfolio:] #link(resume.contact.portfolio)[#resume.contact.portfolioLabel]
  #h(1.6em)
  #text(weight: 700)[GitHub:] #link(resume.contact.github)[#resume.contact.githubLabel]
]

#section("Tools")
#set list(indent: 1.15em, body-indent: 0.5em, spacing: 0.5em)
- #text(weight: 700)[Languages:] #resume.skills.languages.join(", ")
- #text(weight: 700)[Technologies:] #resume.skills.technologies.join(", ")

#section("Professional Experience")
#for experience in resume.experience {
  role(
    [#experience.company | #experience.title | #experience.location],
    [#experience.dates],
    experience.bullets,
  )
}

#section("Education")
#grid(
  columns: (1fr, auto),
  column-gutter: 1em,
  align(left)[
    #text(weight: 700)[#resume.education.degree,]
    #emph[#resume.education.school]
  ],
  align(right)[#resume.education.dates],
)
