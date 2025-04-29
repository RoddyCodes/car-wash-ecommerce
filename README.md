# 🚗 Car Wash Supply E‑Commerce

> **Full‑Stack Demo:** A prototype online store for car wash supplies, featuring a Django REST Framework backend and a React.js frontend.

---

## 📋 Table of Contents

- [✅ Completed](#-completed)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Usage](#️-usage)
- [📂 Project Structure](#-project-structure)
- [🛠 Tech Stack](#-tech-stack)
- [🔜 Next Steps](#-next-steps)
- [📬 Contact](#-contact)

---

## ✅ Completed

- **Environment & Database**
  - Installed PostgreSQL and created `carwashdb`
  - Configured Django project with `venv`, environment variables, and database settings
- **Backend (Django & DRF)**
  - Models: `Product`, `Order`, `OrderItem`, `CustomerProfile`
  - Admin: Registered models and verified CRUD via Django Admin
  - API: CRUD endpoints (`/api/products/`, `/api/orders/`, `/api/profiles/`) using DRF ModelViewSets
  - Serializers: `ProductSerializer`, `OrderSerializer` (nested items), `CustomerProfileSerializer`
  - Browsable API enabled with `rest_framework` templates
- **Frontend (React & MUI)**
  - Scaffolded with Create React App
  - Material‑UI installed and theme applied
  - React Router v6 setup for navigation
  - Components: `Navbar`, `ProductGrid`, `ProductDetail`, `Cart`, `Checkout`
  - Global cart state managed via React Context
  - Axios configured with proxy for API requests
  - Local image hosting for product thumbnails

---

## 🚀 Getting Started

1. **Clone repository**

```bash
git clone https://github.com/RoddyCodes/car-wash-ecommerce.git
cd car-wash-ecommerce
````

2. **Backend setup**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
````

3. **Frontend setup**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```



- Backend API: `http://localhost:8000/api/`
- React App: `http://localhost:3000/`

---

## ⚙️ Usage

- **Shop**: Browse products at `/shop`
- **Details**: View product at `/shop/:id`
- **Cart**: Manage cart at `/cart`
- **Checkout**: Submit order at `/checkout`
- **Admin**: Manage data at `http://localhost:8000/admin/`

---

## 📂 Project Structure

```plaintext
car-wash-ecommerce/
├── backend/          # Django backend
│   ├── config/       # settings, URLs, WSGI/ASGI
│   └── store/        # app: models, serializers, views, URLs
└── frontend/         # React frontend
````

---

## 🛠 Tech Stack

- **Backend**: Python 3.11, Django 5.2, Django REST Framework, PostgreSQL
- **Frontend**: React.js, Material‑UI, React Router, Axios
- **Tools**: Git, npm, venv

---

---

## 📬 Contact

Ryan Pham – [roddyscodingservice@gmail.com](mailto\:roddyscodingservice@gmail.com)

