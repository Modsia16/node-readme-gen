// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string. Get licence links from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
    let licenseBadge = license;
    if (licenseBadge === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (licenseBadge === "GPL") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (licenseBadge === "Apache") {
      return `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else {
      return "no license";
    };
 }

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = license;
    if (licenseLink === "MIT") {
      return `https://opensource.org/licenses/Apache-2.0`;
    } else if (licenseLink === "GPL") {
      return `https://www.gnu.org/licenses/gpl-3.0`;
    } else if (licenseLink === "Apache") {
      return `https://opensource.org/licenses/Apache-2.0`;
    } else {
      return "no license";
    };
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseText = license;
    if (licenseText === "MIT") {
     return `MIT License
Released under MIT License

Copyright (c) 2013 Mark Otto.
Copyright (c) 2017 Andrew Fong.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, 
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE 
OR OTHER DEALINGS IN THE SOFTWARE.`;
    } else if (licenseText === "GPL") {
      return `GPL License
      https://opensource.org/licenses/GPL-3.0`;
    } else if (licenseText === "Apache") {
      licenseText = `Apache License 2.0
      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;
    } else {
      licenseText = "no license";
    };
  }

  

//function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents

  [about](#about)
  [build](#build)
  [installation](#installation)
  [contributing](#contributing)
  [usage](#usage)
  [tests](#tests)
  [license](#license)
  [questions](#questions)

    ## About The Project
        ${data.about}
    
    ## Built With
      ${data.languages}
    
    ## Installation
      ${data.installation}
    
    ## Contributing
      ${data.contribution}
    
    ## Usage
      ${data.usage}
    
    ## Tests
      ${data.tests}
    
    ## License
      ${renderLicenseSection(data.license)}
      ${renderLicenseLink(data.license)}


    ## Questions
    Contact:
    Github: [${data.username}](https://github.com/${data.username})
    Email: ${data.email}
  `;
  }

module.exports = generateMarkdown;
