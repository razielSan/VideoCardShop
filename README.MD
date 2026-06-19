<div align="center">

# 🎥 VideoCardShop

### Video Card Store Trial Project

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2016–ES2025%2B-blue.svg)]()
[![FastAPI](https://img.shields.io/badge/FastAPI-0.111.0%2B-blue.svg)]()
[![Architecture](https://img.shields.io/badge/architecture-clean-orange.svg)]()

</div>

# ✨ Features

## 🎥 User Features

- viewing products
- adding items to the shopping cart
- removing items from the shopping cart
- shopping cart counter
- pagination of pages


# 🧱 Tech Stack

| Layer | Technology |
|------|------------|
| Language | Python 3.8+ |
| Language | JavasScript |
| Framework | FastAPI 0.111.0 |


# 📁 Project Structure

```text
VideoCardShop/
│── src/
│   ├── app/                # Application layer
│   ├── core/               # Shared utilities
│   └── settings/
│   
│
|
├── mypy.ini/
├── .pre-commit-config.yaml
├── pyproject.toml
└── README.md
```


## 🚀 Quick Start
### 1️⃣ Clone repository

```bash
git clone git@github.com:razielSan/VideoCardShop.git
cd VideoCardShop
```


### 2️⃣ Create virtual environment

Linux / macOS

```python
python -m venv venv
source venv/bin/activate

```
Windows

```python
python -m venv venv
venv\Scripts\activate
```


### 3️⃣ Install dependencies

ip update
```bash
python -m pip install --upgrade pip
```

```bash
pip install -e .
```


### ▶️ Run Application

```bash
uvicorn app.main:app --reload
```
or

```bash
app
```

### 🤝 Contributing

Pull requests are welcome.

If you'd like to improve architecture, performance, or UX — feel free to open an issue.


### 📬 Contact

Telegram: @razielasus


name: Tests

on: 
  push:
    branches:
      - main
  pull_request:
    branches:
      - main



jobs:
  unit-tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
    
      - uses: actions/setup-python@v5
        with:
          python-version: "3.8"

      - name: Install
        run: |
          pip install -e .[dev]


      - name: Ruff
        run: ruff check

      - name: Mypy
        run: mypy .


Но произошла ошибка

Obtaining file:///home/runner/work/VideoCardShop/VideoCardShop
  Installing build dependencies: started
  Installing build dependencies: finished with status 'done'
  Checking if build backend supports build_editable: started
  Checking if build backend supports build_editable: finished with status 'done'
  Getting requirements to build editable: started
  Getting requirements to build editable: finished with status 'done'
  Preparing editable metadata (pyproject.toml): started
  Preparing editable metadata (pyproject.toml): finished with status 'error'
  error: subprocess-exited-with-error
  
  × Preparing editable metadata (pyproject.toml) did not run successfully.
  │ exit code: 1
  ╰─> [20 lines of output]
      Traceback (most recent call last):
        File "/opt/hostedtoolcache/Python/3.8.18/x64/lib/python3.8/site-packages/pip/_vendor/pyproject_hooks/_in_process/_in_process.py", line 389, in <module>
          main()
        File "/opt/hostedtoolcache/Python/3.8.18/x64/lib/python3.8/site-packages/pip/_vendor/pyproject_hooks/_in_process/_in_process.py", line 373, in main
          json_out["return_val"] = hook(**hook_input["kwargs"])
        File "/opt/hostedtoolcache/Python/3.8.18/x64/lib/python3.8/site-packages/pip/_vendor/pyproject_hooks/_in_process/_in_process.py", line 209, in prepare_metadata_for_build_editable
          return hook(metadata_directory, config_settings)
        File "/tmp/pip-build-env-zyx9441m/overlay/lib/python3.8/site-packages/poetry/core/masonry/api.py", line 43, in prepare_metadata_for_build_wheel
          builder = WheelBuilder(poetry)
        File "/tmp/pip-build-env-zyx9441m/overlay/lib/python3.8/site-packages/poetry/core/masonry/builders/wheel.py", line 62, in __init__
          super().__init__(poetry, executable=executable)
        File "/tmp/pip-build-env-zyx9441m/overlay/lib/python3.8/site-packages/poetry/core/masonry/builders/builder.py", line 55, in __init__
          self._meta = Metadata.from_package(self._package)
        File "/tmp/pip-build-env-zyx9441m/overlay/lib/python3.8/site-packages/poetry/core/masonry/metadata.py", line 58, in from_package
          with readme.open(encoding="utf-8") as f:
        File "/opt/hostedtoolcache/Python/3.8.18/x64/lib/python3.8/pathlib.py", line 1222, in open
          return io.open(self, mode, buffering, encoding, errors, newline,
        File "/opt/hostedtoolcache/Python/3.8.18/x64/lib/python3.8/pathlib.py", line 1078, in _opener
          return self._accessor.open(self, flags, mode)
      FileNotFoundError: [Errno 2] No such file or directory: '/home/runner/work/VideoCardShop/VideoCardShop/README.md'
      [end of output]
  
  note: This error originates from a subprocess, and is likely not a problem with pip.
error: metadata-generation-failed

× Encountered error while generating package metadata.
╰─> See above for output.

note: This is an issue with the package mentioned above, not pip.
hint: See above for details.
Error: Process completed with exit code 1.


Это потому что у меня папка проекта называется InternetShop?
