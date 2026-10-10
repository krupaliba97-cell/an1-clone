# AN1 Clone - Full Stack

This is a full-stack clone of the an1.com website built with Python (Flask) and SQLite.

## Features
- **Public Website:** Home, Games, Programs, News, FAQ, Single App Download Page.
- **Admin Panel:** Login, Dashboard, Add/Delete Apps, Image Upload.
- **Database:** SQLite (No setup required).

## How to Run Locally
1. Make sure Python is installed.
2. Install dependencies: `pip install -r requirements.txt`
3. Run the app: `python app.py`
4. Access the site at `http://127.0.0.1:5000`
5. Access Admin Panel at `http://127.0.0.1:5000/admin/login` (Username: **admin**, Password: **admin123**)

## How to Deploy (Render.com / PythonAnywhere)
You can easily deploy this repository to Render.com.
- Create a new Web Service.
- Connect this GitHub repository.
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn app:app`
