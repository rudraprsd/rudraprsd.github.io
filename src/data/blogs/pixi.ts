import { Blog } from './types';

export const pixi: Blog = {
  id: "pixi",
  title: "Use pixi instead of Conda env",
  description: "It is good in managing dependecy conflict and package based on project",
  date: "2026-01",
  tags: ["python", "devOPs"],
//   draft: true,
  content: `# pixi is a good option.
Earlier I was using venv and conda env.
Ofcourse conda env has more advantage. But sometime there is a dependecy conflict when you try to reproduce a conda env, and it is because of conda-forge and
pypi (pip) channel.
This is a headache.
and also if you want to create different conda envs according to your project, then eventually you will forget which env for which one. You will end up with 
hundreds of conda env and you need to search again which is for what.

pixi is solving this problem. It is fast as it is rust based, modern and most important solves dependecy conflicts well and also supports every languages.

It will automatically create it's environment according to your project. Yes, that's right. It considers a project directory as an environment and isolates
from others. It do not install everything eachtime instead it does create a hard link.

## How to use pixi ?
1. First install pixi. Check in the [official website](https://pixi.prefix.dev/latest/installation/).
2. Verify installation
\`\`\`bash
pixi --version
\`\`\`
3. Go to your project directory, and initialize with
\`\`\`bash
pixi init
\`\`\`
4. Add required python packages
\`\`\`bash
pixi add numpy matplotlib
\`\`\`
- By default it will install from \`conda-forge\` channel.
5. To run a code in python
\`\`\`bash
pixi run python file.py
\`\`\`
> Note: I know it is kind of weird. You have to run \`pixi run\` every time. And here instead of python3 you are using python as pixi recognizes it as python.
> It automatically installs the python. But you can always install particular version such as \`pixi add python=3.12\`

6. You can check the python version as usual:
\`\`\`bash
pixi run python --version
\`\`\`

7. Now, when you want to run as a jupyter kerenl, you need to manually add it to jupyter kernel list.
\`\`\`bash
pixi run python -m ipykernel install \
--user \
--name project-name \
--display-name "Pixi (project name)"
\`\`\`

> Of course, you need to install jupyter notebook/lab before, using:
 \`\`\`bash
 pixi add ipykernel jupyterlab
 \`\`\`

> In \`vscode\`, select the newly created pixi kerenl.

---

*I am just starting with this pixi. It is working for me. I will let you know any problems and its troubleshoot solutions if I face. You are also welcome to
share any throught through a github issue.*

Thank you for reading this blog.

*Disclaimer: This blog is a personal passion project. I am not responsible for any liabilities.*

`
};
