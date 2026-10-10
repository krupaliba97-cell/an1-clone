from flask import Flask, render_template, request, redirect, url_for, session, flash, send_from_directory
from models import db, App, Category
from functools import wraps
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['SECRET_KEY'] = 'an1clone-super-secret-key-123'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///an1.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = os.path.join('static', 'uploads')

db.init_app(app)

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'admin_logged_in' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

with app.app_context():
    db.create_all()
    # Create default categories if none
    if not Category.query.first():
        db.session.add(Category(name='Games', slug='games'))
        db.session.add(Category(name='Programs', slug='programs'))
        db.session.add(Category(name='News', slug='news'))
        db.session.commit()

# --- PUBLIC ROUTES ---
@app.route('/')
def index():
    latest_apps = App.query.order_by(App.created_at.desc()).limit(12).all()
    return render_template('index.html', apps=latest_apps)

@app.route('/category/<slug>')
def category(slug):
    cat = Category.query.filter_by(slug=slug).first_or_404()
    apps = App.query.filter_by(category_id=cat.id).order_by(App.created_at.desc()).all()
    return render_template('category.html', category=cat, apps=apps)

@app.route('/app/<int:app_id>')
def single_app(app_id):
    item = App.query.get_or_404(app_id)
    return render_template('single.html', app=item)

@app.route('/faq')
def faq():
    return render_template('faq.html')

# --- ADMIN ROUTES ---
@app.route('/admin/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Simple hardcoded admin credentials (user should change in production)
        if request.form['username'] == 'admin' and request.form['password'] == 'admin123':
            session['admin_logged_in'] = True
            return redirect(url_for('admin_dashboard'))
        else:
            flash('Invalid credentials')
    return render_template('admin/login.html')

@app.route('/admin/logout')
def logout():
    session.pop('admin_logged_in', None)
    return redirect(url_for('index'))

@app.route('/admin')
@login_required
def admin_dashboard():
    apps = App.query.order_by(App.created_at.desc()).all()
    return render_template('admin/dashboard.html', apps=apps)

@app.route('/admin/add', methods=['GET', 'POST'])
@login_required
def admin_add():
    categories = Category.query.all()
    if request.method == 'POST':
        title = request.form.get('title')
        developer = request.form.get('developer')
        version = request.form.get('version')
        size = request.form.get('size')
        description = request.form.get('description')
        download_url = request.form.get('download_url')
        is_mod = 'is_mod' in request.form
        category_id = request.form.get('category_id')
        
        image_file = request.files['image']
        image_filename = ''
        if image_file and image_file.filename:
            image_filename = secure_filename(image_file.filename)
            image_file.save(os.path.join(app.config['UPLOAD_FOLDER'], image_filename))
        
        new_app = App(
            title=title, developer=developer, version=version, size=size,
            description=description, download_url=download_url, is_mod=is_mod,
            image=image_filename, category_id=category_id
        )
        db.session.add(new_app)
        db.session.commit()
        flash('App added successfully!')
        return redirect(url_for('admin_dashboard'))
        
    return render_template('admin/add_app.html', categories=categories)

@app.route('/admin/delete/<int:id>')
@login_required
def admin_delete(id):
    app_item = App.query.get_or_404(id)
    db.session.delete(app_item)
    db.session.commit()
    flash('App deleted!')
    return redirect(url_for('admin_dashboard'))

if __name__ == '__main__':
    app.run(debug=True, port=5000)
