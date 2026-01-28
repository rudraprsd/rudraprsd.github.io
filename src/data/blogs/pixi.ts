import { Blog } from './types';

export const pixi: Blog = {
  id: "pixi",
  title: "Why I Switched to pixi for Python Project Environments",
  description: "Simplify your Python workflow with fast, conflict-free project environments using pixi.",
  date: "28-01-2026",
  tags: ["python", "devops"],
  content: `# Why I Switched to pixi for Python Project Environments

For a long time, I relied on \`venv\` and Conda environments to manage my Python projects. While Conda offers many advantages, I often ran into frustrating dependency conflicts—especially when mixing packages from \`conda-forge\` and PyPI (pip). Reproducing environments could become a headache, and as the number of projects grew, so did the clutter of forgotten Conda environments. It was easy to lose track of which environment belonged to which project.

Enter **pixi**: a modern, Rust-based tool that has transformed my workflow. Pixi is fast, robust, and-most importantly-handles dependency conflicts gracefully. It supports multiple languages and treats each project directory as its own isolated environment. Instead of duplicating packages, pixi uses hard links, making environment creation both efficient and lightweight.

## Getting Started with pixi

1. **Install pixi**  
   Visit the [official installation guide](https://pixi.prefix.dev/latest/installation/) to get started.

2. **Verify your installation:**
   \`\`\`bash
   pixi --version
   \`\`\`

3. **Initialize pixi in your project directory:**
   \`\`\`bash
   pixi init
   \`\`\`

4. **Add required Python packages:**
   \`\`\`bash
   pixi add numpy matplotlib
   \`\`\`
   By default, pixi installs packages from the \`conda-forge\` channel.

5. **Run your Python code:**
   \`\`\`bash
   pixi run python file.py
   \`\`\`
   > **Note:** You'll use \`pixi run\` before your commands. Pixi automatically installs Python, but you can specify a version (e.g., \`pixi add python=3.12\`).

6. **Check your Python version:**
   \`\`\`bash
   pixi run python --version
   \`\`\`

7. **Set up a Jupyter kernel:**
   \`\`\`bash
   pixi run python -m ipykernel install \\
     --user \\
     --name project-name \\
     --display-name "Pixi (project name)"
   \`\`\`
   > **Important:** Be sure to install Jupyter and ipykernel first:
   \`\`\`bash
   pixi add ipykernel jupyterlab
   \`\`\`
   In VS Code, simply select your new pixi kernel from the kernel picker.

<hr className="my-12" />

I'm still exploring pixi, but so far it's been a game-changer for my development workflow. If I encounter any issues or discover useful troubleshooting tips, I'll update this post. If you have experiences or suggestions, feel free to reach out via [GitHub Issues](https://github.com/rudraprsd/rudraprsd.github.io/issues).

Thank you for reading! I hope this helps you streamline your own project environments.

<p className="mt-8 text-sm text-muted-foreground italic">
  This article reflects my personal experience and is intended for informational purposes only. Please use at your own discretion.
</p>
`
};
