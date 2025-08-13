---
date: 2025-07-14
categories:
    - Physics
tags: 
    - DFT, VASP
---

# How to create a monolayer structure ?

<!-- more -->

There are various methods you can build a monolayer structure fromo bulk. I will explain two easy methods

- Using VESTA

- Using code (python)

### Using code (python)

To use this method, you must have a clear understanding and visualization in you mind, what you are doing.
Through this trick it is both quick and easily reproducible and you can do for large number of structures in a high-throughput manner.

There are plenty of codes available to do this. You can find in github. Some are in bash scripts too. But we will use pymatgen. There is an
option for ase.

But pymatgen is using ase in background, and it's crystal structure visualizatin is great.

```python
import crystal_toolkit
```
> I will include a jupyter lab file (.ipynb) directly for this.

<!-- using mkdocs-jupyter  -->


### Using VESTA

For installation of VESTA, follow VESTA Official Website.