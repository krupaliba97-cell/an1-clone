from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    slug = db.Column(db.String(100), unique=True, nullable=False)
    apps = db.relationship('App', backref='category', lazy=True)

class App(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    developer = db.Column(db.String(100))
    version = db.Column(db.String(50))
    size = db.Column(db.String(50))
    description = db.Column(db.Text)
    image = db.Column(db.String(200))
    download_url = db.Column(db.String(500))
    is_mod = db.Column(db.Boolean, default=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
