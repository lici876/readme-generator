function renderLicenseBadge(license) {
  if ('license' === 'apache 2.0' ) {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'boost software') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  if ( license === 'bsd 3-software') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if (license === 'bsd 2-clause') {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  if (license === 'none') {
    return ""
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## contact me
  github.com/${data.github}
  ${data.email}

  [github profile](https://www.github.com/${data.github})

  # license
 ${renderLicenseBadge(data.license)}


  # description
  ${data.description}


`;
}


module.exports=generateMarkdown