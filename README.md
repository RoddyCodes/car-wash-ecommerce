# 🚗 Car Wash Supply E-Commerce Backend

This is the **backend of an e-commerce web application** for a local car wash product seller. Built using Django and PostgreSQL, it includes product management, order tracking, and customer profiles — all exposed via REST APIs for a React.js frontend. We are still working on making this a full-stack application. This is still in the beggining phases. 

---

## 🔧 Tech Stack

- **Backend:** Django, Django REST Framework *(coming soon)*
- **Database:** PostgreSQL
- **Frontend:** React.js *(connected via REST API)*
- **Auth:** Django built-in User model
- **Admin Interface:** Django Admin
- **Hosting (planned):** AWS EC2 + S3

---

## 📦 Features Implemented

- [x] Product model with admin management
- [x] Order and OrderItem system
- [x] Customer profile extension for user info
- [x] PostgreSQL integration
- [x] Admin dashboard for product/order management
- [ ] REST API with Django REST Framework *(in progress)*
- [ ] React frontend connected via axios *(in progress)*

---

## 🚀 Getting Started

```bash
# Clone this repo
git clone https://github.com/your-username/car-wash-ecommerce.git
cd car-wash-ecommerce

# Set up virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set up your .env or edit settings.py for PostgreSQL

# Apply migrations
python manage.py migrate

# Create a superuser
python manage.py createsuperuser

# Run the dev server
python manage.py runserver

bash '''



