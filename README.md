# MySkill x SGU_Shortclass - FrontEnd Fundamentals - Personal Portfolio

This repository contains the code for a personal portfolio website created as part of the **MySkill x SGU Shortclass - FrontEnd Fundamentals** course. The portfolio website showcases your personal information, experiences, projects, education, skills, and hobbies. It is designed to be responsive and features a modern design with social media integration.

## Features

- A modern and responsive personal portfolio
- Sections for personal description, projects, education, skills, hobbies, and social media links.
- Easy customization through the `index.html` file.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RyanGA09/MySkillxSGU_SC-FrontEndFundamentals-PersonalPortfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MySkillxSGU_SC-FrontEndFundamentals-PersonalPortfolio
   ```

3. Open the project in your preferred IDE (e.g., Visual Studio Code).

4. Open `index.html` file in your web browser to view the portfolio.

## Usage

- Modify personal information: Update your personal details such as name, bio, and contact information in the `index.html` file.
- Showcase your projects: Add or edit your projects in the Projects section within `index.html`.
- Customize styling: Change the look and feel of your portfolio by editing the `assets/styles.css` file to match your preferences.
- Add interactivity (optional): If you want additional features such as animations or form validation, create a `scripts.js` file inside the `assets/` folder. This file is not included by default, as its inclusion depends on your specific needs.

## Customization

Here are a few key things you should modify to make the portfolio fit your personal information and preferences:

1. **Replace the placeholder name with your real name**:

   - In the `index.html` file, find the placeholder text `Your Personal Name` and replace it with your actual name.

2. **Change the profile picture**:

   - Replace the profile picture in `assets/iconsperson.jpg` with your own photo.

3. **Add or edit projects and education**:

   - In the Projects section of `index.html`, update the **Projects** and **Education** sections with your own experiences and background.

4. Add interactivity with JavaScript (optional):
   - If you'd like to add interactive features such as animations or form validation, create a scripts.js file inside the assets/ folder and customize it to your liking.

**Note**: The `scripts.js` file is not included by default in this repository, as it depends on your specific needs, such as adding interactivity or animations. Feel free to create and customize this file based on your requirements.

## Details on Projects and Education

You can showcase your projects by editing the `index.html` file, under the **Projects** section. Here’s an example project:

```html
<article class="project">
  <h3>Project Title 1</h3>
  <p class="dates">Start Date - End Date</p>
  <p class="description">Detailed project description here.</p>
  <a href="https://example.com" target="_blank" class="project-link"
    >View Project</a
  >
</article>
```

Similarly, update the Education section as needed:

```html
<article class="edu">
  <h3>Institution Name</h3>
  <p class="dates">Start Date - End Date</p>
  <p class="description">Description of your studies here.</p>
  <p class="degree">Degree Earned</p>
</article>
```

## Contributing

Feel free to fork the repository and submit pull requests for improvements or bug fixes. When contributing, please create a new branch for your changes instead of pushing directly to the main branch.

**Important**: To contribute, follow these steps:

### With Forking

1. Fork Repository
   On the project page you want to contribute to, click the "Fork" button in the upper right corner. This will create a copy of the repository in your GitHub account.
2. Clone Forked Repository
   After forking, open your terminal and run the following command to clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/MySkillxSGU_SC-FrontEndFundamentals-PersonalPortfolio.git
   ```

3. Navigate to the Project Directory
   Change to the project directory with the command:

   ```bash
   cd MySkillxSGU_SC-FrontEndFundamentals-PersonalPortfolio
   ```

4. Create a new branch
   Create a new branch for the feature or bug fix you want to add:

   ```bash
   git checkout -b your-feature-branch
   ```

5. Make your changes and commit them
   Make the necessary changes in the code. After that, add the changes to the staging area and commit:

   ```bash
   git add .
   ```

   ```bash
   git commit -m "Add a descriptive message about your changes"
   ```

6. Push the branch to your forked repository
   After committing, push the new branch to your forked repository on GitHub:

   ```bash
   git push -u origin your-feature-branch
   ```

7. Open a pull request from your branch to the main branch of the original repository.

- Go to the original repository (the one you forked) on GitHub.
- Click the "Pull Requests" tab and then click "New Pull Request".
- Select your branch from your fork as the source (base) and the main branch from the original repository as the target (compare).
- Provide a suitable description and submit the pull request.

### Without Forking

1. Create a new branch
   Create a new branch for the feature or bug fix you want to add:

   ```bash
   git checkout -b your-feature-branch
   ```

2. Make your changes and commit them
   Make the necessary changes in the code. After that, add the changes to the staging area and commit:

   ```bash
   git add .
   ```

   ```bash
   git commit -m "Add a descriptive message about your changes"
   ```

3. Push the branch to your branch at the repository
   Push the new branch to the repository:

   ```bash
   git push -u origin your-feature-branch
   ```

**_By following these guidelines, you help maintain a clean and manageable project history._**

## Note

**Contributing Section**: Added instructions to create a new branch for changes instead of pushing directly to the `main` branch, to maintain a clean project history.

## Contact

For any questions or feedback, you can reach out to me via:

- [Linkedin](https://www.linkedin.com/in/ryan-gading-abdullah/)

## License

&copy; 2024 Ryan Gading Abdullah. All rights reserved.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
